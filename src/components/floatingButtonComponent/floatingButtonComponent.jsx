import React, { useEffect, useRef, useState } from 'react'
import './floatingButtonComponent.css'
import './floatingButtonComponentResponsive.css'

import { Link } from 'react-router-dom'

import messageImg from '../../photos/floatingButtonImage/token-branded_chat.svg'

import logoImage from "../../photos/logo/Mask group (1).svg"

import arrowImg from "../../photos/floatingButtonCardImages/Vector (4).svg"
import telegramLogo from "../../photos/floatingButtonCardImages/Telegram App.svg"
import whatsAppLogo from "../../photos/floatingButtonCardImages/WhatsApp.svg"





export default function FloatingButtonComponent() {

    const floatingButtonCard = useRef()

    const [showFloatinCard, setShowFloatinCard] = useState(false)

    function btnClick(params) {
        if (showFloatinCard){
            setShowFloatinCard(false)
        } else{
            setShowFloatinCard(true)
        }
    }

    useEffect(() => {
        if (showFloatinCard) {
            floatingButtonCard.current.style.cssText=`
                transition: 0.5s;
                display: inline;
            `
        } else {
            floatingButtonCard.current.style.cssText=`
                transition: 0.5s;
                display: none;
                `
        }
    }, [showFloatinCard])


  return (
    <div className='floatingButton'>


        <div className='floatingButton__wrap' onClick={() => btnClick()}>

            <div className='floatingButton__btn'>
                <img src={messageImg} alt="" />
            </div>

        </div>


        <div ref={floatingButtonCard} className='floatingButton__card'>

            <div className='floatingButton__card__wrap'>

                <div className='floatingButton__card__title'>
                    <div className='floatingButton__card__logo'>
                        <img src={logoImage} alt="" />
                    </div>
                    <div className='floatingButton__card__titleText'>
                        <h2>Online yordamchi</h2>
                    </div>
                    <div onClick={() => btnClick()} className='floatingButton__card__titleBtn'>
                        <span>
                            <img src={arrowImg} alt="" />
                        </span>
                    </div>
                </div>

                <div className='floatingButton__card__info'>

                    <div className='floatingButton__card__text'>
                        <h1>Biz onlaynmiz 👋</h1>
                        <h1>Sizga qanday yordam bera olamiz? Har qanday messenjerda savol bering.</h1>
                    </div>

                    <div className='floatingButton__card__btnWrapper'>
                        <Link to={"https://t.me/username"} target='blank' className='floatingButton__card__btnLink'>
                            <button className='floatingButton__card__btn'>
                                <span>
                                    <img src={telegramLogo} alt="" />
                                </span>
                                Telegram
                            </button>
                        </Link>

                        <Link to={"https://wa.me/507561188"} target='blank' className='floatingButton__card__btnLink'>
                            <button  className='floatingButton__card__btn'>
                                <span>
                                    <img src={whatsAppLogo} alt="" />
                                </span>
                                Whatsapp
                            </button>
                        </Link>
                    </div>

                </div>

            </div>

        </div>


    </div>
  )
}
