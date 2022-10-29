import AnimatedDiv from '../shared/AnimatedDiv'
import { HiHeart, HiPlay, HiOutlineViewGridAdd } from 'react-icons/hi'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MusicContext from '../../contexts/MusicContext'
import Song from '../shared/Song'
import Spinner from '../shared/Spinner'
import BackgroundImage from '../BackgroundImage'

function Chart() {
  const { chartDetails, setChartDetails, fetchData } = useContext(MusicContext)
  const params = useParams()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    async function getChartDetails() {
      const response = await fetchData(`playlist/${params.id}`)
      setChartDetails(response)
      setLoading(false)
    }

    getChartDetails()
  }, [])

  if (isLoading) return <Spinner size={'large'} />

  return (
    <AnimatedDiv>
      <BackgroundImage image={chartDetails.picture_big} />
      <section className='section section-info'>
        <img src={chartDetails.picture_big} alt='' className='playlist-img' />
        <div className='playlist-details'>
          <h2 className='playlist-name'>{chartDetails.title}</h2>
          <p className='playlist-description'>{chartDetails.description}</p>
          <p className='playlist-stat'>
            <span className='playlist-length'>
              {chartDetails.nb_tracks} songs
            </span>
            -
            <span className='playlist-duration'>
              {Math.floor(chartDetails.duration / 3600)}hrs
            </span>
          </p>
          <div className='playlist-buttons'>
            <button className='playlist-btn btn-play-all'>
              <HiPlay color='#facd66' /> Play All
            </button>
            <button className='playlist-btn btn-collection'>
              <HiOutlineViewGridAdd color='#facd66' /> Add to collection
            </button>
            <button className='btn-like'>
              <HiHeart />
            </button>
          </div>
        </div>
      </section>
      <section className='section section-songs'>
        {chartDetails.tracks.data.map((track) => {
          return (
            <Song key={track.id} data={track} playlist={chartDetails.tracks} />
          )
        })}
      </section>
    </AnimatedDiv>
  )
}

export default Chart
