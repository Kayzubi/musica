import { createContext, useEffect, useState } from 'react'

const MusicContext = createContext()

export const MusicContextProvider = ({ children }) => {
  const [chartData, setChartData] = useState()
  const [topSongs, setTopSongs] = useState()
  const [globalHits, setGlobalHits] = useState()

  const fetchData = async (url) => {
    const response = await fetch(`/${url}`)
    const data = await response.json()
    return data
  }

  useEffect(() => {
    async function runData() {
      setChartData(await fetchData('chart/0/playlists?index=0&limit=3'))
      setTopSongs(
        await fetchData('playlist/1362516565/tracks?index=0&limit=20')
      )
      setGlobalHits(
        await fetchData('playlist/2098157264/tracks?index=0&limit=20')
      )
    }

    runData()
  }, [])

  return (
    <MusicContext.Provider value={{ chartData, topSongs, globalHits }}>
      {children}
    </MusicContext.Provider>
  )
}

export default MusicContext
