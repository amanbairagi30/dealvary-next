import React from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { FaHeart } from "react-icons/fa"
import Link from 'next/link'
const Nav = () => {
    return (
        <section className='navbar'>
            <navbar className="navbar-content">
                <div className="nav-first">
                    <Link href="#"><span>Newin</span></Link>
                    <Link href="#"><span>All Collections</span></Link>
                </div>
                <div className="nav-second">
                    <Link href="#"><p>1st <span>Year</span> </p></Link>
                    <Link href="#"><p>2nd <span>Year</span> </p></Link>
                    <Link href="#"><p>3rd <span>Year</span> </p></Link>
                    <Link href="#"><p>4th <span>Year</span> </p></Link>
                </div>
                <div className="nav-third">
                    <div className='heart-bg'>
                        <Link href={'/wishlist'}><FaHeart /></Link>
                    </div>
                    <div className='heart-bg'>
                        <Link href={'/cart'}><HiShoppingCart /></Link>
                    </div>
                    <p>0</p>
                </div>
            </navbar>
        </section>
    )
}

export default Nav
