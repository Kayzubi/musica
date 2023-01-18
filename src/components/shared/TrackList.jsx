import TrackCard from './TrackCard'
import { useContext, useState } from 'react'
import MusicContext from '../../contexts/MusicContext'
import Spinner from './Spinner'
import { useEffect } from 'react'

function TrackList({ listname, id }) {
  const { fetchData } = useContext(MusicContext)
  const [isLoading, setLoading] = useState(true)
  const [playlist, setPlaylist] = useState([])

  useEffect(() => {
    async function setPlaylistData() {
      const data = await fetchData(
        `playlist_tracks/?id=${id}&offset=0&limit=10`
      )
      setPlaylist(data.items)
      setLoading(false)
    }

    setPlaylistData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='list'>
      <h2 className='list-title'>{listname}</h2>
      {isLoading ? (
        <Spinner size={'medium'} />
      ) : (
        <div className='list-h'>
          {playlist &&
            playlist.map((item) => (
              <TrackCard key={item.id} data={item.track} playlist={playlist} />
            ))}
        </div>
      )}
    </div>
  )
}

export default TrackList
