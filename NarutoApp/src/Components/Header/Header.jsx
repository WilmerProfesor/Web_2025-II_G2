import React from 'react'
import './Header.css'
import logo from '../../Assets/Naruto_logo2.png'

const Header = () => {
  return (
    <header>
        <img src={logo} alt="Logo Naruto" id='logoPpal' />
        <h1>Naruto APP</h1>
    </header>    
  )
}

export default Header