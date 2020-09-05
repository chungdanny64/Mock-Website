import React, {Component} from 'react'
import Searchbar from './Searchbar'
import Footer from './Footer'
import axios from 'axios'
import {Link} from 'react-router-dom'
import TopBar from './TopBar'


class SearchPage extends Component{
    constructor(props){
        super(props)

        this.state = {
            list : [],
            items : []

        }
    }


    // gets all items in the database on mount
    componentDidMount(){
        console.log(this.props)
        if(this.props.location.state.item === ''){
            axios.get('http://localhost:5000/item/')
                .then(res => { 
                    this.setState({list: res.data})
                })
                .catch(err => console.log(err))
        }
        else{
            axios.get('http://localhost:5000/item/search/' + this.props.location.state.item.toLowerCase())
            .then(res => { 
                console.log('axios')
                console.log(res.data)
                this.setState({list: res.data})
                console.log(this.state.list)
            })
            .catch(err => console.log(err))
    
        } 
    
    }

    // console.log(this.props.match.params.id.toLowerCase())
    // axios.get('http://localhost:5000/item/search/' + this.props.match.params.id.toLowerCase())
    //     .then(res => { 
    //         console.log('axios')
    //         console.log(res.data)
    //         this.setState({list: res.data})
    //         console.log(this.state.list)
    //     })
    //     .catch(err => console.log(err))
    componentDidUpdate(){
        console.log(this.state.list[0].name)
        console.log(this.props.match.params.id.toLowerCase())
        if(this.state.list[0].name.toLowerCase().includes(this.props.match.params.id.toLowerCase()) === false){
            axios.get('http://localhost:5000/item/search/' + this.props.match.params.id.toLowerCase())
            .then(res => { 
                this.setState({list : res.data})
            })
            .catch(err => console.log(err))
        }
        else if(this.state.list[0].name.toLowerCase().includes(this.props.match.params.id.toLowerCase()) === true){
            axios.get('http://localhost:5000/item/search/' + this.props.match.params.id.toLowerCase())
            .then(res => { 
                if(res.data.length !== this.state.list.length){
                    this.setState({list: res.data})
                }
            })
            .catch(err => console.log(err))
        }

    }

    component

    // the Link tag sends the user to the route with path /item/id which is 
    // the ItemDisplay file
    // We then have to send that prop to the ItemPage file to actually set the state
    // display the product. If you don't send it to the ItemPage we can't find the props
    GetItems(){
        if(this.state.list === undefined){
            return <div>hello</div>
        }
        return this.state.list.map(curr =>{ 
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
        return( !this.props.location.state ? <div>hello</div> :
            
              <div className = 'top'>
                <div className = 'top-of-bar'>
                    <TopBar/>
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
        )
    }
}

export default SearchPage