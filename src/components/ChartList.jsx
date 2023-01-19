import { useContext } from 'react'
import MusicContext from '../contexts/MusicContext'
import ChartCard from './shared/ChartCard'
import Spinner from './shared/Spinner'
function ChartList() {
  const { chartData, isLoading } = useContext(MusicContext)

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
