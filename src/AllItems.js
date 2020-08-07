import React, {Component} from 'react'
import Searchbar from './Searchbar'
import Footer from './Footer'
import axios from 'axios'
import {Link} from 'react-router-dom'


class AllItems extends Component{
    constructor(){
        super()

        this.state = {
            items : [],

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
                        <div className = 'all-items'>
                            {this.GetItems()}
                        </div>
                    
                    <Footer/>
                </div>
                
            </div>
            
        )
    }
}

export default AllItems