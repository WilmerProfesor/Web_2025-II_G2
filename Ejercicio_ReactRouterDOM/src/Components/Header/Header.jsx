import React from 'react'
import FaceHomer from '../../assets/FaceHomer.jpg'
import './Header.css'

const Header = () => {
  return (
    <header>
        <img src={FaceHomer} alt="Face Homer" id='image-title' />
        <h1>Los Simpsons</h1>
    </header>
  )
}

export default Header