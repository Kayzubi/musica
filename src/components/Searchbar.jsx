import { IoIosSearch } from 'react-icons/io'

function Searchbar() {
  return (
    <div className='searchbar'>
      <IoIosSearch />
      <input
        type='text'
        name='search'
        id='search'
        placeholder='search artist'
      />
    </div>
  )
}

export default Searchbar
