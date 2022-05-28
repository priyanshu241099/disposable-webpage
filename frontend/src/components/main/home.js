import React from 'react'
import Video1 from '../video/Video1.mp4'


const Home = () => {
  return (
    
    <div className='home'>
      <div className='overlay'>
    <video src={Video1} autoPlay loop muted  />
    <div className='content '>
      <h1 >Hello Welcome</h1>
      <p>To my site</p>
    </div>
    </div>
    
   

    </div>
  )
}

export default Home;