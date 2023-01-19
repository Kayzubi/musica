import { createContext, useState, useEffect } from 'react'
import CollectionData from './Collection'

const MusicContext = createContext()
const RAPIDAPI_KEY = process.env.REACT_APP_X_RAPIDAPI_KEY
const RAPIDAPI_HOST = process.env.REACT_APP_X_RAPIDAPI_HOST
const RAPIDAPI_URL = process.env.REACT_APP_API_URL

export const MusicContextProvider = ({ children }) => {
  const [chartData, setChartData] = useState([])
  const [todaysHits, setTodaysHits] = useState()
  const [hotNaija, setHotNaija] = useState()
  const [chartDetails, setChartDetails] = useState()
  const [isLoading, setLoading] = useState(true)
  const [audioPlayer, setAudioPlayer] = useState(
    document.createElement('audio')
  )
  const [currentTime, setCurrentTime] = useState(0)
  const [isRepeat, setRepeat] = useState(false)
  const [isPlaying, setPlaying] = useState(false)
  const [isShuffled, setShuffled] = useState(false)
  const [currentTrack, setCurrentTrack] = useState()
  const [trackIndex, setTrackIndex] = useState(0)
  const [trackQueue, setTrackQueue] = useState()
  const [screenWidth, setScreenWidth] = useState()
  const [navOpen, setNavOpen] = useState(true)

  const {
    myCollection,
    myLikes,
    addToCollection,
    addToLikes,
    deleteFromCollection,
    deleteFromLikes,
  } = CollectionData()

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': RAPIDAPI_KEY,
      'X-RapidAPI-Host': RAPIDAPI_HOST,
    },
  }

  const fetchData = async (url) => {
    const data = await (await fetch(`${RAPIDAPI_URL}/${url}`, options)).json()
    return data
  }

  useEffect(() => {
    async function getData() {
      setChartData(
        await fetchData(
          `albums/?ids=16ppCNm1KGCgUS0g3iKqh8%2C6BK6S6VtshawDNE1MGT3eK%2C2DNwwAZeVYl3Ld9zTP4zBA%2C7u1jkHWcxmUL7lbNDNyMRY%2C73rKiFhHZatrwJL0B1F6hY`
        )
      )
      setTodaysHits(
        await fetchData(
          'playlist_tracks/?id=37i9dQZEVXbMDoHDwVN2tF&offset=0&limit=15'
        )
      )
      setHotNaija(
        await fetchData(
          'playlist_tracks/?id=37i9dQZF1DWZCOSaet9tpB&offset=0&limit=15'
        )
      )
      setLoading(false)
    }

    getData()
    setAudioPlayer(document.getElementById('audio-player'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Get Screen Width
  window.onload = (e) => {
    setScreenWidth(window.innerWidth)
  }
  window.onresize = (e) => {
    setScreenWidth(e.target.innerWidth)
  }

  useEffect(() => {
    if (screenWidth < 768) {
      setNavOpen(false)
    } else {
      setNavOpen(true)
    }
  }, [screenWidth])

  const toggleNav = () => {
    navOpen ? setNavOpen(false) : setNavOpen(true)
  }

  const toggleRepeat = () => {
    if (isRepeat) {
      setRepeat(false)
      audioPlayer.loop = false
    } else {
      setRepeat(true)
      audioPlayer.loop = true
    }
  }

  const toggleShuffle = () => {
    isShuffled ? setShuffled(false) : setShuffled(true)
  }

  const playPauseTrack = () => {
    if (!isPlaying && currentTrack === undefined) {
      console.log('Nothing to play')
    } else if (!isPlaying) {
      playTrack()
    } else {
      pauseTrack()
    }
  }

  const playTrack = () => {
    audioPlayer.play()
    setPlaying(true)
  }

  const pauseTrack = () => {
    audioPlayer.pause()
    setPlaying(false)
  }

  const nextTrack = () => {
    if (isShuffled) {
      const random = Math.floor(Math.random() * trackQueue.length)
      setTrackIndex(random)
      setCurrentTrack(trackQueue[random].track)
    } else {
      let index
      trackIndex < trackQueue.length - 1
        ? (index = trackIndex + 1)
        : (index = 0)

      setTrackIndex(index)
      setCurrentTrack(trackQueue[index].track)
    }
  }

  const previousTrack = () => {
    let index

    trackIndex === 0
      ? (index = trackQueue.length - 1)
      : (index = trackIndex - 1)

    setTrackIndex(index)
    setCurrentTrack(trackQueue[index].track)
  }

  audioPlayer.onended = () => {
    nextTrack()
  }

  audioPlayer.ontimeupdate = () => {
    setCurrentTime(((audioPlayer.currentTime / 30) * 100).toFixed(2))
  }

  const loadTrack = (track, playlist) => {
    setTrackQueue(playlist)
    let index = playlist.findIndex((item) => {
      return item.track.id === track.id
    })
    setCurrentTrack(track)
    setTrackIndex(index)
    audioPlayer.onloadedmetadata = () => {
      playTrack()
    }
  }

  return (
    <MusicContext.Provider
      value={{
        navOpen,
        screenWidth,
        myCollection,
        myLikes,
        addToCollection,
        addToLikes,
        deleteFromCollection,
        deleteFromLikes,
        audioPlayer,
        chartData,
        hotNaija,
        todaysHits,
        isLoading,
        chartDetails,
        setChartDetails,
        currentTime,
        currentTrack,
        trackIndex,
        trackQueue,
        isPlaying,
        isRepeat,
        isShuffled,
        fetchData,
        loadTrack,
        previousTrack,
        nextTrack,
        playPauseTrack,
        toggleShuffle,
        toggleRepeat,
        setCurrentTime,
        toggleNav,
        setNavOpen,
      }}>
      {children}
    </MusicContext.Provider>
  )
}

export default MusicContext
