import AnimatedDiv from '../shared/AnimatedDiv'
import Hero from '../shared/Hero'
import TrackList from '../shared/TrackList'
function Home() {
  const playlists = [
    {
      id: '37i9dQZEVXbMDoHDwVN2tF',
      name: `Today's Top Hits`,
    },
    {
      id: '37i9dQZF1DWZCOSaet9tpB',
      name: `Hot Hits Naija`,
    },
    {
      id: '37i9dQZF1DWT4nLa3WetIs',
      name: `Afro Throwback`,
    },
  ]

  return (
    <AnimatedDiv>
      <div className='home'>
        <Hero />
        {playlists.map((playlist) => (
          <TrackList
            key={playlist.id}
            listname={playlist.name}
            id={playlist.id}
          />
        ))}
      </div>
    </AnimatedDiv>
  )
}

export default Home
