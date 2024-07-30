import React from 'react'
import flip from '../images/flipkart.png';
import amz from '../images/amazon.png';
import shoe from '../images/shoe_image.png';
import './Hero.css';

const HeroSection = () => {
  return (
    <div className='Hero'>
        <div className='content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST 
                AND WE’RE HERE TO HELP YOU 
                WITH OUR SHOES.YOUR FEET DESERVE THE BEST
                 AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                 </p>
            <div className='shop'>
                <button >SHOP NOW</button>
                <button className='secondary-btn'>Category</button>
            </div> 
            <div className='shopping'>
               <p>Also Available on</p>
               <div className='brand_name'>
               <img src={flip}/>
               <img src={amz}/>
               </div>
            </div>    
        </div>

        <div className='imageshoe'>
          <img className='shoe_img'  src={shoe}/>
        </div>

    </div>
  )
}

export default HeroSection;
