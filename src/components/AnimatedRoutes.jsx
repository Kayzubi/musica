import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Chart from './pages/Chart'
import Collection from './pages/Collection'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/chart/:id' element={<Chart />} />
        <Route path='/collections' element={<Collection />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
