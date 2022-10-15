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
      <div className='navigation'>
        <div className='navigation-section'>
          <NavLink
            to='/'
            end
            className={({ isActive }) =>
              isActive ? 'active' : 'navigation-icon'
            }>
            <HiHome />
          </NavLink>
          <NavLink
            to='mycollection'
            className={({ isActive }) =>
              isActive ? 'active' : 'navigation-icon'
            }>
            <IoIosMusicalNotes />
          </NavLink>
          <button disabled className='navigation-icon'>
            <IoMdRadio />
          </button>
          <button disabled className='navigation-icon'>
            <IoIosFilm />
          </button>
        </div>
        <div className='navigation-section'>
          <NavLink
            to='profile'
            className={({ isActive }) =>
              isActive ? 'active' : 'navigation-icon'
            }>
            <IoIosPerson />
          </NavLink>
          <button disabled className='navigation-icon'>
            <IoIosLogOut />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
