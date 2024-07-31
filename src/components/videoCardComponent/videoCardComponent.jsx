import React, { useEffect, useRef, useState } from 'react';
import './videoCardComponent.css';
import videoBtn from "../../photos/videoBtnImages/Group 370.svg";

export default function VideoCardComponent(props) {
  const [isControlsVisible, setIsControlsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const imageCard = useRef();
  const videoElement = useRef();
  const videoBtnElement = useRef();



  function videoCardWork() {
      setIsControlsVisible(true);


      function dd(params) {
        if (isControlsVisible === true) {
          videoElement.current.play();
        }
        
      }

      setTimeout( dd(), 113)

  }


  useEffect(() => {
    if (isControlsVisible && videoBtnElement.current) {
      videoBtnElement.current.style.display = 'none';
    }
  }, [isControlsVisible]);

  return (
    <div className='videoCard' ref={imageCard} onClick={() => videoCardWork() }>
      <div className='videoCard__wrap'>
        <video 
          className='videoCard__video' 
          ref={videoElement} 
          // src={props?.elem.video} 
          poster={props?.elem.image.titlePhoto} 
          controls={isControlsVisible ? true : undefined}
          controlsList="nodownload"
        >
          <source src={props?.elem.video} />
        </video>
      </div>

      {!isControlsVisible && (
        <div className='videoCard__btn'>
          <img ref={videoBtnElement} src={videoBtn} alt="Play button" />
        </div>
      )}
    </div>
  );
}