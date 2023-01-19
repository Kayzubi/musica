import { useContext, useEffect } from 'react'
import MusicContext from '../../contexts/MusicContext'
import AnimatedDiv from '../shared/AnimatedDiv'
import Hero from '../shared/Hero'
import TrackList from '../shared/TrackList'
function Home() {
  const { hotNaija, todaysHits, screenWidth, setNavOpen } =
    useContext(MusicContext)

  const playlists = [
    {
      id: '37i9dQZEVXbMDoHDwVN2tF',
      playlist: todaysHits,
      name: `Today's Top Hits`,
    },
    {
      id: '37i9dQZF1DWZCOSaet9tpB',
      playlist: hotNaija,
      name: `Hot Hits Naija`,
    },
  ]

  useEffect(() => {
    screenWidth < 768 && setNavOpen(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenWidth])

  return (
    <AnimatedDiv>
      <div className='home'>
        <Hero />
        {playlists.map((playlist) => (
          <TrackList key={playlist.id} data={playlist} />
        ))}
      </div>
    </AnimatedDiv>
  )
}

export default Home
