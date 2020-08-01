import React, {Component} from 'react'
import TopBar from './TopBar'
import Searchbar from './Searchbar'
import Footer from './Footer'
import axios from 'axios'
import { QueryCursor } from 'mongoose'


class AllItems extends Component{
    constructor(){
        super()

        this.state = {
            items : []
        }
    }



    componentDidMount(){
        axios.get('http://localhost:5000/item/')
            .then(res => {
                this.setState({
                    items: res.data
                })
            })
            .catch(err => console.log(err))
    }



    GetItems(){
        return this.state.items.map(curr =>{
            return <div>
                <img src={curr.image1} alt = 'first_image'/>
            </div>
        })
    }





    render(){
        return(
            <div>
                <TopBar/>
                <Searchbar/>
                <div>
                    {this.GetItems()}
                </div>
                <Footer/>
            </div>
            
        )
    }
}

export default AllItems