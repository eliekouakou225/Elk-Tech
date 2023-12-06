import React from 'react'
// import React, { useState } from 'react'
import video from '../../Assets/videos/videoWorld.mp4'

const Projet = () => {


  return (
   <div className="container-fluid">
      <div className="main">
        <video src={video} autoPlay loop muted></video>
        <div className="content">
          <h1>Welcome</h1>
          <p>Elk-tech</p>
        </div>
      </div>
   </div>
  )
}

export default Projet