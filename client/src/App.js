import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from './pages/Search'
import './App.css' // Consider deleting

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Search/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
