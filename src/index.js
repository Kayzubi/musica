import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/styles.scss'
import App from './App'
import { MusicContextProvider } from './contexts/MusicContext'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <MusicContextProvider>
    <React.StrictMode>
      <ToastContainer
        theme='dark'
        position='top-center'
        autoClose={3000}
        closeOnClick
      />
      <App />
    </React.StrictMode>
  </MusicContextProvider>
)
