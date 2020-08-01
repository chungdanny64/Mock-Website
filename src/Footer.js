import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Footer extends Component{
    render(){
        return(
            <div className ='footer'>
                <div className = 'footer-content'>
                    <div className = 'footer-box'>
                        <div className = 'footer-box-title'>
                            Account & Services
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
                            Company Info
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
                            Find A Store
                        </div>
                        <div> 
                            <form>
                                <input className= 'footer-input' type= 'text' placeholder= 'Enter Zip Code'></input>
                            </form>
                        </div>
                        <div style= {{padding: '45px 0px 17px 0px'}}>
                            Sign Up For Email
                        </div>
                        <div className = 'footer-text'>
                            Get access to exclusive offers and promotions, new arrivals & more!
                        </div>
                        <div> 
                            <form>
                                <input className= 'footer-input' type= 'text' placeholder= 'Email Address'></input>
                            </form>
                        </div>
                        <div className= 'footer-text'>
                            California Residents: I agree to opt-in to financial incentives offered by PacSun.
                            For more information about this including material terms please visit <u><Link to = '/NotFound'>our Privacy Policy.</Link></u>
                        </div>
                        <div className = 'footer-text'>
                            Yes, I would like to receive updates from PacSun for:
                        </div>
                        <form style ={{paddingTop: '3px'}}>
                            <input type='radio' id= 'Mens'></input>
                            <label > Mens</label>
                            <input type='radio' id= 'Womens'></input>
                            <label>Womens</label>
                            <input type='radio' id= 'Both'></input>
                            <label> Both</label>
                        </form>


                        
                    </div>
                    <div className = 'footer-box'>
                        <div className = 'footer-box-title'>
                            Connect With Us
                        </div>
                        <ul>
                            <li>
                                Hello
                            </li>
                            <li>
                                There
                            </li>
                        </ul>

                        Download The App
                    </div>

                </div>
                
                <div className = 'footer-bottom'>
                    Information for California Residents: Visit the <u>Privacy Policy</u> for details regarding the categories
                    of personal information callected through this website and the business and commercial purpose(s) for which 
                    the information will be used.
                    <br></br>
                    2020 Pacific Sunwear of California, LLC. All rights reserved.
                </div>
            </div>
        )
    }
}

export default Footer