import { IoIosPlay } from 'react-icons/io'

function CollectionCard({ data }) {
  return (
    <div className='collection__card'>
      <img src={data.picture_medium} alt='' className='collection__card-img' />
      <h3 className='collection__card-title'>{data.title}</h3>
      <p className='collection__card-author'>{data.creator.name}</p>
      <p className='collection__card-likes'>{data.nb_tracks} tracks</p>
      <button className='collection__card-btn'>
        <IoIosPlay />
      </button>
    </div>
  )
}

export default CollectionCard
