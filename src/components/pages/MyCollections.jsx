import { useContext } from 'react'
import MusicContext from '../../contexts/MusicContext'
import CollectionCard from '../CollectionCard'

function MyCollections() {
  const { myCollection, deleteFromCollection } = useContext(MusicContext)
  const data = myCollection

  return (
    <div>
      {data.length === 0 ? (
        <div className='center'>
          <p>
            You currently have no charts in your
            <span className='secondary'>Collection</span>
          </p>
          <p>
            Add charts to your <span className='secondary'>Collection</span>
          </p>
        </div>
      ) : (
        <>
          {data.map((album) => {
            return (
              <CollectionCard
                key={album.id}
                data={album.data}
                remove={deleteFromCollection}
              />
            )
          })}
        </>
      )}
    </div>
  )
}

export default MyCollections
