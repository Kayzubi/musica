import AnimatedDiv from '../shared/AnimatedDiv'
import { Link, Outlet } from 'react-router-dom'

function Collection() {
  return (
    <AnimatedDiv>
      <h1>My collection</h1>
      <Link to='/mycollections'>My Collection</Link>
      <Link to='likes'>Likes</Link>
      <Outlet />
    </AnimatedDiv>
  )
}

export default Collection
