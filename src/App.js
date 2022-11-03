import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import AnimatedRoutes from './components/AnimatedRoutes'
import MusicContext from './contexts/MusicContext'
import { useContext, useEffect } from 'react'

function App() {
  const { navOpen, screenWidth } = useContext(MusicContext)

  useEffect(() => {
    let sidebar = document.getElementById('sidebar')
    if (navOpen && screenWidth < 768) {
      sidebar.style.width = '100%'
    } else if (navOpen && screenWidth > 768) {
      sidebar.style.width = '5%'
    } else {
      sidebar.style.width = '0'
    }
  }, [screenWidth, navOpen])

  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <div className='main'>
          <Sidebar />
          <AnimatedRoutes />
        </div>
        <Player />
      </div>
    </BrowserRouter>
  )
}

export default App
