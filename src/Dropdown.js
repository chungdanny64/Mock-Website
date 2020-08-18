import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const DropdownItem = props =>(
    // sets every category as a clickable link to the dead link page and returns as a list item 
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

    // takes in the categories that will be displayed as props and sets it to the arrays used for display 
    componentDidMount(){
            this.setState({
                categories: this.props.items,
                title : this.props.title,
            })
    }

    display(){
        // returns a component with for every category passed into the dropdown menu
        // will be displayed in an unordered list for every section on the dropdown
        return this.state.categories.map((curr,index) =>{
            return <DropdownItem name = {curr} key = {index}/>
        })
    }
    render(){


        return(
            // if there is a title then items will be displayed with a title portion
            this.state.title !== "" ? 

            <div className = 'item-box' >
                <div className = 'title-holder'style = {{fontWeight: '500', fontFamily: "'DM Sans',sans-serif"}}>
                    <Link to = "/NotFound">{this.state.title}  </Link> 
                </div>       
                <br></br>
                    {this.display()}
                
            </div>

            :
            // if there is not a title then categories will be displayed without a title portion
            <div className = 'item-box'>     
                {this.display()}
            </div>

        )
    }
}

export default Dropdown