import Image from '../assets/Rectangle 14 (1).png'
function Likes() {
  return (
    <div>
      <div className='music list-item'>
        <img src={Image} alt='track' className='music-img' />
        <p className='music-name'>Cough Odo</p>
        <p className='music-artist'>Kizz Daniel</p>
      </div>
    </div>
  )
}

export default Likes
