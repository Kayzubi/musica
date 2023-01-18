import { useContext, useEffect } from 'react'
import MusicContext from '../../contexts/MusicContext'
import CollectionCard from '../CollectionCard'
import Spinner from '../shared/Spinner'

function MyCollections() {
  const { myCollection, deleteFromCollection } = useContext(MusicContext)

  useEffect(() => {
    console.log(myCollection)
  }, [myCollection])

  if (myCollection === undefined) return <Spinner size='large' />

  return (
    <div>
      {myCollection?.length === 0 ? (
        <div className='center'>
          <p>
            You currently have no charts in your
            <span className='secondary'> Collection</span>
          </p>
          <p>
            Add charts to your <span className='secondary'>Collection</span>
          </p>
        </div>
      ) : (
        <>
          {myCollection.map((chart) => {
            return (
              <CollectionCard
                key={chart.id}
                data={chart.data}
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
