import React, {Component} from 'react'
import Login from './Login.PNG'


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

                            <ul className = 'bottom-content'>
                                <li className = 'categories' id ='Men'>
                                    Men
                                </li>
                                <li className = 'categories'>
                                    Women
                                </li>
                                <li className = 'categories'>
                                    Jeans
                                </li>
                                <li className = 'categories'>
                                    Swim
                                </li>
                                <li className = 'categories'>
                                    Home
                                </li>
                                <li className = 'categories'>
                                    Brands
                                </li>
                                <li className = 'categories' style= {{color: 'red'}}>
                                    Sale
                                </li>
                            </ul>
                        </div>
                    </div>
                
                </div>

            </div>
            


        )
    }
}

export default Searchbar
