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
                title : this.props.title
            })
    }

    display(){
        return this.state.categories.map(curr =>{
            console.log(curr)
            return <DropdownItem name = {curr}/>
        })
    }
    render(){
        return(
            <div className = 'item-box'>
                {this.state.title}
                
                <br></br>
                <ul>
                    {this.display()}
                </ul>
                
            </div>
        )
    }
}

export default Dropdown