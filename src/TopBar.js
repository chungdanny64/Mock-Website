import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class TopBar extends Component{

    constructor(){
        super()

        this.state = {
            pos : 0,
            banners: []
        }
        this.back = this.back.bind(this)
        this.next = this.next.bind(this)
        
    }

    componentDidMount(){
        this.setState({
            banners: [
                
                <div className = 'banner'>
                    LIMITED TIME! $20 OFF $100 CODE: TAKE20 
                    <Link to ='/NotFound'>SHOP MEN</Link>
                    <Link to ='/NotFound'>SHOP WOMEN</Link>
                    <Link to ='/NotFound'>details</Link>
                </div>,
                
                <div className = 'banner'> 
                    ENDS SOON | UP TO 50% OFF TOPS 
                    <Link to ='/NotFound'>SHOP WOMEN</Link>
                    <Link to ='/NotFound'>details</Link>
                </div>,
                
                <div className = 'banner'>
                    FREE OR $5 EXPRESS SHIPPING ON $50+
                    <Link to ='/NotFound'>SHOP MEN</Link>
                    <Link to ='/NotFound'>SHOP WOMEN</Link>
                    <Link to ='/NotFound'>details</Link> 
                </div>
            
            ]
        })
    }   

    back(){
        let x = this.state.pos
        if(x === 0){
            this.setState({
                pos: this.state.banners.length-1
            })
        }
        else{
            this.setState({
                pos : x-1
            })
        }
    }

    next(){
        console.log('hello')
        let x = this.state.pos
        if(x === this.state.banners.length-1){
            this.setState({
                pos: 0
            })
        }
        else{
            this.setState({
                pos : x+1
            })
        }
    }
    
    render(){

        return(
            <div style ={{display:'flex'}}>
                <button onClick ={this.back}>&lt;</button>
                    <div className = 'bar-content'>
                        {this.state.banners[this.state.pos]}
                    </div>
                <button onClick = {this.next}>&gt;</button>

            </div>
           

        )
    }

}

export default TopBar