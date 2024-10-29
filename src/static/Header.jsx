import styled from 'styled-components';
import { VscTriangleDown } from "react-icons/vsc";
import "./Header.css";
import logo from '../assets/kuda.png';
import nigeria from '../assets/nigeria.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import React, { useState } from 'react';



function Header (){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return(
        <>
          <header className="top">
      <img src={logo} alt="company's logo" />

      <nav>
        <a href="">Personal</a><VscTriangleDown />
        <a href="">Business</a><VscTriangleDown />
        <a href="">Company</a><VscTriangleDown />
        <a href="">Help</a><VscTriangleDown />
      </nav>

      <div className="divButton">
        <button className="sign">Sign in</button>
        <button className="join">Join Kuda</button>
        <img src={nigeria} alt="Nigeria Flag" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="">Personal</a>
          <a href="">Business</a>
          <a href="">Company</a>
          <a href="">Help</a>
          <button className="sign">Sign in</button>
          <button className="join">Join Kuda</button>
        </div>
      )}
    </header>
        </>
    );
}

export default Header 


