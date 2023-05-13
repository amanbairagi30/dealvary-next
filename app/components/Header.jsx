import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import Nav from "../components/Nav"
import Logo from '../assets/Logo.svg'
import Link from 'next/link'
import Image from 'next/image'



const Header = () => {

    return (<>    <section className='header'>
        <header className='header-content'>
            <div className="logo">
                <Link href={'/'}><Image src={Logo} alt="Logo" /></Link>
            </div>
            <form>
                <ul>
                    <li class="dropdown">
                        <Link href="" class="dropbtn">All Categories</Link>
                        <div class="dropdown-content">
                            <Link href="#">Link 1</Link>
                            <Link href="#">Link 2</Link>
                            <Link href="#">Link 3</Link>
                        </div>
                    </li>
                </ul>
                <input type="search" placeholder='Search for Books...' />
                {/* <BiSearchAlt2 /> */}
            </form>
            <div className="auth-button">
                {/* {user ? <>
                    <Link href={'/login'}><button className='sell-btn'>Become a Seller</button></Link>
                    <div className="user-img">
                        <img src={user?.photoURL} alt="Image" />
                        <div className='hover-profile'> <button>Sign Out</button> </div>
                    </div>
                </>
                    : */}
                    <>
                        <Link href={'/login'}><button className='login'>Login</button></Link>
                        <Link href={'/signup'}><button className='sing'>SignUp</button></Link>
                    </>


            </div>
        </header>
    </section >
        <Nav />
    </>

    )
}

export default Header
