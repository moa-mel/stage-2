import React from 'react'
import "./styles.css"
import TopHome from '../../components/TopHome'
import DownHome from '../../components/DownHome'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className='home'>
        <div className='h-container'>
            {/*topHome*/}
            <TopHome/>
            {/*downHome*/}
            <DownHome/>
            {/*footer*/}
            <Footer/>
        </div>

    </div>
  )
}

export default Home