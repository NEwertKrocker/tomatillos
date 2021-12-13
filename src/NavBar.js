import React from "react";
import Form from './Form'
import './css/NavBar.css'

const NavBar = ({ searchMovies }) => {
  return (
    <header className='nav-bar'>
      <h1>Rancid Tomatillos</h1>
      <Form searchMovies={searchMovies}/>
    </header>
  )
}

export default NavBar;
