import TrackCard from './TrackCard'
import { useContext } from 'react'
import MusicContext from '../../contexts/MusicContext'
import Spinner from './Spinner'
import { useEffect } from 'react'

function TrackList({ listname, listdata }) {
  const { isLoading } = useContext(MusicContext)

  // const { tracks } = listdata

  return (
    <div className='list'>
      <h2 className='list-title'>{listname}</h2>
      {isLoading ? (
        <Spinner size={'medium'} />
      ) : (
        <div className='list-h'>
          {/* {listdata &&
            tracks.map((item) => {
              return (
                <TrackCard key={item.id} data={item} playlist={listdata.data} />
              )
            })} */}
        </div>
      )}
    </div>
  )
}

export default TrackList
