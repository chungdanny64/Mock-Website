import React, {Component} from 'react'
import ItemPage from './ItemPage'
import TopBar from './TopBar'
import Searchbar from './Searchbar'
import Footer from './Footer'

class ItemDisplay extends Component{
    constructor(props){
        super(props)

    }


    render(){
        return(
        <div>
            <TopBar/>
            <Searchbar/>
            <ItemPage item = {this.props}/>
            <Footer/>
        </div>
            
        )
    }
}


export default ItemDisplay