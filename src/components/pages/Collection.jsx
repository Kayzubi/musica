import AnimatedDiv from '../shared/AnimatedDiv'
import { NavLink, Outlet } from 'react-router-dom'

function Collection() {
  return (
    <AnimatedDiv>
      <NavLink to='/mycollections'>My Collection</NavLink>
      <NavLink to='likes'>Likes</NavLink>
      <Outlet />
    </AnimatedDiv>
  )
}

export default Collection
