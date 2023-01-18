import ChartCard from './shared/ChartCard'
import { useContext, useState, useEffect } from 'react'
import MusicContext from '../contexts/MusicContext'
import Spinner from './shared/Spinner'
function ChartList() {
  const { chartData, setChartData, fetchData } = useContext(MusicContext)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      setChartData(
        await fetchData(
          `albums/?ids=16ppCNm1KGCgUS0g3iKqh8%2C6BK6S6VtshawDNE1MGT3eK%2C2DNwwAZeVYl3Ld9zTP4zBA%2C7u1jkHWcxmUL7lbNDNyMRY%2C73rKiFhHZatrwJL0B1F6hY`
        )
      )
      setLoading(false)
    }

    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isLoading ? (
    <div className='chart'>
      <h2 className='list-title'>Top chart</h2>
      <Spinner size={'medium'} />
    </div>
  ) : (
    <div className='chart'>
      <h2 className='list-title'>Top chart</h2>
      <div className='chart-playlists'>
        {chartData &&
          chartData.albums.map((item) => {
            return <ChartCard key={item.id} item={item} />
          })}
      </div>
    </div>
  )
}

export default ChartList
