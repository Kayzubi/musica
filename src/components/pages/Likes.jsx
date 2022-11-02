import { useContext } from 'react'
import MusicContext from '../../contexts/MusicContext'
import TrackCard from '../shared/TrackCard'

function Likes() {
  const { myLikes } = useContext(MusicContext)
  const data = myLikes
  const playlist = myLikes.map((item) => item.data)

  return (
    <div>
      {data.length === 0 ? (
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
        data.map((song) => {
          return <TrackCard data={song.data} playlist={playlist} />
        })
      )}
    </div>
  )
}

export default Likes
