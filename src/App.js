import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ItemDisplay from './ItemDisplay'
import DeadLink from './DeadLink'
import AllItems from './AllItems'
import SearchPage from './SearchPage'

function App() {
  return (
    <Router >
        <Route path = '/' exact component = {AllItems}/>
        <Route path = '/item/:id' component = {ItemDisplay}/>
        <Route path = '/NotFound' component = {DeadLink}/>
        <Route path = '/search/:id' component = {SearchPage}/>
    </Router>
  );
}

export default App;
