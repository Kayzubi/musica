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
        <>
          <p>
            You currently have no songs in your <span>Likes</span>
          </p>
          <p>
            Add songs to your <span>Likes</span>
          </p>
        </>
      ) : (
        data.map((song) => {
          return <TrackCard data={song.data} playlist={playlist} />
        })
      )}
    </div>
  )
}

export default Likes
