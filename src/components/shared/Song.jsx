import { HiOutlineHeart, HiDotsVertical } from 'react-icons/hi'
import MusicContext from '../../contexts/MusicContext'
import { useContext } from 'react'

function Song({ data, playlist }) {
  const { title, album, artist, type, duration } = data
  const munites = Math.floor(duration / 60)
  const seconds = duration % 60

  const { loadTrack } = useContext(MusicContext)

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0')
  }

  return (
    <div className='song' onClick={() => loadTrack(data, playlist.data)}>
      <div className='song-img'>
        <img src={album.cover} alt='' />
      </div>
      <p className='song-like'>
        <HiOutlineHeart />
      </p>
      <p className='song-title'>
        {title} - {artist.name}
      </p>
      <p className='song-type'> {type} </p>
      <p className='song-duration'>
        {`${padTo2Digits(munites)}:${padTo2Digits(seconds)}`}
      </p>
      <span className='song-options'>
        <HiDotsVertical />
      </span>
    </div>
  )
}

export default Song
