import { useContext, useEffect } from 'react'
import MusicContext from '../../contexts/MusicContext'
import CollectionCard from '../CollectionCard'

function MyCollections() {
  const { myCollection, deleteFromCollection } = useContext(MusicContext)
  const data = myCollection

  return (
    <div className='center'>
      {data.length === 0 ? (
        <>
          <p>
            You currently have no charts in your{' '}
            <span className='secondary'>Collection</span>
          </p>
          <p>
            Add charts to your <span className='secondary'>Collection</span>
          </p>
        </>
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
