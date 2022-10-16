function TrackCard({ image, name, artist }) {
  return (
    <div className='music list-item'>
      <img src={image} alt='track' className='music-img' />
      <p className='music-name'>{name}</p>
      <p className='music-artist'>{artist}</p>
    </div>
  )
}

export default TrackCard
