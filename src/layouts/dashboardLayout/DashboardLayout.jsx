import React, { useEffect, useState } from 'react'
import "./dashboardLayout.css"

import HeaderComponent from "../../components/mainComponents/headerComponent/HeaderComponent"

import NavbarComponent from "../../components/mainComponents/navbarComponent/NavbarComponent"
import { Outlet } from 'react-router-dom'

import FooterComponent from "../../components/mainComponents/footerComponent/FooterComponent"



export default function DashboardLayout() {

  useEffect(() => {
    document.title = 'Academic Number One'; // Устанавливаем новый заголовок
  }, []); 

  const [headerPosition, setHeaderPosition] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)

  const handleDataFromFirstChild = (dataFromChild, headerHeight) => {
    setHeaderPosition(dataFromChild);
    setHeaderHeight(headerHeight)
  };


  return (
    <div className='container'>

        <HeaderComponent sendDataToParent={handleDataFromFirstChild}/>

        <NavbarComponent headerInfo={ {headerPosition, headerHeight} }/>

          <Outlet/>

        <FooterComponent/>
      
    </div>
  )
}

