import React from 'react'
import '../../styles/layout/_header.scss'
import { Canvas } from "@react-three/fiber";
import Blob from '../Blob'
import Secondnavbar from '../Nav/Secondnavbar';

const Header = () => {
  return (
    <header>
      <div className="header">
          <h1>Transformez vos défis technologiques en opportunités avec notre expertise informatique de pointe.</h1>
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
          <Blob />
        </Canvas>
    </div>
    <div className='secondnavbar-conatiner'>
    <Secondnavbar/>

    </div>
    </header>
  )
}

export default Header