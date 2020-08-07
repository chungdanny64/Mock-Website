import React, {Component} from 'react'
import ItemPage from './ItemPage'
import Searchbar from './Searchbar'
import Footer from './Footer'
import TopBar from './TopBar'

class ItemDisplay extends Component{
 


    render(){
        return(
        <div>
            <div className = 'top'>
                <div className = 'top-of-bar'>
                    <TopBar/>
                </div>
                <div className = 'bottom-of-top-bar'>
                    <img src ='https://www.pacsun.com/on/demandware.static/-/Sites-pacsun-Library/default/dw0aa5b2cc/2020/reopen/store-d.png' alt ='logo' style= {{height: '99%'}}>
                    </img>
                </div>
                
                <Searchbar/>
                <ItemPage item = {this.props}/>
                <Footer/>
            </div>

        </div>
            
        )
    }
}


export default ItemDisplay