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
  const navApp = [
    ['Home', '/', <HiHome />],
    ['My Collection', '/collections', <IoIosMusicalNotes />],
    ['Radio', '', <IoMdRadio />],
    ['Videos', '', <IoIosFilm />],
  ]

  const navPersonal = [
    ['Profile', <IoIosPerson />],
    ['Logout', <IoIosLogOut />],
  ]

  return (
    <div className='sidebar'>
      <div className='sidebar-section'>
        {navApp.map(([title, path, icon]) => {
          if (path === '') {
            return (
              <button disabled key={title} className='sidebar-icon'>
                {icon}
              </button>
            )
          }
          return (
            <NavLink
              key={title}
              to={path}
              end
              className={({ isActive }) =>
                isActive ? 'active' : 'sidebar-icon'
              }>
              {icon}
            </NavLink>
          )
        })}
      </div>
      <div className='sidebar-section'>
        {navPersonal.map(([title, icon]) => {
          return (
            <button disabled key={title} className='sidebar-icon'>
              {icon}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
