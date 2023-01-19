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
          'playlist_tracks/?id=37i9dQZEVXbMDoHDwVN2tF&offset=0&limit=10'
        )
      )
      setHotNaija(
        await fetchData(
          'playlist_tracks/?id=37i9dQZF1DWZCOSaet9tpB&offset=0&limit=10'
        )
      )
      setLoading(false)
    }

    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MusicContext.Provider
      value={{
        myCollection,
        myLikes,
        addToCollection,
        addToLikes,
        deleteFromCollection,
        deleteFromLikes,
        chartData,
        hotNaija,
        todaysHits,
        isLoading,
        chartDetails,
        setChartDetails,
        fetchData,
      }}>
      {children}
    </MusicContext.Provider>
  )
}

export default MusicContext
