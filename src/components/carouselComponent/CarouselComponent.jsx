import React, { useEffect, useRef, useState } from 'react'
import './carouselComponent.css'
import './carouselComponentResponsive.css'


import InfoCoursesCardArray from "../../localStorage/infoCoursesCardArray/InfoCoursesCardArray"

import leftCarouselBtn from "../../photos/carouselBtnImg/Group 365.svg"
import rightCarouselBtn from "../../photos/carouselBtnImg/Group 366.svg"





export default function CarouselComponent() {


    const carouselCardsWrap = useRef()

    const carouselCard= useRef([])


    const carouselPaginationDot = useRef([])



    const leftCarouselScrollingBtn = useRef()
    const rightCarouselScrollingBtn = useRef()






    useEffect(() => {
        if (carouselCard && carouselCardsWrap) {
        
            carouselCard.current.forEach( (item) => {
                const clone = item.cloneNode(true);
                carouselCardsWrap.current.appendChild(clone)
            })


            carouselCard.current.forEach( (item) => {
                const clone = item.cloneNode(true);
                carouselCardsWrap.current.appendChild(clone)
            })


            let carouselLengh = InfoCoursesCardArray.length

            carouselCardsWrap.current.style.cssText=`
                // margin: 0 calc( 10% + ${carouselLengh} * -85% );

                transform: translateX( ${ carouselLengh * (-85) }% );

            `
        }

    }, [])


    useEffect(() => {
        carouselWork();
    }, []);

    function carouselWork() {

        let num = 0

        const timeCoefficient = 4;


        let carouselLengh = InfoCoursesCardArray.length
        
        function carouselMovement(){

            num++


            if (num===1 && carouselCardsWrap) {
                carouselCardsWrap.current.style.cssText=`
                        // margin: 0 calc( 10% + ${carouselLengh*2} * -85% );
                        transition: transform calc( ${carouselLengh} * ${timeCoefficient}s ) linear;
                    
                        transform: translateX( ${ carouselLengh * 2 * (-85) }% );


                    `  
                
            } else if ((num  === carouselLengh + 1) && carouselCardsWrap) {
                carouselCardsWrap.current.style.cssText=` 
                        // margin: 0 calc( 10% + ${carouselLengh} * -85% )
                        // transition: transform  0.01s  linear;

                        transform: translateX( ${ carouselLengh * (-85) }% );

                    `

                // console.log(carouselLengh  * (-85));

                
                setTimeout( () => {
                    startTheCarouselMoving()
                } , 1)

                

                num = 1
            } 


            function startTheCarouselMoving() {
                
                carouselCardsWrap.current.style.cssText=`
                    // margin: 0 calc( 10% + ${carouselLengh*2} * -85% );
                    transition: transform ${carouselLengh*timeCoefficient -0.01}s linear;

                    transform: translateX( ${ carouselLengh * 2 * (-85) }% );
                `

                console.log(carouselLengh * 2 * (-85));
                
            }



            carouselPaginationDot?.current.forEach((item, index) => {
                if (item) {
                    item.style.cssText=`
                            background: #FFFFFF;
                            transition:  background  ${timeCoefficient}s linear;
                        `

                    if (index === num) {
                        item.style.cssText=`
                            background: #C650D6F5;
                            transition: background  ${timeCoefficient}s  linear;
                        `
                    } else if (num === carouselLengh && index===0) {
                        item.style.cssText=`
                            background: #C650D6F5;
                            transition: background ${timeCoefficient}s  linear;
                        `
                    }
                }
                
            })
        }

        setTimeout( () => carouselMovement() , 1)

        let intervalOfCarouselMovement = setInterval( () => carouselMovement(), timeCoefficient*1000)




        setTimeout( () => carouselBtnClick() , 1)

        function carouselBtnClick() {

            let clickOnCarouselBtn = false
            
            leftCarouselScrollingBtn.current.addEventListener( "click", function() {

                if (!clickOnCarouselBtn) {
                    clearInterval(intervalOfCarouselMovement)
                    clickOnCarouselBtn = true
                }

                num--
                
                carouselCardsWrap.current.style.cssText=`
                    // margin: 0 calc( 10% + ${carouselLengh + num-1} * -85% );
                    transition: transform calc(  1.5s ) linear;

                    transform: translateX( ${ (carouselLengh + num-1) * (-85) }% );

                `
                
                
                if (-num === carouselLengh -1 - 1) {

                    setTimeout(() => {
                        carouselCardsWrap.current.style.cssText = `
                            // margin: 0 calc(10% + ${carouselLengh+1} * -85%);

                            transform: translateX( ${ (carouselLengh+1) * (-85) }% );

                        `;
                        num = 2;
                    }, 1501);
                }

                carouselPaginationDot.current.forEach((item, index) => {
                    item.style.cssText=`
                        background: #FFFFFF;
                        transition:  calc( 1.5s ) linear;
                    `

                    

                    if (index === InfoCoursesCardArray.length+num-1) {
                        item.style.cssText=`
                            background: #C650D6F5;
                            transition:  calc( 1.5s ) linear;
                        `
                    } else if (num === 1 && index===0) {
                        item.style.cssText=`
                            background: #C650D6F5;
                            transition:  calc( 1.5s ) linear;
                        `
                    }
            })
            })


            rightCarouselScrollingBtn.current.addEventListener( "click", function (){


                if (!clickOnCarouselBtn) {
                    clearInterval(intervalOfCarouselMovement)
                    clickOnCarouselBtn = true
                }
                
                carouselCardsWrap.current.style.cssText=`
                    // margin: 0 calc( 10% + ${carouselLengh + num} * -85% );
                    transition: transform calc(  1.5s ) linear;

                    transform: translateX( ${ (carouselLengh + num) * -85 }% );

                `

                num++
                if (num === carouselLengh+1) {
                    setTimeout(() => {
                        carouselCardsWrap.current.style.cssText = `
                            // margin: 0 calc(10% + ${carouselLengh} * -85%);

                            transform: translateX( ${ carouselLengh * (-85) }% );

                        `;
                        num = 1;
                    }, 1501);
                }

                

                carouselPaginationDot.current.forEach((item, index) => {
                        item.style.cssText=`
                            background: #FFFFFF;
                            transition:  calc(1.5s ) linear;
                        `
    
                        if (index === num-1) {
                            item.style.cssText=`
                                background: #C650D6F5;
                                transition:  calc( 1.5s ) linear;
                            `
                        } else if (num === carouselLengh+1 && index===0) {
                            item.style.cssText=`
                                background: #C650D6F5;
                                transition:  calc( ${timeCoefficient}s ) linear;
                            `
                        }
                })
            })
        }
    }




  return (
    <div className='carousel'>
        

        <div className='carousel__text'>
            <h1>Yuqori maoshli IT kasblari</h1>
        </div>



        <div className='carousel_backgroundGradient1'>

            <div ref={leftCarouselScrollingBtn}>
                <img src={leftCarouselBtn} alt="" />
            </div>

        </div>


        <div className='carousel_backgroundGradient2'>

            <div ref={rightCarouselScrollingBtn}>
                <img src={rightCarouselBtn} alt="" />
            </div>

        </div> 



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
                                <div className='carousel__card__img'>
                                    <img src={item.img} alt="1234" />
                                </div>
                            </div> 


                        </div>
                    )
                })
            }
        </div>


        <div className='carousel__pagination'>
            {
                InfoCoursesCardArray?.map((item,index) => {
                    return(
                        <span ref={el => carouselPaginationDot.current[index] = el} key={index}></span>
                    )
                })
            }
        </div>


    </div>
  )
}
