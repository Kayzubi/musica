import ChartCard from './shared/ChartCard'
import { chartList } from '../data/db'

function ChartList() {
  return (
    <div className='chart'>
      <h2 className='list-title'>Top chart</h2>
      {chartList.map((item) => {
        return (
          <ChartCard
            key={item.name}
            image={item.srcImage}
            name={item.name}
            author={item.author}
            duration={item.duration}
          />
        )
      })}
    </div>
  )
}

export default ChartList
