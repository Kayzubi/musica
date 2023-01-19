import { useContext } from 'react'
import { HiDotsVertical, HiHeart, HiOutlineHeart, HiPlay } from 'react-icons/hi'
import MusicContext from '../../contexts/MusicContext'

function Song({ data, playlist, cover }) {
  const { name, artists, type, duration_ms } = data.track

  const { loadTrack, addToLikes, deleteFromLikes, myLikes } =
    useContext(MusicContext)

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000)
    var seconds = ((millis % 60000) / 1000).toFixed(0)
    return seconds === 60
      ? minutes + 1 + ':00'
      : minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  return (
    <div className='song' id={data.track.id}>
      <div onClick={() => loadTrack(data.track, playlist)} className='song-img'>
        <button className='song-btnPlay'>
          <HiPlay />
        </button>
        <img src={cover} alt='' />
      </div>
      {myLikes?.filter((song) => song.id === data.id)[0] ? (
        <p onClick={() => deleteFromLikes(data.id)} className='song-like'>
          <HiHeart />
        </p>
      ) : (
        <p onClick={() => addToLikes(data.track)} className='song-like'>
          <HiOutlineHeart />
        </p>
      )}
      <p onClick={() => loadTrack(data.track, playlist)} className='song-title'>
        {name} <br />
        {artists.map((artist) => (
          <span className='song_artistname'> {artist.name}</span>
        ))}
      </p>
      <p className='song-type'> {type} </p>
      <p className='song-duration'>{millisToMinutesAndSeconds(duration_ms)}</p>
      <span className='song-options'>
        <HiDotsVertical />
      </span>
    </div>
  )
}

export default Song
