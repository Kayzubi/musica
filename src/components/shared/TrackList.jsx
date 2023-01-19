import { useContext } from 'react'
import MusicContext from '../../contexts/MusicContext'
import Spinner from './Spinner'
import TrackCard from './TrackCard'

function TrackList({ data }) {
  const { isLoading } = useContext(MusicContext)

  const { name, playlist } = data

  return (
    <div className='list'>
      <h2 className='list-title'>{name}</h2>
      {isLoading ? (
        <Spinner size={'medium'} />
      ) : (
        <div className='list-h'>
          {playlist &&
            playlist.items.map((item) => (
              <TrackCard key={item.id} data={item.track} playlist={playlist} />
            ))}
        </div>
      )}
    </div>
  )
}

export default TrackList
