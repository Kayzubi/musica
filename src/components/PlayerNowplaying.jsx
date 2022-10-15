function PlayerNowplaying() {
  return (
    <div className='player__now-playing'>
      <img
        src='assets/Rectangle 26.png'
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
