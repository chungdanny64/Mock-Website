import React, {Component} from 'react'
import ItemPage from './ItemPage'
import TopBar from './TopBar'
import Searchbar from './Searchbar'
import Footer from './Footer'

class ItemDisplay extends Component{
    render(){
        return(
        <div>
            <TopBar/>
            <Searchbar/>
            <ItemPage/>
            <Footer/>
        </div>
            
        )
    }
}


export default ItemDisplay