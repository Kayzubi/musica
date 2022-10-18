import { IoIosHeartEmpty } from 'react-icons/io'
import { Link } from 'react-router-dom'

function ChartCard({ image, name, author, duration }) {
  return (
    <Link to={`/chart/${name}`} className='chart-card'>
      <img src={image} alt='cover art' className='chart-img' />
      <div className='chart-details'>
        <h4 className='chart-name'>{name}</h4>
        <p className='chart-author'>{author}</p>
        <p className='chart-duration'>{duration}</p>
        <button className='btn chart-like'>
          <IoIosHeartEmpty />
        </button>
      </div>
    </Link>
  )
}

export default ChartCard
