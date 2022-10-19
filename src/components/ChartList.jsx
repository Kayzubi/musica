import ChartCard from './shared/ChartCard'
import { useContext } from 'react'
import MusicContext from '../contexts/MusicContext'
function ChartList() {
  const { chartData } = useContext(MusicContext)

  return (
    <div className='chart'>
      <h2 className='list-title'>Top chart</h2>
      {chartData &&
        chartData.data.map((item) => {
          return (
            <ChartCard
              key={item.id}
              id={item.id}
              image={item.picture}
              name={item.title}
              author={item.user.name}
              duration={item.creation_date}
            />
          )
        })}
    </div>
  )
}

export default ChartList
