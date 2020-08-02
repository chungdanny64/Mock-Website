import React, {Component} from 'react'
import axios from 'axios'


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



    render(){
        return(
            <div>
                <img src= {this.state.Sixth_image} alt = 'sixthimage'/>
                {this.state.Name}
            </div>
        )
    }
}

export default ItemPage