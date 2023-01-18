import { Link } from 'react-router-dom'

function ChartCard({ item }) {
  const { artists, images, name, label, id } = item

  return (
    <Link to={`/chart/${id}`} className='chart-card'>
      <img src={images[1].url} alt='cover art' className='chart-img' />
      <div className='chart-details'>
        <h4 className='chart-name'>{name}</h4>
        <p className='chart-author'>{artists[0].name}</p>
        <p className='chart-duration'>{label}</p>
      </div>
    </Link>
  )
}

export default ChartCard
