import { createContext, useEffect, useState } from 'react'

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
  const [isRepeat, setRepeat] = useState()
  const [isPlaying, setPlaying] = useState(false)
  const [isShuffled, setShuffled] = useState(false)

  const fetchData = async (url) => {
    const data = await (await fetch(`/${url}`)).json()
    return data
  }

  const toggleShuffle = () => {
    isShuffled ? setShuffled(false) : setShuffled(true)
  }

  const playPauseTrack = () => {
    isPlaying ? setPlaying(false) : setPlaying(true)
  }

  const loadTrack = (track, playlist) => {
    setCurrentTrack(track.preview)
    setTrackQueue(playlist.data)
    console.log(currentTrack, trackQueue)
  }

  useEffect(() => {
    async function runData() {
      setChartData(await fetchData('chart/0/playlists?index=0&limit=3'))
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
  }, [])

  return (
    <MusicContext.Provider
      value={{
        chartData,
        topSongs,
        globalHits,
        afroBeats,
        isLoading,
        chartDetails,
        currentTrack,
        trackIndex,
        trackQueue,
        isPlaying,
        isRepeat,
        isShuffled,
        setPlaying,
        setRepeat,
        setShuffled,
        setCurrentTrack,
        setTrackIndex,
        setTrackQueue,
        setChartDetails,
        playPauseTrack,
        toggleShuffle,
        loadTrack,
        fetchData,
      }}>
      {children}
    </MusicContext.Provider>
  )
}

export default MusicContext
