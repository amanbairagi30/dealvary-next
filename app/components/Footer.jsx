import React from 'react'
// ICONS..
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {FaWhatsappSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <section className='footer'>
      <div className="footer-content">
        <div className="detail">
          <div className="social">
            <div className='tagline' >
              <p>Don't worry with DEALVARY</p> 
              <p>Grab it Hurry!</p> 
            </div>
            <div className="media">
                <div className="social-icons">
                  <AiFillLinkedin />
                  <AiFillTwitterSquare/>
                  <FaWhatsappSquare/>
                </div>
                <div className="button-helps">
                    <button>Help</button>
                    <button>FAQ'S</button>
                </div>
            </div>
          </div>
          <div className="about">
            <div className="about-section">
                <p>About</p>
                <ul>
                    <li>PRIVACY POLICY</li>
                    <li>TERM OF USE</li>
                    <li>TERM OF SALE</li>
                    <li>FAQ's</li>
                </ul>
            </div>
            <div className="company-section">
            <p>Company</p>
            <ul>
                    <li>PRIVACY POLICY</li>
                    <li>TERM OF USE</li>
                    <li>TERM OF SALE</li>
                    <li>FAQ's</li>
                </ul>
            </div>
            <div className="help-section">
            <p>Help</p>
            <ul>
                    <li>PAYEMENT</li>
                    <li>SHIPPING</li>
                    <li>RETURN</li>
                    <li>CHAT WITH US</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
            <p>Copyright @ 2023</p>
        </div>
      </div>
    </section>
  )
 }

export default Footer;
