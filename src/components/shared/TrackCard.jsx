import { useContext } from 'react'
import MusicContext from '../../contexts/MusicContext'

function TrackCard({ data, playlist }) {
  const { loadTrack } = useContext(MusicContext)

  return (
    <div className='music list-item' onClick={() => loadTrack(data, playlist)}>
      <img src={data.album.cover_medium} alt='track' className='music-img' />
      <p className='music-name'>{data.title}</p>
      <p className='music-artist'>{data.artist.name}</p>
    </div>
  )
}

export default TrackCard
