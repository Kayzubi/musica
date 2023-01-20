import Searchbar from './Searchbar'
import Logo from './Logo'
import { IoIosMenu } from 'react-icons/io'
import { useContext } from 'react'
import MusicContext from '../contexts/MusicContext'
function Header() {
  const { toggleNav } = useContext(MusicContext)
  return (
    <header className='header'>
      <button className='navToggle' onClick={toggleNav}>
        <IoIosMenu />
      </button>
      <Logo />
      <Searchbar />
    </header>
  )
}

export default Header
