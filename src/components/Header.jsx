import { IoIosMusicalNotes, IoIosSearch } from 'react-icons/io'
function Header() {
  return (
    <header className='header'>
      <div className='logo-box'>
        <div className='logo-icon logo-icon-1'>
          <IoIosMusicalNotes />
        </div>
        <div className='logo-icon logo-icon-2'>
          <IoIosMusicalNotes />
        </div>
      </div>
      <div className='searchbar'>
        <IoIosSearch />
        <input type='text' name='search' id='search' />
      </div>
    </header>
  )
}

export default Header
