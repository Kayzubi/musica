import AnimatedDiv from '../shared/AnimatedDiv'
import { HiPlay, HiOutlineViewGridAdd } from 'react-icons/hi'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MusicContext from '../../contexts/MusicContext'
import Song from '../shared/Song'
import Spinner from '../shared/Spinner'
import BackgroundImage from '../BackgroundImage'

function Chart() {
  const {
    chartDetails,
    setChartDetails,
    fetchData,
    loadTrack,
    myCollection,
    deleteFromCollection,
    addToCollection,
  } = useContext(MusicContext)
  const params = useParams()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    async function getChartDetails() {
      const album = await fetchData(`albums/?ids=${params.id}`)
      setChartDetails(album.albums[0])
      setLoading(false)
    }
    getChartDetails()
    console.log(chartDetails)
    console.log(chartDetails)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) return <Spinner size={'large'} />

  return (
    <AnimatedDiv>
      <BackgroundImage image={chartDetails.images[0].url} />
      <section className='section section-info'>
        <img src={chartDetails.images[0].url} alt='' className='playlist-img' />
        <div className='playlist-details'>
          <h2 className='playlist-name'>{chartDetails.name}</h2>
          <p className='playlist-description'>{chartDetails.label}</p>
          <p className='playlist-stat'>
            <span className='playlist-length'>
              {chartDetails.total_tracks} songs
            </span>
            <br />
            <span className='playlist-duration'>
              {chartDetails.release_date}
            </span>
          </p>
          <div className='playlist-buttons'>
            <button
              onClick={() =>
                loadTrack(
                  chartDetails.tracks.items[0],
                  chartDetails.tracks.items
                )
              }
              className='playlist-btn btn-play-all'>
              <HiPlay color='#facd66' /> Play All
            </button>
            {myCollection?.filter(
              (playlist) => playlist.id === chartDetails.id
            )[0] ? (
              <button
                onClick={() => deleteFromCollection(chartDetails.id)}
                className='playlist-btn btn-collection'>
                <HiOutlineViewGridAdd color='#facd66' /> Remove from collection
              </button>
            ) : (
              <button
                onClick={() => addToCollection(chartDetails)}
                className='playlist-btn btn-collection'>
                <HiOutlineViewGridAdd color='#facd66' /> Add to collection
              </button>
            )}
          </div>
        </div>
      </section>
      <section className='section section-songs'>
        {chartDetails.tracks.items.map((track) => {
          return (
            <Song
              key={track.id}
              data={track}
              playlist={chartDetails.tracks}
              cover={chartDetails.images[2].url}
            />
          )
        })}
      </section>
    </AnimatedDiv>
  )
}

export default Chart
