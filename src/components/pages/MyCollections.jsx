import { useContext, useEffect } from 'react'
import MusicContext from '../../contexts/MusicContext'
import CollectionCard from '../CollectionCard'

function MyCollections() {
  const { myCollection, deleteFromCollection } = useContext(MusicContext)
  const data = myCollection

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <div>
      {data.length === 0 ? (
        <>
          <p className='center'>
            You currently have no charts in your <span>Collection</span>
          </p>
          <p>Add charts to your Collection</p>
        </>
      ) : (
        <>
          {data.map((album) => {
            return <CollectionCard key={album.id} data={album.data} />
          })}
        </>
      )}
    </div>
  )
}

export default MyCollections
