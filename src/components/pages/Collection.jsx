import AnimatedDiv from '../shared/AnimatedDiv'
import { NavLink, Outlet } from 'react-router-dom'

function Collection() {
  return (
    <AnimatedDiv>
      <NavLink to='/mycollections' end className='collection-link'>
        My Collection
      </NavLink>
      <NavLink to='likes' className='collection-link'>
        Likes
      </NavLink>
      <Outlet />
    </AnimatedDiv>
  )
}

export default Collection
