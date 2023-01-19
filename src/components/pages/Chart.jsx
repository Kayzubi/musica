import AnimatedDiv from '../shared/AnimatedDiv'
import { HiPlay, HiOutlineViewGridAdd, HiArrowLeft } from 'react-icons/hi'
import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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
  const [playlist, setPlaylist] = useState([])

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    async function getChartDetails() {
      const album = await fetchData(`albums/?ids=${params.id}`)
      setChartDetails(album.albums[0])
      setLoading(false)
    }
    getChartDetails()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const list = chartDetails.tracks.items.map((item) => {
        return {
          id: item.id,
          track: {
            ...item,
            album: { name: chartDetails.name, images: chartDetails.images },
          },
        }
      })

      setPlaylist(list)
    }
  }, [chartDetails, isLoading])

  if (isLoading) return <Spinner size={'large'} />

  return (
    <AnimatedDiv>
      <div className='section'>
        <button onClick={goBack} className='back__btn'>
          <HiArrowLeft color='#facd66' size={'30px'} />
        </button>
      </div>
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
              onClick={() => loadTrack(playlist[0].track, playlist)}
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
        {playlist.map((item) => {
          return (
            <Song
              key={item.id}
              data={item}
              playlist={playlist}
              cover={chartDetails.images[2].url}
            />
          )
        })}
      </section>
    </AnimatedDiv>
  )
}

export default Chart
