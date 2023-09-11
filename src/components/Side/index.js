import React from 'react'
import './styles.css'
import Slogo from "../../images/Logo.png"
import G47 from "../../images/Group 47.png"
import G45 from "../../images/Group 45.png"
import G8 from "../../images/Group 8.png"
import G70 from "../../images/Group 70.png"
import tvshow from "../../images/TV Show.png"
import calender from "../../images/Calendar.png"
import G55 from "../../images/Group 55.png"
import G52 from "../../images/Group 52.png"


const Side = () => {
  return (
    <div className='side'>
        <img src={Slogo} alt='' className='slogo'/>
        <img src={G47} alt='' className='slogo'/>
        <img src={G45} alt='' className='slogo'/>
        <img src={G8} alt='' className='slogo'/>
        <div className='sidep'>
        <img src={tvshow} alt='' className='slogo'/>
        <p>TV Series</p>
        </div>
        <div className='sided'>
        <img src={calender} alt='' className='slogo'/>
        <p>Upcoming</p>
        </div>
        <img src={G70} alt='' className='slogo'/>
        </div>
  )
}

export default Side