import { useContext } from 'react'
import { IoIosPlayCircle, IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import MusicContext from '../../contexts/MusicContext'

function TrackCard({ data, playlist }) {
  const { myLikes, addToLikes, deleteFromLikes } = useContext(MusicContext)

  const { id, album, artists, name } = data
  return (
    <div className='music list-item'>
      <div className='music-img-box'>
        <button className='music-btn music-play'>
          <IoIosPlayCircle />
        </button>
        <img src={album.images[0].url} alt='track' className='music-img' />
      </div>
      <p className='music-name'>{name}</p>
      <p className='music-artist'>{artists[0].name}</p>
      {myLikes?.filter((song) => song.id === data.id)[0] ? (
        <button
          onClick={() => deleteFromLikes(id)}
          className='music-btn music-like'>
          <IoIosHeart />
        </button>
      ) : (
        <button
          onClick={() => addToLikes(data)}
          className='music-btn music-like'>
          <IoIosHeartEmpty />
        </button>
      )}
    </div>
  )
}

export default TrackCard
