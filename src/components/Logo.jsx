import { Link } from 'react-router-dom'
import { IoIosMusicalNotes } from 'react-icons/io'

function Logo() {
  return (
    <Link to={'/'}>
      <div className='logo-box'>
        <div className='logo-icon logo-icon-1'>
          <IoIosMusicalNotes />
        </div>
        <div className='logo-icon logo-icon-2'>
          <IoIosMusicalNotes />
        </div>
      </div>
    </Link>
  )
}

export default Logo
