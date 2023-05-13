import React from 'react'
import { SiMinutemailer } from 'react-icons/si'
import book1 from '../Home/hp.png'
import {Parallax} from 'react-parallax'
const Contact = () => {
    return (
        <Parallax strength={300} blur={{min:-5,max:15}} bgImage={book1}>
        <section className='contact'>
            <div className="contact-content">
                <div className="contact-text">
                    <p>New Users 20% off</p>
                    <div className="head"> <h1>Shop Now and discover the best</h1>
                        <h1>selection of books !</h1></div>
                </div>
                <div className="subscribe">
                    <input type="search" placeholder='Drop Your Email...' />
                    <div><SiMinutemailer />
                    {/* <p>Subscribe</p> */}
                    </div>
                </div>
            </div>
        </section>
        </Parallax>
    )
}

export default Contact
