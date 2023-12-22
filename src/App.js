import React from 'react'
import './app.scss'
import {BrowserRouter as Router } from 'react-router-dom'
import Home from './Pages/Home'
import {AppProvider} from './context/AppProvider'

function App() {
  return (
    <AppProvider>
    <Router>
      <Home />
    </Router>
    </AppProvider>
  )
}

export default App