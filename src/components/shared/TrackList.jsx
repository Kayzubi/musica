import TrackCard from './TrackCard'

function TrackList({ listname, listdata }) {
  return (
    <div className='list'>
      <h2 className='list-title'>{listname}</h2>
      <div className='list-h'>
        {listdata.map((item) => {
          return (
            <TrackCard
              image={item.srcImage}
              name={item.title}
              artist={item.artist}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TrackList
