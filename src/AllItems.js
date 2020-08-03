import React, {Component} from 'react'
import TopBar from './TopBar'
import Searchbar from './Searchbar'
import Footer from './Footer'
import axios from 'axios'
import {Link} from 'react-router-dom'


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
        console.log('hello')
    }


    // the Link tag sends the user to the route with path /item/id which is 
    // the ItemDisplay file
    // We then have to send that prop to the ItemPage file to actually set the state
    // display the product. If you don't send it to the ItemPage we can't find the props
    GetItems(){
        return this.state.items.map(curr =>{ 
            return <div className = 'item-holder'>
                    <img src={curr.image6} alt = 'first_image'/>
                    <p>
                        
                        <Link to = {"/item/" + curr._id}  ><b>{curr.name}</b></Link>
                        <br></br>
                        {curr.price}
                    </p>

                </div>
            })
    }





    render(){
        return(
            <div>
                <TopBar/>
                <Searchbar/>    
                <div className = 'all-items'>
                    {this.GetItems()}
                </div>
                <Footer/>
            </div>
            
        )
    }
}

export default AllItems