import React, {Component} from 'react'
import Searchbar from './Searchbar'
import Footer from './Footer'

class DeadLink extends Component{
    render(){
        return(
            <div>
                 <div className = 'top'>
                    <div className = 'top-of-bar'>
                        <div className = 'bar-content'>
                            Hello
                        </div>
                    </div>
                    <div className = 'bottom-of-top-bar'>
                        <img src ='https://www.pacsun.com/on/demandware.static/-/Sites-pacsun-Library/default/dw0aa5b2cc/2020/reopen/store-d.png' alt ='logo' style= {{height: '99%'}}>
                        </img>
                    </div>
                    
                    <Searchbar/>
                    <div>
                        Dead Link
                    </div>
                    <Footer/>
                </div>
               
            </div>
        )
    }
}

export default DeadLink