import React from 'react'
import './Header.css'
import logo from '../../assets/LogoDBZ2.png'

const Header = () => {
  return (    
    <header>        
        <img src={logo} alt="Logo Dragon Ball Z" className="logo" id='logoDBZ'/>
    </header>
  )
}

export default Header