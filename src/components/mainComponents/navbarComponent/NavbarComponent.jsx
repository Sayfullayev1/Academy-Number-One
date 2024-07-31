import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import './navbarComponent.css'
import './navbarComponentResponsive.css'



import logo from "../../../photos/logo/Untitled-1@3x 1.svg"

import phoneLogo from "../../../photos/navbarBtnImg/phone.svg"

import btnMenu from "../../../photos/btnMenu/align-right.svg"

import pythonLogo from "../../../photos/dropdownMenuImages/Python (3).svg"
import gitHubLogo from "../../../photos/dropdownMenuImages/GitHub (3).svg"
import cProgrammingLogo from "../../../photos/dropdownMenuImages/C Programming (3).svg"
import visualStudioCodeLogo from "../../../photos/dropdownMenuImages/Visual Studio Code 2019 (3).svg"
import javaLogo from "../../../photos/dropdownMenuImages/Java (3).svg"
import vscodeCssLogo from "../../../photos/dropdownMenuImages/vscode-icons_file-type-css (3).svg"
import vscodeHtmlLogo from "../../../photos/dropdownMenuImages/vscode-icons_file-type-html (3).svg"
import btnRemoveElement from "../../../photos/exitButtonImg/Group 39470.svg"






export default function NavbarComponent({ headerInfo}  ) {

  const pageNavbar = useRef()

  const dropdownMenu =useRef()

  const [ dropdownMenuShow , setDropdownMenuShow ] = useState(false)


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


  function dropdownMenuAnimation() {
    if (dropdownMenuShow) {
      setDropdownMenuShow(false)
    } else {
      setDropdownMenuShow(true)
    }
    
  }

  useEffect(() => {
    if (dropdownMenuShow) {
      dropdownMenu.current.style.cssText = `
        transition: 1.2s;
        transform: translateX(0%);
      `
      document.body.style.overflow = "hidden";
    } else {
      dropdownMenu.current.style.cssText = `
        transition: 1.2s;
        transform: translateX(102%);
      `
      document.body.style.overflow = "visible";
    }
  }, [dropdownMenuShow])


  return (
    <nav className='page-navbar' ref={pageNavbar}>



      <div className='page-navbar__logoWrapper'>

        <div className='page-navbar__logo'>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className='page-navbar__logoText'>
          <h1>Academic Number One</h1>
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
       
       <div className='page-navbar__menuBtn' onClick={() => dropdownMenuAnimation()}>
          <img src={btnMenu} alt="" />
       </div>

      </div>


      <div className='page-navbar__dropdown-menu' ref={dropdownMenu}>


        <div className='dropdown-menu__infoWrapper'>


          <div className='dropdown-menu__info'>

            <div className='dropdown-menu__info__text'>
              <h1>IT bo'yicha keng qamrovli o'quv kurslarimizni o'rganing!</h1>
            </div>

            <div className='dropdown-menu__info__btn'>
              <Link>
                <button>Ma’lumot oling</button>
              </Link>
            </div>

          </div>


          <div className='dropdown-menu__floating-icon1'>
            <img src={pythonLogo} alt="" />
          </div>

          <div className='dropdown-menu__floating-icon2'>
            <img src={gitHubLogo} alt="" />
          </div>

          <div className='dropdown-menu__floating-icon3'>
            <img src={cProgrammingLogo} alt="" />
          </div>

          <div className='dropdown-menu__floating-icon4'>
            <img src={visualStudioCodeLogo} alt="" />
          </div>

          <div className='dropdown-menu__floating-icon5'>
            <img src={javaLogo} alt="" />
          </div>

          <div className='dropdown-menu__floating-icon6'>
            <img src={vscodeCssLogo} alt="" />
          </div>

          <div className='dropdown-menu__floating-icon7'>
            <img src={vscodeHtmlLogo} alt="" />
          </div>

          <div className='dropdown-menu__floating-btn' onClick={() => dropdownMenuAnimation()}>
            <img src={btnRemoveElement} alt="" />
          </div>

        </div>


        <div className='dropdown-menu__menu'>

        </div>


      </div>


    </nav>
  )
}
