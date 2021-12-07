import React from "react";
import Form from './Form'
import './css/NavBar.css'
import './assets/tomatoes.jpeg'

const backgroundStyle = {
  backgroundImage:
  `url('./assets/tomatoes.jpeg')`,
}

const NavBar = () => {
  return (
    <header className='nav-bar' style={backgroundStyle}>
      <h1>Rancid Tomatillos</h1>
      <Form />
    </header>
  )
}

export default NavBar;
