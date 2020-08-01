import React, {Component} from 'react'
import Login from './Login.PNG'
import Dropdown from './Dropdown'
import {Link} from 'react-router-dom'


class Searchbar extends Component{

  
    render(){

        return(
            <div className = 'search-holder'>
                <div className = 'searchbar'>
                    <div className = 'searchbar-content'>
                        <div className = 'sticky-search'>
                            <div className = 'top-content'>
                                <div className = 'left-header'>
                                    <img src= {Login} alt= 'login' style ={{paddingRight: '15px',  height : '20px', width: '20px'}}>
                                    </img>
                                    <img src= {Login} alt= 'Location' style ={{paddingRight: '15px', paddingLeft: '15px',  height : '20px', width: '20px' }}>
                                    </img>
                                    <img src= {Login} alt= 'Country' style ={{ paddingLeft: '15px',  height : '20px', width: '20px'}}>
                                    </img>
                                </div>
                            </div>

                            <div className = 'bottom-content'>
                                <div className= 'categories'>
                                    <div className = 'type'>
                                        <Link to= '/NotFound'>Men</Link>
                                        <div className= 'drop-down'>
                                            <div className = 'drop-down-content'>
                                                <Dropdown title= {'Clothing'}
                                                    items = {[
                                                        'Shop All', 'Graphics & Tees', 'Hoodies & Sweatshirts', 'Basic Tees',
                                                        'Shorts', 'Pants', 'Jeans', 'Sweatpants', 'VIEW  MORE'
                                                    ]}/>
                                            </div>
                                            <div className = 'drop-down-content'>
                                                <Dropdown title= {'Accessories'} items={['Shop All', 'Face Masks',
                                                    'Hats & Beanies', 'Wellness', 'Backpacks & Sling Bags', 'VIEW MORE'
                                                    ]}/>
                                            </div>
 
                                        </div>
                                    </div>
                                    <div className = 'type'>
                                        <Link to= '/NotFound'>Women</Link>
                                    </div>
                                    <div className = 'type'>
                                        <Link to= '/NotFound'>Jeans</Link>
                                    </div>
                                    <div className = 'type'>
                                        <Link to= '/NotFound'>Swim</Link>
                                    </div>
                                    <div className = 'type'>
                                        <Link to= '/NotFound'>Home</Link>
                                    </div>
                                    <div className = 'type'>
                                        <Link to= '/NotFound'>Brands</Link>
                                    </div>
                                    <div className = 'type' >
                                        <Link to= '/NotFound' style = {{color:'red'}}>Sale</Link>
                                    </div>


                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                
                </div>

            </div>
            


        )
    }
}

export default Searchbar
