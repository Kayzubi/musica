import { createContext, useEffect, useState } from 'react'
import CollectionData from './Collection'

const MusicContext = createContext()

export const MusicContextProvider = ({ children }) => {
  const [chartData, setChartData] = useState()
  const [chartDetails, setChartDetails] = useState()
  const [topSongs, setTopSongs] = useState()
  const [globalHits, setGlobalHits] = useState()
  const [afroBeats, setAfrobeats] = useState()
  const [isLoading, setisLoading] = useState(true)
  const [currentTrack, setCurrentTrack] = useState()
  const [trackIndex, setTrackIndex] = useState(0)
  const [trackQueue, setTrackQueue] = useState()
  const [audioPlayer, setAudioPlayer] = useState(
    document.createElement('audio')
  )
  const [currentTime, setCurrentTime] = useState(0)
  const [isRepeat, setRepeat] = useState(false)
  const [isPlaying, setPlaying] = useState(false)
  const [isShuffled, setShuffled] = useState(false)

  const {
    myCollection,
    myLikes,
    addToCollection,
    addToLikes,
    deleteFromCollection,
    deleteFromLikes,
  } = CollectionData()

  const fetchData = async (url) => {
    const data = await (await fetch(`/${url}`)).json()
    return data
  }

  useEffect(() => {
    async function runData() {
      setChartData(await fetchData('chart/0/playlists?index=0&limit=5'))
      setTopSongs(
        await fetchData('playlist/1362516565/tracks?index=0&limit=15')
      )
      setGlobalHits(
        await fetchData('playlist/2098157264/tracks?index=0&limit=15')
      )
      setAfrobeats(
        await fetchData('playlist/8970461162/tracks?index=0&limit=15')
      )
      setisLoading(false)
    }

    runData()
    setAudioPlayer(document.querySelector('#audio-player'))
  }, [])

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
    } else {
      setTrackIndex((currentIndex) => {
        console.log(currentIndex)
        return currentIndex < trackQueue.length - 1 ? currentIndex + 1 : 0
      })
    }
    setCurrentTrack(trackQueue[trackIndex])
  }

  const previousTrack = () => {
    setTrackIndex((currentIndex) =>
      currentIndex === 0 ? trackQueue.length - 1 : currentIndex - 1
    )
    setCurrentTrack(trackQueue[trackIndex])
    console.log(trackIndex)
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
      return item.id === track.id
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
        audioPlayer,
        chartData,
        topSongs,
        globalHits,
        afroBeats,
        isLoading,
        chartDetails,
        currentTrack,
        currentTime,
        trackIndex,
        trackQueue,
        isPlaying,
        isRepeat,
        isShuffled,
        myCollection,
        myLikes,
        addToCollection,
        addToLikes,
        deleteFromCollection,
        deleteFromLikes,
        setPlaying,
        setRepeat,
        setShuffled,
        setTrackIndex,
        setTrackQueue,
        setChartDetails,
        setCurrentTrack,
        setCurrentTime,
        loadTrack,
        playPauseTrack,
        toggleShuffle,
        toggleRepeat,
        nextTrack,
        previousTrack,
        fetchData,
      }}>
      {children}
    </MusicContext.Provider>
  )
}

export default MusicContext
