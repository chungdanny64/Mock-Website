import React, {Component} from 'react'

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
                                My Account
                            </li>
                            <li  className = 'footer-list'>
                                Join PacSun Rewards
                            </li>
                            <li  className = 'footer-list'>
                                Styled By Pacsun
                            </li>
                            <li  className = 'footer-list'>
                                Gift Cards
                            </li>
                            <li  className = 'footer-list'>
                                Coupons & Promotions
                            </li>
                            <li  className = 'footer-list'>
                                Afterpay
                            </li>
                            <li  className = 'footer-list'>
                                Student Discount
                            </li>
                            <li  className = 'footer-list'>
                                Customer Service
                            </li>
                            <li  className = 'footer-list'>
                                Returns & Exchanges
                            </li>
                            <li  className = 'footer-list'>
                                Order Status
                            </li>
                            <li  className = 'footer-list'>
                                International Shipping
                            </li>
                        </ul>
                    </div>

                    <div className = 'footer-box'>
                        <div className = 'footer-box-title'>
                            Company Info
                        </div> 
                        <ul>
                            <li  className = 'footer-list'>
                                About Us
                            </li>
                            <li  className = 'footer-list'>
                                Store Locator
                            </li>
                            <li  className = 'footer-list'>
                                Careers
                            </li>
                            <li  className = 'footer-list'>
                                Social Responsibility
                            </li>
                            <li  className = 'footer-list'>
                                California Supply Chains Act
                            </li>
                            <li  className = 'footer-list'>
                                Privacy & Cookie Piolicy 
                            </li>
                            <li  className = 'footer-list'>
                                Terms of Use
                            </li>
                            <li  className = 'footer-list'>
                                Affiliate Program
                            </li>
                            <li  className = 'footer-list'>
                                Site Map
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
                            For more information about this including material terms please visit <u>our Privacy Policy.</u>
                        </div>
                        <div className = 'footer-text'>
                            Yes, I would like to receive updates from PacSun for:
                        </div>
                        <form>
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
                    hey
                </div>
            </div>
        )
    }
}

export default Footer