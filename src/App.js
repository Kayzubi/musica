import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
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
