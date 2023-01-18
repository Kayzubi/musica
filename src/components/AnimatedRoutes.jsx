import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Chart from './pages/Chart'
import Collection from './pages/Collection'
import Likes from './pages/Likes'
import MyCollection from './pages/MyCollections'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/album/:id' element={<Chart />} />
          <Route path='/mycollections' element={<Collection />}>
            <Route index element={<MyCollection />} />
            <Route path='likes' element={<Likes />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
