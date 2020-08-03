import React, {Component} from 'react'
import axios from 'axios'
import Logo from './Logo.jpg'
import {Link} from 'react-router-dom'


class ItemPage extends Component{
    constructor(props){
        super(props)

        // item properties that will be on screen
        this.state = {
            Name : '',
            First_image : '',
            Second_image : '',
            Third_image: '',
            Fourth_image: '',
            Fifth_image: '',
            Sixth_image: '',
            Price: '',
            Color: ''   
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/item/' + this.props.item.match.params.id)
            .then(res =>{
                this.setState({
                    Name : res.data.name,
                    First_image : res.data.image1,
                    Second_image : res.data.image2,
                    Third_image: res.data.image3,
                    Fourth_image: res.data.image4,
                    Fifth_image: res.data.image5,
                    Sixth_image: res.data.image6,
                    Price: res.data.price,
                    Color: res.data.color
                })
            })
            .catch(err => console.log(err))
    }

    calculate(){
        let e = Number(this.state.Price.substring(1)) /4
        return e.toFixed(2)
    }
// <img src= {this.state.Sixth_image} alt = 'sixthimage'/>
// {this.state.Name}

    render(){
        return(
            <div className = 'item-page'>
                <div className = 'product-container'>
                    <div className = 'product-inner'>
                        <div className = 'product-images'>
                            <div className = 'large-product-image'>
                                <img src = {this.state.Sixth_image}></img>
                            </div>
                            
                        </div>
                        <div className = 'product-description'>
                            <div className = 'product-description-inner'>
                                <div className = 'logo'>
                                    <img src ={Logo}></img>
                                </div>
                                <div className  = 'product-name'>
                                    {this.state.Name}  
                                </div>
                                <div className = 'product-price'>
                                    {this.state.Price}
                                </div>
                                <div className = 'after-pay'>
                                    Or 4 payments of {this.calculate()} with afterpay
                                </div>

                                <div className = 'product-color'>
                                    {this.state.Color}
                                </div>

                                <div className = 'size-selector'>
                                    <form>
                                        <select id = 'size' placeholder = 'SELECT A SIZE'>
                                            <option>SELECT SIZE</option>
                                            <option value = '26W X 28L'>26W X 28L</option>
                                            <option >26W X 28L</option>
                                            <option >28W X 30L</option>
                                            <option >28W X 32L</option>
                                            <option >29W X 30L</option>
                                            <option >29W X 32L</option>
                                            <option >30W X 30L</option>
                                            <option >30W X 32L</option>
                                            <option >31W X 30L</option>
                                            <option >31W X 32L</option>
                                        </select>
                                        <div calssName = 'size-link'>
                                            <u><Link to ='/NotFound'>Size Guide</Link></u>
                                        </div>

                                        <button>ADD TO BAG</button>
                                        <br></br>
                                        <button>PICK UP IN STORE</button>
                                        
                                        <div className = 'color-size-text'>
                                            Select a color and size to see in-store availability
                                            <br></br>
                                            <u><Link to = '/NotFound'>Shop All Pacsun</Link></u>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ItemPage