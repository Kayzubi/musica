import { useContext } from 'react'
import { IoIosPlayCircle, IoIosClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import MusicContext from '../contexts/MusicContext'
function CollectionCard({ data, remove }) {
  const { loadTrack } = useContext(MusicContext)

  return (
    <div className='collection__card'>
      <button
        onClick={() => remove(data.id)}
        className='collection__card-btn collection-remove'>
        <IoIosClose />
      </button>
      <Link to={`/chart/${data.id}`}>
        <img
          src={data.picture_medium}
          alt=''
          className='collection__card-img'
        />
      </Link>
      <div className='collection__card-details'>
        <button
          onClick={() => loadTrack(data.tracks.data[0], data.tracks.data)}
          className='collection__card-btn collection-play'>
          <IoIosPlayCircle />
        </button>
        <h3 className='collection__card-title'>{data.title}</h3>
        <p className='collection__card-author'>{data.creator.name}</p>
        <p className='collection__card-likes'>{data.nb_tracks} tracks</p>
      </div>
    </div>
  )
}

export default CollectionCard
