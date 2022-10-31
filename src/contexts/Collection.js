import Dexie from 'dexie'
import { useLiveQuery } from 'dexie-react-hooks'

const db = new Dexie('Collections')

db.version(1).stores({
  mycollection: 'id, data',
  likes: 'id, data',
})

const CollectionData = () => {
  const myCollection = useLiveQuery(() => db.mycollection.toArray(), [])
  const myLikes = useLiveQuery(() => db.likes.toArray(), [])

  const addToCollection = async (data) => {
    const { id } = data
    await db.mycollection.add({
      id,
      data,
    })
  }

  const addToLikes = async (data) => {
    const { id } = data
    await db.likes.add({
      id,
      data,
    })
  }

  const deleteFromCollection = async (id) => {
    await db.mycollection.delete(id)
  }

  const deleteFromLikes = async (id) => {
    await db.likes.delete(id)
  }

  return {
    myCollection,
    myLikes,
    addToCollection,
    addToLikes,
    deleteFromCollection,
    deleteFromLikes,
  }
}

export default CollectionData
