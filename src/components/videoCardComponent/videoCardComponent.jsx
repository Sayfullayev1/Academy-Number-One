import React, { useEffect, useRef, useState } from 'react'
import './videoCardComponent.css'

import videoBtn from "../../photos/videoBtnImages/Group 370.svg"

export default function VideoCardComponent(props) {

  let [isControlsVisible, setIsControlsVisible] = useState(false)

  const imageCard = useRef()
  const videoElement = useRef()
  const videoBtnElement = useRef()


  useEffect(() => {
    const cardElement = imageCard.current;

    cardElement.addEventListener('mousedown', function() {

      setIsControlsVisible(true)

      if (isControlsVisible) {  
        videoElement.current.play();
      } 
    });

    

    let scrollPositionIndex = window.scrollY

    cardElement.addEventListener('touchstart', function(event) {
      scrollPositionIndex = window.scrollY
    });

    cardElement.addEventListener('touchend', function() {
      setIsControlsVisible(true)

      let newScrollPositionIndex = window.scrollY
      
      if (isControlsVisible===false && scrollPositionIndex === newScrollPositionIndex ) {  
        videoElement.current.play();
      } 
    });

  }, [])



  useEffect(() => {
    if (isControlsVisible) {
      videoBtnElement.current.style.cssText = `
        display: none;
      `
    } 

  }, [isControlsVisible])

  return (
    <div className='videoCard' ref={imageCard} >

        <div className='videoCard__wrap'>
            <video 
            className='videoCard__video' 
            ref={videoElement} 
            src={ props?.elem.video } 
            poster={`${props?.elem.image.titlePhoto}`} 
            controls={isControlsVisible ? 'controls' : undefined}
            controlsList="nodownload"
            ></video>
        </div>

        <div className='videoCard__btn'>
          <img ref={videoBtnElement} src={videoBtn} alt="" />
        </div>

    </div>
  )
}
