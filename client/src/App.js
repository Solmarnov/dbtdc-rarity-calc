import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './pages/Search'
import './App.css' // Consider deleting

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
