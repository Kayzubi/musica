import { useContext, useState, useEffect } from 'react'
import { IoIosPlayCircle, IoIosClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import MusicContext from '../contexts/MusicContext'
function CollectionCard({ data, remove }) {
  const { loadTrack } = useContext(MusicContext)
  const [playlist, setPlaylist] = useState([])

  const { id, images, name, tracks, artists, total_tracks } = data

  useEffect(() => {
    const list = tracks.items.map((item) => {
      return {
        id: item.id,
        track: {
          ...item,
          album: { name: name, images: images },
        },
      }
    })

    setPlaylist(list)
  }, [images, name, tracks])

  return (
    <div className='collection__card'>
      <button
        onClick={() => remove(id)}
        className='collection__card-btn collection-remove'>
        <IoIosClose />
      </button>
      <Link to={`/album/${id}`}>
        <img src={images[1].url} alt='' className='collection__card-img' />
      </Link>
      <div className='collection__card-details'>
        <button
          onClick={() => loadTrack(playlist[0].track, playlist)}
          className='collection__card-btn collection-play'>
          <IoIosPlayCircle />
        </button>
        <h3 className='collection__card-title'>{name}</h3>
        <p className='collection__card-author'>{artists[0].name}</p>
        <p className='collection__card-likes'>{total_tracks} tracks</p>
      </div>
    </div>
  )
}

export default CollectionCard
