import { useEffect } from 'react'
import { createContext, useState } from 'react'
import CollectionData from './Collection'

const MusicContext = createContext()
const RAPIDAPI_KEY = process.env.REACT_APP_X_RAPIDAPI_KEY
const RAPIDAPI_HOST = process.env.REACT_APP_X_RAPIDAPI_HOST
const RAPIDAPI_URL = process.env.REACT_APP_API_URL

export const MusicContextProvider = ({ children }) => {
  const [chartData, setChartData] = useState([])
  const [chartDetails, setChartDetails] = useState()

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
        chartDetails,
        setChartDetails,
        setChartData,
        fetchData,
      }}>
      {children}
    </MusicContext.Provider>
  )
}

export default MusicContext
