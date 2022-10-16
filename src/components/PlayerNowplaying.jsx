import srcImage from './assets/Rectangle 26.png'

function PlayerNowplaying() {
  return (
    <div className='player__now-playing'>
      <img
        src={srcImage}
        alt='now playing'
        className='player__now-playing-img'
      />
      <div className='player__now-playing-details'>
        <p className='title'> Season in</p>
        <div className='artist'>James</div>
      </div>
    </div>
  )
}

export default PlayerNowplaying
