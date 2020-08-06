import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import apple  from './Footer_Images/apple.png'
import facebook from './Footer_Images/facebook.png'
import google from './Footer_Images/google.png'
import instagram  from './Footer_Images/instagram.png'
import pinterest from './Footer_Images/pinterest.png'
import snapchat  from './Footer_Images/snapchat.png'
import twitter from './Footer_Images/twitter.png'
import youtube from './Footer_Images/youtube.png'



class Footer extends Component{
    render(){
        return(
            <div className ='footer'>
                <div className = 'footer-content'>
                    <div className = 'footer-box'>
                        <div className = 'footer-box-title'>
                            ACCOUNT & SERVICES
                        </div>
                        
                        <ul>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>My Account</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Join PacSun Rewards</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Styled By Pacsun</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Gift Cards</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Coupons & Promotions</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Afterpay</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Student Discount</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Customer Service</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Returns & Exchanges</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Order Status</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>International Shipping</Link>
                            </li>
                        </ul>
                    </div>

                    <div className = 'footer-box'>
                        <div className = 'footer-box-title'>
                            COMPANY INFO
                        </div> 
                        <ul>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>About Us</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Store Locator</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Careers</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Social Responsibility</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>California Supply Chains Act</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Privacy & Cookie Piolicy</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Terms of Use</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Affiliate Program</Link>
                            </li>
                            <li  className = 'footer-list'>
                                <Link to= '/NotFound'>Site Map</Link>
                            </li>
                        </ul>
                    </div>

                    <div className = 'footer-box'>
                        <div className = 'footer-box-title'>
                            FIND A STORE
                        </div>
                        <div> 
                            <form>
                                <input className= 'footer-input' type= 'text' placeholder= 'Enter Zip Code' style = {{fontFamily: '"DM Sans",sans-serif', fontSize:'12px'}}></input>
                                
                            </form>
                        </div>
                        <br></br>
                        <br></br>
                        <div className = 'footer-box-title'>
                            SIGN UP FOR EMAIL
                        </div>
                        <div className = 'footer-text'>
                            Get access to exclusive offers and promotions, new arrivals & more!
                        </div>
                        <br></br>
                        <div> 
                            <form>
                                <input className= 'footer-input-email' type= 'text' placeholder= 'Email Address' style = {{fontFamily: '"DM Sans",sans-serif', fontSize:'12px'}}></input>
                                <button type = 'submit' className = 'sign-up-button'> SIGN UP</button>
                            </form>
                        </div>
                        <br></br>
                        <div className= 'footer-text'>
                            California Residents: I agree to opt-in to financial incentives offered by PacSun.
                            For more information about this including material terms please visit <u><Link to = '/NotFound'>our Privacy Policy.</Link></u>
                        </div>
                        <br></br>
                        <div className = 'footer-text'>
                            Yes, I would like to receive updates from PacSun for:
                        </div>

                        <form style ={{paddingTop: '3px'}} >
                            <input type='radio' id= 'Mens'></input>
                            <label className = 'radios'> Mens</label>
                            <input type='radio' id= 'Womens'></input>
                            <label className = 'radios'>Womens</label>
                            <input type='radio' id= 'Both'></input>
                            <label className = 'radios'> Both</label>
                        </form>


                        
                    </div>
                    <div className = 'footer-box'>
                        <div className = 'footer-box-title'>
                            CONNECT WITH US
                        </div>
                        
                        <div className = 'social-icons'>
                            <a href = 'http://localhost:3000/NotFound' style = {{padding: '0'}}><img src = {instagram} alt = ''></img></a>
                            <a href = 'http://localhost:3000/NotFound' style = {{paddingLeft: '0'}}><img src = {snapchat} alt = ''></img></a>
                            <a href = 'http://localhost:3000/NotFound'><img src = {twitter} alt = ''></img></a>
                            <a href = 'http://localhost:3000/NotFound'><img src = {facebook} alt = ''></img></a>
                            <a href = 'http://localhost:3000/NotFound'><img src = {youtube} alt = ''></img></a>
                            <a href = 'http://localhost:3000/NotFound'><img src = {pinterest} alt = ''></img></a>
                        </div>

                        <br></br>
                        <br></br>
                        <div className ='footer-box-title'>
                            DOWNLOAD THE APP
                        </div>
                        

                        <div className = 'stores'>
                            <a href = 'http://localhost:3000/NotFound'><img src = {apple} alt = ''></img></a>
                            <a href = 'http://localhost:3000/NotFound' style = {{paddingLeft: '3%'}}><img src = {google} alt = ''></img></a>
                        </div>
                    </div>

                </div>
                
                <div className = 'footer-bottom'>
                    Information for California Residents: Visit the <u>Privacy Policy</u> for details regarding the categories
                    of personal information callected through this website and the business and commercial purpose(s) for which 
                    the information will be used.
                    <br></br>
                    <br></br>
                    2020 Pacific Sunwear of California, LLC. All rights reserved.
                </div>
            </div>
        )
    }
}

export default Footer