import React, {Component} from 'react'
import TopBar from './TopBar'
import Searchbar from './Searchbar'
import Footer from './Footer'

class DeadLink extends Component{
    render(){
        return(
            <div>
                <TopBar/>
                <Searchbar/>
                <div>
                    Dead Link
                </div>
                <Footer/>
            </div>
        )
    }
}

export default DeadLink