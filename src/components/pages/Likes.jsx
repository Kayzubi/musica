import { useContext, useState, useEffect } from 'react'
import MusicContext from '../../contexts/MusicContext'
import Spinner from '../shared/Spinner'
import TrackCard from '../shared/TrackCard'

function Likes() {
  const { myLikes } = useContext(MusicContext)
  const data = myLikes

  const [playlist, setPlaylist] = useState([])

  useEffect(() => {
    const list = {
      items: myLikes?.map((item) => {
        return {
          id: item.data.id,
          track: item.data,
        }
      }),
    }

    setPlaylist(list)
  }, [myLikes])

  if (myLikes === undefined) return <Spinner size='large' />

  return (
    <div>
      {data === undefined || data.length === 0 ? (
        <div className='center'>
          <p>
            You currently have no songs in your{' '}
            <span className='secondary'>Likes</span>
          </p>
          <p>
            Add songs to your <span className='secondary'>Likes</span>
          </p>
        </div>
      ) : (
        <div className='myLikes'>
          {data.map((song, index) => (
            <TrackCard data={song.data} playlist={playlist} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Likes
