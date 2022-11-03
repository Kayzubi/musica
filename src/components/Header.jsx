import Searchbar from './Searchbar'
import Logo from './Logo'
import { IoIosMenu, IoIosClose } from 'react-icons/io'
import { useContext } from 'react'
import MusicContext from '../contexts/MusicContext'
function Header() {
  const { navOpen, toggleNav } = useContext(MusicContext)
  return (
    <header className='header'>
      <button className='navToggle' onClick={toggleNav}>
        {!navOpen ? <IoIosMenu /> : <IoIosClose />}
      </button>
      <Logo />
      <Searchbar />
    </header>
  )
}

export default Header
