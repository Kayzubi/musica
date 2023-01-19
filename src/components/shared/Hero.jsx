import { IoIosHeart } from 'react-icons/io'
import artist from '../assets/Pexels Photo by Eric Esma.png'
import vector from '../assets/Vector.png'
import ChartList from '../ChartList'

function Hero() {
  return (
    <div className='hero'>
      <div className='hero__main'>
        <div className='hero__main-text'>
          <p className='small'> Curated playlist</p>
          <div className='hero__heading'>
            <h1 className='hero__heading-primary'>R & B Hits</h1>
            <p className='hero__heading-small'>
              Sexy love, Exchange, Stuck on you, Let Me Love you, MAd, No love,
              Bad habit, and so much more
            </p>
          </div>
          <div className='hero__stats'>
            <div className='listeners'></div>
            <div className='hero__likes'>
              <IoIosHeart />
              <span className='likes'> 33k Likes</span>
            </div>
          </div>
        </div>
        <img src={artist} alt='artist' className='hero__main-img' />
        <img src={vector} alt='' className='hero__main-vector' />
      </div>

      <ChartList />
    </div>
  )
}

export default Hero
