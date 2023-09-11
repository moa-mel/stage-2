import React from 'react'
import "./styles.css"
import TopHome from '../../components/TopHome'
import DownHome from '../../components/DownHome'

const Home = () => {
  return (
    <div className='home'>
        <div className='h-container'>
            {/*topHome*/}
            <TopHome/>
            {/*downHome*/}
            <DownHome/>
        </div>

    </div>
  )
}

export default Home