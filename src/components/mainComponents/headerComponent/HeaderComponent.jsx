import React, { useEffect, useRef, useState } from 'react'
import './headerComponent.css'
import './headerComponentResponsive.css'


import pythonLogo from "../../../photos/headerPageBackgroundImages/Python.svg"
import javaLogo from "../../../photos/headerPageBackgroundImages/Java.svg"
import gitHubLogo from "../../../photos/headerPageBackgroundImages/GitHub.svg"
import CProgrammingLogo from "../../../photos/headerPageBackgroundImages/C Programming.svg"
import vscodTypeCssLogo from "../../../photos/headerPageBackgroundImages/vscode-icons_file-type-css.svg"
import vscodTypeHtmlLogo from "../../../photos/headerPageBackgroundImages/vscode-icons_file-type-html.svg"
import visualStudioCodeLogo from "../../../photos/headerPageBackgroundImages/Visual Studio Code 2019.svg"
import btnRemoveElement from "../../../photos/exitButtonImg/Group 39470.svg"







export default function HeaderComponent({ sendDataToParent }) {


  const header = useRef()

  const [headerPosition, setHeaderPosition] = useState(false)


  function remuvePageHeader() {
    setHeaderPosition(true)
    header.current.style.cssText=`
      // transform: translateY(-60px);
      display: none;
    `
  }

  useEffect(()=>{
    const headerHeight = header.current.getBoundingClientRect().height
    sendDataToParent(headerPosition, headerHeight);
  }, [headerPosition])



  return (
    <header className='page-header' ref={header}>



      <div className='page-header__wrap'>
      
        
        <div className='page-header__photos'>

          <span>
            <img src={pythonLogo} alt="" />
          </span>

          <span>
            <img src={javaLogo} alt="" />
          </span>

          <span>
            <img src={gitHubLogo} alt="" />
          </span>

        </div>


        <div className='page-header__menu'>

          <div className='page-header__menu__text'>
            <h1 className=''>IT bo'yicha keng qamrovli o'quv kurslarimizni o'rganing!</h1>
          </div>

          <div className='page-header__menu__btn'>
            <button>Ma’lumot oling</button>
          </div>

        </div>


        <div className='page-header__photos'>

          <span>
            <img src={CProgrammingLogo} alt="" />
          </span>

          <span>
            <img src={vscodTypeCssLogo} alt="" />
          </span>

          <span>
            <img src={vscodTypeHtmlLogo} alt="" />
          </span>

          <span>
            <img src={visualStudioCodeLogo} alt="" />
          </span>

          <div className='page-header__photos__btn' onClick={()=>remuvePageHeader()}>
            <img src={btnRemoveElement} alt="" />
          </div>

        </div>


      </div>



    </header>
    
  )
}
