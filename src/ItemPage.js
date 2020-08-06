import React, {Component} from 'react'
import axios from 'axios'
import Logo from './Logo.jpg'
import {Link} from 'react-router-dom'
import afterpay from './Footer_Images/afterpay.png'


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
            Color: '',
            images: [] ,
            index: 0
        }
        this.clickButton = this.clickButton.bind(this)
        this.imageClick = this.imageClick.bind(this)
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
                    Color: res.data.color,
                    images : [res.data.image1, res.data.image2, res.data.image3,
                         res.data.image4, res.data.image5, res.data.image6]
                })
            })
            .catch(err => console.log(err))
    }

    calculate(){
        let e = Number(this.state.Price.substring(1)) /4
        return e.toFixed(2)
    }

    show_images(place){
        let x = place
        let images = []
        for(let y = x; y < x+5;y ++){
            images.push(<img src = {this.state.images[y%6]} id = {y%6} onClick = {this.imageClick} alt = {'image' + y}></img>)
        }
        return images
    }

    clickButton(){
        this.setState({
            index: this.state.index+1
        })
    }
    
    imageClick(event){
        console.log(event.currentTarget.id)
        this.setState({
            index : event.currentTarget.id
        })
    }
    
    render(){
        
        return(
            <div className = 'item-page'>
                <div className = 'product-container'>
                    <div className = 'product-inner'>
                        <div className = 'product-images'>
                            <div className = 'image-carousel'>
                                <div className = 'carousel'>
                                    {this.show_images(this.state.index)}
                                    <button className = 'next-button' onClick= {this.clickButton}>Next</button>
                                </div>
                            </div>
                            <div className = 'large-product-image'>
                                <img src = {this.state.images[this.state.index%6]} alt = 'big-version'></img>
                            </div>
                            
                        </div>
                        <div className = 'product-description'>
                            <div className = 'product-description-inner'>
                                <div className = 'logo'>
                                    <img src ={Logo} alt = 'logo'></img>
                                </div>
                                <div className  = 'product-name'>
                                    <b>{this.state.Name}</b>
                                </div>
                                <div className = 'product-price'>
                                    {this.state.Price}
                                </div>

                                <br></br>
                                <div className = 'after-pay'>
                                    Or 4 payments of ${this.calculate()} by <img src = {afterpay} alt =''></img>  <Link to ='/NotFound'>Learn More</Link>
                                </div>

                                <div className = 'product-color'>
                                    {this.state.Color}
                                </div>

                                <div className = 'size-selector'>
                                    <form>
                                        <select id = 'size' placeholder = 'SELECT A SIZE'>
                                            <option>Select Size</option>
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
                                    </form>
                                        
                                    <div className = 'size-link'>
                                        <u><Link to ='/NotFound'>Size Guide</Link></u>
                                    </div>
                                    
                                    <div className = 'add-to-bag'>
                                        <button >ADD TO BAG</button>
                                    </div>
                                    <div className = 'pick-up'>
                                        <button>PICK UP IN STORE</button>
                                    </div>
                                    
                                    
                                    <div className = 'color-size-text'>
                                        <p>
                                            Select a color and size to see in-store availability
                                        </p>
                                        <p>
                                            <u><Link to = '/NotFound'>Shop All Pacsun</Link></u>
                                        </p>
                                        <br></br>
                                       
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

export default ItemPage