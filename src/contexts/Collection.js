import Dexie from 'dexie'
import { useLiveQuery } from 'dexie-react-hooks'
import { toast } from 'react-toastify'

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
    toast.success('Added to collection')
  }

  const addToLikes = async (data) => {
    const { id } = data
    await db.likes.add({
      id,
      data,
    })
    toast.success('Added to likes')
  }

  const deleteFromCollection = async (id) => {
    await db.mycollection.delete(id)
    toast.success('Removed from collection')
  }

  const deleteFromLikes = async (id) => {
    await db.likes.delete(id)
    toast.success('Removed from likes')
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
