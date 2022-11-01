import { useContext, useEffect } from 'react'
import MusicContext from '../../contexts/MusicContext'
import AnimatedDiv from '../shared/AnimatedDiv'
import Hero from '../shared/Hero'
import TrackList from '../shared/TrackList'
function Home() {
  const { topSongs, globalHits, afroBeats } = useContext(MusicContext)

  useEffect(() => {
    console.log(topSongs)
  }, [])

  return (
    <AnimatedDiv>
      <div className='home'>
        <Hero />
        <TrackList listname='Top Nigeria' listdata={topSongs} />
        <TrackList listdata={globalHits} listname='Global Hits' />
        <TrackList listdata={afroBeats} listname='Afrobeats Essentials' />
      </div>
    </AnimatedDiv>
  )
}

export default Home
