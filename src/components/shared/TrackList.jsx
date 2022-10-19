import TrackCard from './TrackCard'

function TrackList({ listname, listdata }) {
  return (
    <div className='list'>
      <h2 className='list-title'>{listname}</h2>
      <div className='list-h'>
        {listdata &&
          listdata.data.map((item) => {
            return (
              <TrackCard
                key={item.id}
                image={item.album.cover_medium}
                name={item.title}
                artist={item.artist.name}
              />
            )
          })}
      </div>
    </div>
  )
}

export default TrackList
