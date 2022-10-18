import { createContext, useEffect, useState } from 'react'

const MusicContext = createContext()

export const MusicContextProvider = ({ children }) => {
  const [chart, setChart] = useState()

  const fetchData = async (url) => {
    const response = await fetch(`/${url}`)
    const data = await response.json()
    return data
  }

  useEffect(() => {
    async function runData() {
      setChart(await fetchData('chart/0/playlists?index=0&limit=3'))
    }

    runData()
  }, [])

  return (
    <MusicContext.Provider value={{ chart }}>{children}</MusicContext.Provider>
  )
}

export default MusicContext
