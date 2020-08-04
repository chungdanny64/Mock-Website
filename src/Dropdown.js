import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const DropdownItem = props =>(
    <li>
        <Link to = '/NotFound'> {props.name}</Link>
    </li>
)


class Dropdown extends Component{
    constructor(){
        super()
        this.state = {
            categories :[],
            title : ''
        }
    }


    componentDidMount(){
            this.setState({
                categories: this.props.items,
                title : this.props.title,
            })
    }

    display(){
        return this.state.categories.map(curr =>{
            return <DropdownItem name = {curr}/>
        })
    }
    render(){


        return(

            this.state.title !== "" ? 

            <div className = 'item-box' >
                <div className = 'title-holder'>
                    <b>{this.state.title}</b>   
                </div>       
                <br></br>
                    {this.display()}
                
            </div>

            :

            <div className = 'item-box'>     
                {this.display()}
            </div>

        )
    }
}

export default Dropdown