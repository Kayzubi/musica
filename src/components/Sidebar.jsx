import {
  IoIosMusicalNotes,
  IoIosFilm,
  IoMdRadio,
  IoIosPerson,
  IoIosLogOut,
} from 'react-icons/io'
import { HiHome } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-section'>
        <NavLink end className='sidebar-icon' to='/'>
          <HiHome />
        </NavLink>
        <NavLink className='sidebar-icon' to='/mycollections'>
          <IoIosMusicalNotes />
        </NavLink>
        <button disabled='disabled' className='sidebar-icon'>
          <IoMdRadio />
        </button>
        <button disabled='disabled' className='sidebar-icon'>
          <IoIosFilm />
        </button>
      </div>
      <div className='sidebar-section'>
        <button disabled className='sidebar-icon'>
          <IoIosPerson />
        </button>
        <button disabled className='sidebar-icon'>
          <IoIosLogOut />
        </button>
      </div>
    </div>
  )
}

export default Sidebar
