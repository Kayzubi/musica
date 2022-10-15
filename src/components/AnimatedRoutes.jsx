import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Chart from './pages/Chart'
import Collection from './pages/Collection'
import Profile from './pages/Profile'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/chart/:title' element={<Chart />} />
        <Route path='/mycollection' element={<Collection />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
