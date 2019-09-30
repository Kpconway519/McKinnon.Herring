import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../../slideshow.css'
import image1 from '../../pictures/snakeHands.JPG'
import image2 from '../../pictures/autumnButterflies.jpg'
import image3 from '../../pictures/forestGod.jpg'
import image4 from '../../pictures/caughtMoth.jpg'
import image5 from '../../pictures/hummelStillLife.jpg'
import image6 from '../../pictures/lichen.jpg'
import image7 from '../../pictures/mothsMating.jpg'
import image8 from '../../pictures/nest.jpg'
import image9 from '../../pictures/snakeCabinet.jpg'
import image10 from '../../pictures/peekaboo.jpg'
import image11 from '../../pictures/redBone.jpg'
 
const fadeImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="Serpent Hands" />
          </div>
          <h2>Serpent Hands</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="Autumn Butterflies"/>
          </div>
          <h2>Autumn Butterflies</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="Forest God" />
          </div>
          <h2>Forest God</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} alt="Captured Moth"/>
          </div>
          <h2>Captured Moth</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[4]} alt="Hummel Still Life"/>
          </div>
          <h2>Hummel Still Life</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[5]} alt="Lichen"/>
          </div>
          <h2>Lichen</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[6]} alt="Moths Together"/>
          </div>
          <h2>Moths Together</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[7]} alt="Nest"/>
          </div>
          <h2>Nest</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[8]} alt="Peacock"/>
          </div>
          <h2>Cabinet</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[9]} alt="Peekaboo"/>
          </div>
          <h2>Peekaboo</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[10]} alt="Red Bone"/>
          </div>
          <h2>Red Bone</h2>
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow