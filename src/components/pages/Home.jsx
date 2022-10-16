import { newReleases, popular } from '../../data/db'
import AnimatedDiv from '../shared/AnimatedDiv'
import Hero from '../shared/Hero'
import TrackList from '../shared/TrackList'
function Home() {
  return (
    <AnimatedDiv>
      <div className='home'>
        <Hero />
        <TrackList listname='New releases' listdata={newReleases} />
        <TrackList listdata={popular} listname='Popular in your area' />
      </div>
    </AnimatedDiv>
  )
}

export default Home
