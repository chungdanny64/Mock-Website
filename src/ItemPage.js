import React, {Component} from 'react'


class ItemPage extends Component{
    constructor(){
        super()

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
        // put in an item for it to bind the state to
    }



    render(){
        return(
            <div>
                ItemPage
            </div>
        )
    }
}

export default ItemPage