import AnimatedDiv from '../shared/AnimatedDiv'
import { NavLink, Outlet } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import MusicContext from '../../contexts/MusicContext'

function Collection() {
  const { screenWidth, setNavOpen } = useContext(MusicContext)

  useEffect(() => {
    screenWidth <= 768 && setNavOpen(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenWidth])

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
