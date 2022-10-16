import { IoIosHeartEmpty } from 'react-icons/io'

function ChartCard({ image, name, author, duration }) {
  return (
    <div className='chart-card'>
      <img src={image} alt='cover art' className='chart-img' />
      <div className='chart-details'>
        <h4 className='chart-name'>{name}</h4>
        <p className='chart-author'>{author}</p>
        <p className='chart-duration'>{duration}</p>
        <button className='btn chart-like'>
          <IoIosHeartEmpty />
        </button>
      </div>
    </div>
  )
}

export default ChartCard
