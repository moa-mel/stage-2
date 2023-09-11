import React from 'react'
import "./styles.css"
import fbook from "../../images/Vector.png"
import insta from "../../images/Vector(1).png"
import tweet from "../../images/fa-brands_twitter.png"
import ytube from "../../images/fa-brands_youtube.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='f-container'>
            <div className='f-one'>
                <img src={fbook} alt=''/>
                <img src={insta} alt=''/>
                <img src={tweet} alt=''/>
                <img src={ytube} alt=''/>
            </div>
            <div className='f-two'>
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>
            <div className='f-three'>
                <p>© 2021 MovieBox by Adriana Eka Prayudha  </p>
            </div>
        </div>
    </div>
  )
}

export default Footer