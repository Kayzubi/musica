import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/styles.scss'
import App from './App'
import { MusicContextProvider } from './contexts/MusicContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <MusicContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MusicContextProvider>
)
