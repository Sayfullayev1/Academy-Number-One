import React, { useRef, useState } from 'react'
import './carouselComponent.css'
import './carouselComponentResponsive.css'


import InfoCoursesCardArray from "../../localStorage/infoCoursesCardArray/InfoCoursesCardArray"


export default function CarouselComponent() {


    const carouselCardsWrap = useRef()

    const carouselCard= useRef([])


    // if (InfoCoursesCardArray) {
    //     console.log(InfoCoursesCardArray);
    // }



    carouselWork()

    function carouselWork() {

        let num = 0

        
        
        function carouselMovement(){

            num++
            console.log(num);


            let carouselLengh = InfoCoursesCardArray.length + 1

            if (num===1) {
                

                carouselCardsWrap.current.style.cssText=`
                    margin: 0 calc( 10% + ${carouselLengh} * -85% );
                    transition: margin calc( ${carouselLengh} * 5s ) linear;
                `
            } else if( num === carouselLengh - 1){
                

                carouselCard.current.map( (item) => {
                    carouselCardsWrap.current.append(item)
                })

            }
            
        }

        setTimeout( () => carouselMovement() , 1)

        let intervalOfCarouselMovement = setInterval( () => carouselMovement(), 1000)

    }




  return (
    <div className='carousel'>
        

        <div className='carousel__text'>
            <h1>Yuqori maoshli IT kasblari</h1>
        </div>


        <div className='carousel_backgroundGradient1'></div>


        <div className='carousel_backgroundGradient2'></div>



        <div className='carousel__wrap' ref={carouselCardsWrap}>
            {
                InfoCoursesCardArray?.map( (item, index) => {
                    return(
                        <div className='carousel__card' style={{ background: item.backgroundColor }}  key={index}  ref={ el => carouselCard.current[index] = el}>
                            
                            
                            <div className='carousel__card__info'>
                                
                                <div className='carousel__card__typeOf'>
                                    <p>{item.type}</p>
                                </div>

                                <div className='carousel__card__text'>
                                    <h1>{item.Name}</h1>
                                </div>

                                <div className='carousel__card__term'>
                                    <span>
                                        {item.termOfStudy}
                                    </span>
                                    <span>
                                        {item.internshipPeriod}
                                    </span>
                                </div>

                            </div>
                            

                            <div className='carousel__card__imgWrapper'>
                                <img className='carousel__card__img' src={item.img} alt="" />
                            </div> 


                        </div>
                    )
                })
            }
        </div>

{/* 
        <div className='carousel__cardPosinationWrapper'>
            {
                InfoCoursesCardArray?.map( (item, index) => {
                    <span className=''></span>
                })
            }
        </div> */}


    </div>
  )
}
