import Header from './components/Header'
import Player from './components/Player'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './components/pages/Home'
import Chart from './components/pages/Chart'
import Collection from './components/pages/Collection'
import Profile from './components/pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <div className='main'>
          <Sidebar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chart/:title' element={<Chart />} />
            <Route path='/mycollection' element={<Collection />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
        <Player />
      </div>
    </BrowserRouter>
  )
}

export default App
