import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi porro accusantium dolorem quidem tenetur atque magnam quam dicta earum ut?</p>
<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
</div>
        </div>
        <div className="footer-content-center">
         <h2>COMPANY</h2>
         <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
         </ul>
        </div>
        <div className="footer-content-right">
       <h2>GET IN TOUCH</h2>
       <ul>
        <li>+1-2121-456-7890</li>
        <li>conatct@zingo.com</li>
    
       </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        CopyRight 2024 Zingo.com-All Right Reversed.
      </p>
    </div>
  )
}

export default Footer
