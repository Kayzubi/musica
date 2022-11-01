import { useContext } from 'react'
import { IoIosPlayCircle, IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import MusicContext from '../../contexts/MusicContext'

function TrackCard({ data, playlist }) {
  const { loadTrack, myLikes, addToLikes, deleteFromLikes } =
    useContext(MusicContext)
  return (
    <div className='music list-item'>
      <div onClick={() => loadTrack(data, playlist)} className='music-img-box'>
        <button className='music-btn music-play'>
          <IoIosPlayCircle />
        </button>
        <img src={data.album.cover_medium} alt='track' className='music-img' />
      </div>
      <p className='music-name'>{data.title}</p>
      <p className='music-artist'>{data.artist.name}</p>
      {myLikes?.filter((song) => song.id === data.id)[0] ? (
        <button
          onClick={() => deleteFromLikes(data.id)}
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
