import AnimatedDiv from '../shared/AnimatedDiv'
import { Link } from 'react-router-dom'

function Collection() {
  return (
    <AnimatedDiv>
      <h1>My collection</h1>
      <Link to='mycollections'>My Collection</Link>
      <Link to='likes'>Likes</Link>
    </AnimatedDiv>
  )
}

export default Collection
