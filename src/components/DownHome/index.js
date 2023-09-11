import React from 'react'
import "./styles.css"
import left from "../../images/Chevron right.png"
import MovieList from '../MovieList'

const DownHome= () => {
  return (
    <div className='downHome'>
        <div className='dh-container'>
            <div className='dh-h'>
           <h3 className='dh-h3'>Featured Movie</h3>
           <div className='dh-l'>
            <p className='dh-p'>See more</p>
            <img src={left} alt='' className='dhl-img'/>
           </div>
           </div>
           <MovieList/>
        </div>
    </div>
  )
}

export default DownHome
