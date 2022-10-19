import { useContext } from 'react'
import MusicContext from '../../contexts/MusicContext'
import AnimatedDiv from '../shared/AnimatedDiv'
import Hero from '../shared/Hero'
import TrackList from '../shared/TrackList'
function Home() {
  const { topSongs, globalHits } = useContext(MusicContext)

  return (
    <AnimatedDiv>
      <div className='home'>
        <Hero />
        <TrackList listname='Top Nigeria' listdata={topSongs} />
        <TrackList listdata={globalHits} listname='Global Hits' />
      </div>
    </AnimatedDiv>
  )
}

export default Home
