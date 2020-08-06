import React, {Component} from 'react'

class TopBar extends Component{


    
    render(){


        return(
            
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
                
            </div>
            


        )
    }

}

export default TopBar