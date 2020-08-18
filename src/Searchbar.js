import React, {Component} from 'react'
import Dropdown from './Dropdown'
import {Link} from 'react-router-dom'
import Logo from './Logo.jpg'
import Heart from './Search_Images/heart.png'
import Bag from './Search_Images/Bag.png'
import Account from './Search_Images/Account.png'
import Flag from './Search_Images/Flag.png'
import Location from './Search_Images/Location.png'
import magnifier from './Search_Images/magnifier.png'



class Searchbar extends Component{

 
    render(){
        
        // Dropdown component is for every category in the drop down menu
        // class drop down holds each Dropdown component that is passed in
        // drop down class is used to section each portion of the drop down menu

        return(
            <div className = 'search-holder'>
                <div className = 'searchbar'>
                    <div className = 'searchbar-content'>
                        <div className = 'sticky-search'>
                            <div className = 'top-content'>
                                <div className = 'left-header'>
                                    <a href = 'http://localhost:3000/NotFound'>
                                        <img src= {Account} alt= 'login' style ={{  height : '20px', width: '20px'}}>
                                        </img>
                                    </a>

                                    <a href = 'http://localhost:3000/NotFound'>
                                        <img src= {Location} alt= 'Location' style ={{  height : '20px', width: '13px', opacity: '0.6'}}>
                                        </img>
                                    </a>

                                    <a href = 'http://localhost:3000/NotFound'>
                                        <img src= {Flag} alt= 'Country' style ={{  height : '16px', width: '20px'}}>
                                        </img>
                                    </a>
                                    
                                </div>

                                <div className = 'center-logo'>
                                    <a href = 'http://localhost:3000/NotFound'>
                                        <img src = {Logo} alt = "big-logo"></img>
                                    </a>
                                </div>

                                <div className = 'right-header'>
                                    <form >
                                        <input type= 'text' placeholder= 'search...' style ={{width: '105px', fontFamily: '"DM Sans",sans-serif', fontSize:'12px', borderTop:'none',borderLeft:'none',borderRight:'none'}}></input>
                                        <img src ={magnifier} style ={{width:'35px', verticalAlign : 'middle'}} alt = 'magnifier'></img>
                                    </form>
                                    <a href = 'http://localhost:3000/NotFound'>
                                        <img src = {Heart} alt = 'heart'></img>
                                    </a>
                                    
                                    <a href = 'http://localhost:3000/NotFound'>
                                        <img src = {Bag} alt = 'Bag'></img>
                                    </a>
                                </div>
                            </div>

                            <div className = 'bottom-content'>
                                <div className= 'categories'>
                                    <div className = 'type'>
                                        <div className = 'search-link'>
                                            <Link to= '/NotFound'>Men</Link>
                                        </div>
                                        
                                        <div className= 'drop-down'>

                                            <div className = 'drop-down-content'>
                                                <img src="https://www.pacsun.com/on/demandware.static/-/Sites-pacsun-Library/default/dw32b6e4f2/2020/floorsets/07/30/megamens.jpg"
                                                alt = 'Men-pic-1'></img>
                                               
                                            </div>
                                            <div className = 'drop-down-content'>
                                                <Dropdown title= {'CLOTHING'}
                                                    items = {[
                                                        'Shop All', 'Graphics & Tees', 'Hoodies & Sweatshirts', 'Basic Tees',
                                                        'Shorts', 'Pants', 'Jeans', 'Sweatpants', 'VIEW  MORE'
                                                    ]}
                                                    

                                                    />
                                            </div>

                                            <div className = 'drop-down-content'>
                                                <Dropdown title= {'ACCESSORIES'} 
                                                    items={['Shop All', 'Face Masks',
                                                    'Hats & Beanies', 'Wellness', 'Backpacks & Sling Bags', 'VIEW MORE'
                                                    ]}/>

                                                <Dropdown title= {'Shoes'} 
                                                    items={['Shop All', 'VIEW MORE'
                                                ]}/>
                                            </div>

                                            <div className = 'drop-down-content'>
                                                <Dropdown title= {'LIMITED TIME DEALS'}
                                                    items = {[
                                                        'Shop All', 'Denim & Pants - 40% Off', 'Graphics - Up to 40% Off',
                                                        'Shorts - Up to 40% Off', 'Swim - Up to 40% Off'  
                                                    ]}/>
                                            </div>
                                            

                                            <div className = 'drop-down-content'>
                                                <Dropdown title= {'NEW'} 
                                                    items={[ 'New Arrivals', 'New @ PacSun: Fila', 'Fall Feature: New Playboy By PacSun',
                                                        'New PacSun Fall Denim Collection'
                                                    ]}/>
                                                <Dropdown title= {'FEATURED'} items={['Most Liked','Top Brands', 'VIEW MORE'
                                                ]}/>
                                            </div>
                                        </div>
                                    </div>


                                    <div className = 'type'>
                                        <div className = 'search-link'>
                                            <Link to= '/NotFound'>Women</Link>
                                        </div>
                                        <div className= 'drop-down'>    

                                            <div className = 'drop-down-content'>
                                                 <Link to ='/NotFound'> <img src="https://www.pacsun.com/on/demandware.static/-/Sites-pacsun-Library/default/dw30bdec05/2020/floorsets/07/30/megawomens.jpg"
                                                alt = 'Women-pic-1'></img></Link>
                                               
                                            </div>
                                            <div className = 'drop-down-content'>
                                                <Dropdown title= {'CLOTHING'}
                                                    items = {[
                                                        'Shop All', 'Tops' , 'Basic Tees & Tanks', 'Shorts' , 'Graphic Tees',
                                                        'Jeans', 'Dresses', 'Swimwear', 'VIEW MORE'
                                                    ]}/>
                                            </div>

                                            <div className = 'drop-down-content'>
                                                <Dropdown title= {'ACCESSORIES'} items={['Shop All', 'Face Masks', 
                                                    'Jewelry', 'Hair Accessories', 'Sunglasses', 'VIEW MORE'
                                                    ]}/>

                                                <Dropdown title= {'SHOES'} items={['Shop All','VIEW MORE'
                                                    ]}/>
                                            </div>

                                            <div className = 'drop-down-content'>
                                                <Dropdown title= {'LIMITED TIME DEALS'}
                                                    items = {[
                                                        'Shop All', 'Swim - Up to 60% Off', 'Shorts - Up to 50% Off', 
                                                        'Tops - Up to 50% Off', 'Dresses - Up to 50% off', 'Essesntials starting at $9.95' 
                                                    ]}/>

                                                <Dropdown title= {'BEAUTY & WELLNESS'} items={['Shop All','VIEW MORE'
                                                        ]}/>
                                                </div>
                                            <div className = 'drop-down-content'>
                                                <Dropdown title= {'NEW'} 
                                                    items={[ 'New Arrivlas', 'Kendall & Kylie Fall Collection', 'PacSun Denim New Arrivals', 
                                                        'Lottie Moss Fall Collection', 'John Galt New Fall Arrivals'
                                                    ]}/>

                                                <Dropdown title= {'TRENDS'} items={['Comfy Shop: Sweatsuit Sets','Top Brands: NEW FILA & Playboy', 'VIEW MORE'
                                                ]}/>
                                            </div>
    
                                        </div>

                                            
                                    </div>


                                    <div className = 'type'>
                                        <div className = 'search-link'>
                                            <Link to= '/NotFound'>Jeans</Link>   
                                        </div>
                                        
                                        <div className = 'drop-down'>
                                            <div className = 'drop-down-content'>
                                                    Men
                                                    <Link to ='/NotFound'> <img src = 'https://www.pacsun.com/on/demandware.static/-/Sites-pacsun-Library/default/dwfe9d9a9c/2020/floorsets/07/30/megamensdenim.jpg'
                                                    alt = 'Jean-pic-2'></img></Link>
                                                   
                                                </div>

                                                <div className = 'drop-down-content'>
                                                    <Dropdown title= {'PANTS'} 
                                                            items={[ 
                                                                'Sweatpants & Joggers', 'Cargo Pants', 'Chino Pants', 'Loose Pants',
                                                                'Shop All Pants'
                                                    ]}/>

                                                </div>
                                                
                                                <div className = 'drop-down-content'>
                                                    <Dropdown title= {'JEANS'} 
                                                            items={[ 
                                                                'Stacked Skinny', 'Skinny Jeans', 'Slim Fit Jeans', 'Straight Leg Jeans',
                                                                'Black Jeans', 'Ripped Jeans', 'Shop All Jeans'
                                                    ]}/>

                                                </div>

                                                <div className = 'drop-down-content'>
                                                    Women
                                                    <Link to ='/NotFound'><img src = 'https://www.pacsun.com/on/demandware.static/-/Sites-pacsun-Library/default/dw2c6f3b8b/2020/floorsets/07/30/megawomensdenim.jpg'
                                                    alt = 'Jean-pic-2'></img></Link>
                                                    
                                                </div>

                                                <div className = 'drop-down-content'>
                                                    <Dropdown title= {'SHOP BY FIT'} 
                                                            items={[ 
                                                                'Mom Jeans' , 'Straight Leg Jeans', 'Jeggings', 
                                                                'Boyfriend Jeans' , 'Slim Fit Jeans', 'Shop All'
                                                    ]}/>

                                                </div>

                                                <div className = 'drop-down-content'>
                                                    <Dropdown title= {'SHOP BY TREND'} 
                                                            items={[ 
                                                                'High Wasited Jeans', 'Distressed Jeans', 'Two-Tone Jeans', 
                                                                'Paperbag Wasit Jeans','Cargo Pants'
                                                    ]}/>

                                                </div>
                                            </div>

                                        </div>
                                        
                                        <div className = 'type'>
                                            <div className = 'search-link'>
                                                <Link to= '/NotFound'>Swim</Link>  
                                            </div>
                                        
                                            <div className = 'drop-down'>
                                                <div className = 'drop-down-content'>
                                                    <Link to ='/NotFound'>  <img src = 'https://www.pacsun.com/on/demandware.static/-/Sites-pacsun-Library/default/dwba8191fc/2020/floorsets/07/05/megamensswim.jpg'
                                                    alt = 'Swim-pic-1'></img></Link>
                                                  
                                                </div>

                                                <div className = 'drop-down-content'>
                                                    <Dropdown title= {"MEN'S SWIM"} 
                                                            items={[ 
                                                                'Swim Trunks' , 'Boardshorts' , 'Shop All Swim'
                                                    ]}/>

                                                </div>
                                                
                                                <div className = 'drop-down-content'>
                                                    <Dropdown title= {'TOP BRANDS'} 
                                                            items={[ 
                                                                'PacSun', 'Modern Amusement' , 'South Beach', 'Hurley'
                                                    ]}/>

                                                </div>

                                                <div className = 'drop-down-content'>
                                                    <Link to ='/NotFound'><img src = 'https://www.pacsun.com/on/demandware.static/-/Sites-pacsun-Library/default/dwc9c16956/2020/floorsets/07/23/megawomensswim.jpg'
                                                    alt = 'Swim-pic-2'></img></Link>
                                                    
                                                </div>

                                                <div className = 'drop-down-content'>
                                                    <Dropdown title= {"WOMEN'S SWIM"} 
                                                            items={[ 
                                                                'Bikini Tops', 'Bikini Bottoms', 'One Pieces', 'Swim Cover-Ups',
                                                                'Top Swim Brands', 'Shop All Swim'
                                                    ]}/>

                                                </div>

                                                <div className = 'drop-down-content'>
                                                    <Dropdown title= {'TOP BRANDS'} 
                                                            items={[ 
                                                                'LA Hearts By PacSun', 'Kendall & Kylie', 'Bilabong', 'Rhythm',
                                                                'Roxy', 'TWIIN'
                                                    ]}/>

                                                </div>
                                            </div>
                                    </div>


                                    <div className = 'type'>
                                        <div className = 'search-link'>
                                            <Link to= '/NotFound'>Home</Link>    
                                        </div>
                                        
                                        <div className = 'drop-down'>
                                            <div className  = 'drop-down-content'>
                                                <Link to ='/NotFound'><img src = 'https://www.pacsun.com/on/demandware.static/-/Sites-pacsun-Library/default/dw22aaf237/2019/floorsets/08/28/megahome1.jpg'
                                                alt = 'Home-pic-1'></img></Link>
                                                
                                            </div>

                                            <div className = 'drop-down-content'>
                                                <Dropdown title= {"SHOP BY CATEGORY"}
                                                            items = {[
                                                                'Room Decor' , 'Bed & Bath' , 'Kitchen', 'Organization',
                                                                'Outdoor', 'Lifestyle', 'Shop All'
                                                ]}/>
                                            </div>


                                            <div className  = 'drop-down-content'>
                                                <Link to ='/NotFound'><img src = 'https://www.pacsun.com/on/demandware.static/-/Sites-pacsun-Library/default/dw12bff516/2019/floorsets/08/28/megahome2.jpg'
                                                alt = 'Home-pic-2'></img></Link>
                                                
                                            </div>


                                            <div className = 'drop-down-content'>
                                                <Dropdown title= {"TOP BRANDS"}
                                                            items = {[
                                                                'Deny Designs' , 'Pendleton', 'Shiraleah', 'Paddywax',
                                                                'NewMade LA'
                                                ]}/>
                                            </div>
                                        </div>
                                        
                                    </div>


                                    <div className = 'type'>
                                        <div className = 'search-link'>
                                            <Link to= '/NotFound'>Brands</Link>    
                                        </div>
                                        

                                        <div className = 'drop-down' style = {{height: '448px'}}>
                                            <div className  = 'drop-down-content'>
                                                <div style = {{borderBottom : '1px solid grey'}}>
                                                    MEN'S BRANDS
                                                </div>
                                                <br></br>
                                                <Link to ='/NotFound'><img src = 'https://www.pacsun.com/on/demandware.static/-/Sites-pacsun-Library/default/dw12bff516/2019/floorsets/08/28/megahome2.jpg'
                                                alt = 'brand-pic-1'></img></Link>
                                                
                                            </div>
                                            
                                            <div className = 'drop-down-content'>
                                                <Dropdown title = {""}
                                                            items = {[
                                                                'A$AP Worldwide', 'adidas' , 'Brixton', 'Budweiser', 'Champion',
                                                                'Columbia' , 'Converse' , 'Dr Martens', 'FOG', 'Guess', 'Huf' ,
                                                                'Kappa', 'New Balance' ,'Obey'
                                                ]}/>
                            
                                            </div>

                                            <div className = 'drop-down-content'>
                                                <Dropdown title = {''}
                                                items = {[
                                                     'PacSun' ,'Playboy', 'Polo Ralph Lauren',
                                                                'PS Basics', 'Reebok', 'RVCA', 'Santa Cruz', 'The North Face', 'Vans', 'Young & Reckless'
                                                              
                                                ]}/>

                                                <br></br> 
                                                <br></br>
                                                

                                                <Dropdown title = {''}
                                                    items = {['Top Brands', 'Shop All Brands']}/>
                                            </div>
                                            

                                            <div className  = 'drop-down-content'>
                                                <div className = 'brands-header'>
                                                    <div style = {{borderBottom : '1px solid grey'}}>
                                                        <Link to ='/NotFound'>WOMEN'S BRANDS</Link>
                                                    </div>
                                                    <br></br>
                                                    <img src = 'https://www.pacsun.com/on/demandware.static/-/Sites-pacsun-Library/default/dw5c0f0e51/2020/floorsets/07/30/megawomensbrands.jpg'
                                                    alt = 'brand-pic-2'
                                                    ></img>
                                                </div>
                                                
                                            </div>

                                            <div className = 'drop-down-content'>
                                                <Dropdown title = {""}
                                                            items = {[
                                                                'adidas', 'Billabong' , 'Brandy Melville', 'Champion', 'Converse', 
                                                                'Desert Dreamers' , 'Espirit', 'Free People', 'Guess', 'John Galt', 'Kendall & Kylie', 
                                                                'LA Hearts', "Levi's", 'Lottie Moss'
                                                ]}/>

                                                

                                                
                                            </div>

                                            <div className = 'drop-down-content'>
                                                <Dropdown title = {''}
                                                items = {[
                                                    'Me To We', 'MinkPink' , 'Modern Renewal',
                                                    'PacSun', 'Playboy', 'PS Basics', 'PS / LA', 'Rhythm', 'The North Face', 'Tommy Hilfiger', 
                                                    'Vans'
                                                ]}/>
                                                
                                                <br></br> 
                                                <br></br>
                                                

                                                <Dropdown title = {''}
                                                    items = {['Top Brands', 'Shop All Brands']}/>
                                            </div>
                                        </div> 
                                    </div>


                                    <div className = 'type' >
                                        <div className = 'search-link'>
                                            <Link to= '/NotFound' style = {{color:'red'}}>Sale</Link>    
                                        </div>
                                        

                                        <div className = 'drop-down'>
                                            <div className = 'drop-down-content-sale' style = {{paddingLeft:"18%", paddingRight: '2%'}} >
                                                <Dropdown title= {"Men's Sale"}
                                                            items = {[
                                                                'Markdowns - Up to 50% Off', 'Denim & Pants', 'Graphics & Knits' , 'Shirts',
                                                                'Swim', 'Shorts' , 'Hoodies', 'Jackets', 'Shoes', 'Accessories'
                                                ]}/>
                                            </div>
                                            
                                            <div className = 'drop-down-content' >
                                                <img src = 'https://www.pacsun.com/on/demandware.static/-/Sites-pacsun-Library/default/dw3e9ba07b/2020/floorsets/07/13/megaBanner.jpg'
                                                className = 'sale-picture' alt = 'sale-img'></img>
                                            </div>




                                            <div className = 'drop-down-content-sale' style = {{paddingLeft: '7%'}}>
                                                <Dropdown title= {"Women's Sale"}
                                                            items = {[
                                                                'Markdowns - Up to 50% Off', 'Denim & Pants' , 'Tops & Graphics', 'Sweaters',
                                                                'Seatshirts & Hoodies', 'Dresses & Rompers' , 'Swimwear', 'Shorts & Skirts', 
                                                                'Jackets', 'Shoes & Accessories'
                                                ]}/>
                                            </div>
                                        </div>

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

export default Searchbar
