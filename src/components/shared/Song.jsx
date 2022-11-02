import { HiOutlineHeart, HiDotsVertical, HiPlay, HiHeart } from 'react-icons/hi'
import MusicContext from '../../contexts/MusicContext'
import { useContext } from 'react'

function Song({ data, playlist }) {
  const { title, album, artist, type, duration } = data
  const munites = Math.floor(duration / 60)
  const seconds = duration % 60

  const { loadTrack, addToLikes, deleteFromLikes, myLikes } =
    useContext(MusicContext)

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0')
  }

  return (
    <div className='song'>
      <div onClick={() => loadTrack(data, playlist.data)} className='song-img'>
        <button className='song-btnPlay'>
          <HiPlay />
        </button>
        <img src={album.cover} alt='' />
      </div>
      {myLikes?.filter((song) => song.id === data.id)[0] ? (
        <p onClick={() => deleteFromLikes(data.id)} className='song-like'>
          <HiHeart />
        </p>
      ) : (
        <p onClick={() => addToLikes(data)} className='song-like'>
          <HiOutlineHeart />
        </p>
      )}
      <p onClick={() => loadTrack(data, playlist.data)} className='song-title'>
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
