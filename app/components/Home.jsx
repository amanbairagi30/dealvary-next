import React from 'react'
import { Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import book1 from '../assets/hp.png'
import NewArrivals from '../components/NewArrivals';
import Testimoinall from '../components/Testimoinall';
import Contact from '../components/Contact';
import Footer from '../components/Footer'
import Image from 'next/image';

const Home = () => {
  return (<>
    <section className='home'>
      
    <Carousel
     showStatus={false} 
     showArrows={true} 
     showIndicators={false} 
    //  showThumbs={false} 
     interval={1000}
      infiniteLoop={false} 
      autoPlay={false}
      className="carosal"
      >
      <div>
        <a>
          <div className='home-text'>
          <p>Book for your <br />need</p>
          <div className="button-start">
          <button>Get Started</button>
          </div>
          <div className='rating'>
            <div className="rate">
              <div className='rate-img'><Image src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
            <div className="rate">
              <div className='rate-img'><Image src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
            <div className="rate">
              <div className='rate-img'><Image src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
            <div className="rate">
              <div className='rate-img'><Image src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
          </div>
          </div>
          <Image src={book1} alt="" />
        </a>
      </div>

      <div>
        <a>
        <div className='home-text'>
          <p>Book for your <br />need</p>
          <div className="button-start">
          <button>Get Started</button>
          </div>
          <div className='rating'>
            <div className="rate">
              <div className='rate-img'><Image src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
            <div className="rate">
              <div className='rate-img'><Image src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
            <div className="rate">
              <div className='rate-img'><Image src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
            <div className="rate">
              <div className='rate-img'><Image src={book1} alt="" /></div>
              <h3>Laura Dave</h3>
              <p>⭐⭐⭐⭐<span>4.8</span></p>
            </div>
          </div>
          </div>
          <Image src={book1} alt="" />
        </a>
      </div>

    </Carousel>
    <NewArrivals />
    <Testimoinall />
    <Contact />
    <Footer />
    </section>
    </>
  )
}

export default Home
