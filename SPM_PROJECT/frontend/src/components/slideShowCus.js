import './slideShowCus.css'

import image1 from '../images/backQ1.jpg'
import image2 from '../images/food1.jpg'
import image3 from '../images/room1.jpg'
import image4 from '../images/pool1.jpg'
import image5 from '../images/bar1.jpg'

import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  image1,
  image2,
  image3,
  image4,
  image5
];

const slideShowCus = () => {
    return (
      <div>
        <Slide easing="ease" >
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              
            </div>
            <span>Heavenly and Peaceful Environment</span>
          </div>

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              
            </div>
            <span>Remarkable Dining & Hospitality Experiences</span>
          </div>

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
            <span>Elegantly Furnished Luxury Rooms</span>
          </div>

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
             
            </div>
            <span>Outdoor Swimming Pool, The Calm Resort & Spa</span>
          </div>
          
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              
            </div>
            <span>Spacious Lounge Bar</span>
          </div>
        </Slide>
      </div>
    )
};

export default slideShowCus;