import { Link } from 'react-router-dom'

function ChartCard({ item }) {
  const { artists, images, name, label, id } = item

  return (
    <div className='chart-card'>
      <Link to={`/album/${id}`}>
        <div className='chart-img'>
          <img src={images[2].url} alt='cover art' />
        </div>
        <div className='chart-details'>
          <h4 className='chart-name'>{name}</h4>
          <p className='chart-author'>{artists[0].name}</p>
          <p className='chart-duration'>{label}</p>
        </div>
      </Link>
    </div>
  )
}

export default ChartCard
