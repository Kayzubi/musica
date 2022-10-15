function PlayerSeek() {
  return (
    <div className='player__seek'>
      <input type='range' id='seek' min={0} max={100} value={10} />
    </div>
  )
}

export default PlayerSeek
