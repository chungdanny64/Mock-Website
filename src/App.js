import React from 'react'
import './App.css'
import TopBar from './TopBar'
import ItemPage from './ItemPage'
import Searchbar from './Searchbar'
import Footer from './Footer'

function App() {
  return (
    <div>
        <TopBar/>
        <Searchbar/>
        <ItemPage/>
        <Footer/>
        
    </div>

  );
}

export default App;
