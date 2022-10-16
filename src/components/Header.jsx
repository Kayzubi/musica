import { IoIosMusicalNotes } from 'react-icons/io'
import Searchbar from './Searchbar'
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
      <Searchbar />
    </header>
  )
}

export default Header
