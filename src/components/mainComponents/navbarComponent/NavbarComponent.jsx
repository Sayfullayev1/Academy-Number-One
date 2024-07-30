import React, { useRef } from 'react'

import './navbarComponent.css'
import './navbarComponentResponsive.css'


import logo from "../../../photos/logo/Untitled-1@3x 1.svg"

import phoneLogo from "../../../photos/navbarBtnImg/phone.svg"
import { Link } from 'react-router-dom'


import btnMenu from "../../../photos/btnMenu/align-right.svg"


export default function NavbarComponent({ headerInfo}  ) {

  const pageNavbar = useRef()


  positionPageNavbar()

  function positionPageNavbar() {
    
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      

      if (scrollPosition >= headerInfo.headerHeight-1 && headerInfo.headerPosition===false && pageNavbar.current.offsetWidth < 1540) {
        pageNavbar.current.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          backdrop-filter: blur(10px);
          transform: translateY(0px);
          z-index: 111;
        `;
      } else if (scrollPosition >= headerInfo.headerHeight-1 && headerInfo.headerPosition===false && pageNavbar.current.offsetWidth === 1540) {
        pageNavbar.current.style.cssText = `
          position: fixed;
          top: 0;
          left: calc ( 50% - 1540px );
          backdrop-filter: blur(10px);
          transform: translateY(0px);
          z-index: 111;
        `;
      } else if (scrollPosition >= 0 && headerInfo.headerPosition===true && pageNavbar.current.offsetWidth < 1540) {
        pageNavbar.current.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          backdrop-filter: blur(10px);
          transform: none;
          z-index: 111;
        `;
        console.log("false", headerInfo.headerPosition);
      }  else if (scrollPosition >= 0 && headerInfo.headerPosition===true && pageNavbar.current.offsetWidth === 1540) {
        pageNavbar.current.style.cssText = `
          position: fixed;
          top: 0;
          left: calc ( 50% - 1540px );
          backdrop-filter: blur(10px);
          transform: none;
          z-index: 111;
        `;
        console.log("false", headerInfo.headerPosition);
      } 
      
      
      else {
        pageNavbar.current.style.cssText = `
          position: static;
        `;
      }
    })
  }



  return (
    <nav className='page-navbar' ref={pageNavbar}>



      <div className='page-navbar__logoWrapper'>

        <div className='page-navbar__logo'>
          <img src={logo} alt="" />
        </div>

        <div className='page-navbar__logoText'>
          <h1>Academic number one</h1>
        </div>

      </div>


      <div className='page-navbar__btnWrapper'>

        <a href="tel:+998507561188">
          <button className='page-navbar__contactBtn'>
            <span>
              <img src={phoneLogo} alt="" />
            </span>
            +998 50 756 11 88
          </button>
        </a>

        <Link to={"/kurslar"}>
          <button className='page-navbar__linkBtn'>Kurslar</button>
        </Link>
       
       <div className='page-navbar__menuBtn'>
          <img src={btnMenu} alt="" />
       </div>

      </div>


    </nav>
  )
}
