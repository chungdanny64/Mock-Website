import React, {Component} from 'react'

class TopBar extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className = 'top'>
                <div className = 'top-of-bar'>
                    <div className = 'bar-content'>
                        Hello
                    </div>
                </div>
                <div className = 'bottom-of-top-bar'>
                    Picture here
                </div>
            </div>
            

        )
    }

}

export default TopBar