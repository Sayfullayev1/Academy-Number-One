import React, { useEffect, useRef } from 'react'
import './contactFormComponent.css'
import './contactFormComponentResponsive.css'

import btnArrowImg from "../../photos/PageSectionComponentImages/arrow-right-circle.svg"
import userDataCardImg from "../../photos/PageSectionComponentImages/Computerservice_fuer_Arztpraxen_2-4921bac1 1 (1).svg"



export default function ContactFormComponent() {

    const nameInput = useRef()
    const phoneNumberInput = useRef()
    const emailInput = useRef()



    useEffect(() => {

        nameInput.current.addEventListener('input', function(e) {
            let input = e.target;
    
            input.value = input.value.slice(0, 20);
        })

        phoneNumberInput.current.addEventListener('focus', function(e) {
            let input = e.target;
    
            input.addEventListener('input', function() {
                input.value = input.value.replace(/[^0-9+]/g, '');
    
                if (input.value.length <= 2 ) {
                    input.value = input.value.slice(0, 2)
                } else if (input.value.length <= 5) {
                    input.value = input.value.slice(0, 2) + " " + input.value.slice(2, 5)
                } else if (input.value.length <= 7) {
                    input.value = input.value.slice(0, 2) + " " + input.value.slice(2, 5) + " " + input.value.slice(5, 7)
                }
                else if (input.value.length >= 7) {
                    input.value = input.value.slice(0, 2) + " " + input.value.slice(2, 5) + " " + input.value.slice(5, 7) + " " + input.value.slice(7, 9)
                }
            });
    
        })
        


        emailInput.current.addEventListener('input', function(e) {
            let input2 = e.target;
    
            input2.value = input2.value.slice(0, 30);
        })




        // nameInput.current.addEventListener('input', function(){
        //     phoneNumberInput.current.focus()

        //     if (nameInput.current.value === "") {
        //         nameInput.current.style.cssText = `
        //             border: 1px solid red;
        //         `
        //     } else {
        //         nameInput.current.style.cssText = `
        //             border: 1px solid #46086D;
        //         `
        //     }
        // })


        // phoneNumberInput.current.addEventListener('input', function(){
        //     emailInput.current.focus()

        //     if (phoneNumberInput.current.value.length < 12) {
        //         phoneNumberInput.current.style.cssText = `
        //             border: 1px solid red;
        //         `
        //     } else {
        //         phoneNumberInput.current.style.cssText = `
        //             border: 1px solid #46086D;
        //         `
        //     }
        // })


        // emailInput.current.addEventListener('input', function(){
        //     // emailInput.current.focus()

        //     if (emailInput.current.value.length < 12 || emailInput.current.value.endsWith('@gmail.com') === false) {
        //         emailInput.current.style.cssText = `
        //             border: 1px solid red;
        //         `
        //     } else {
        //         emailInput.current.style.cssText = `
        //             border: 1px solid #46086D;
        //         `
        //     }
        // })

    }, [])


    function sendDataInformation() {

        if (nameInput.current.value === "") {
            nameInput.current.style.cssText = `
                border: 1px solid red;
            `
        } else {
            nameInput.current.style.cssText = `
                border: 1px solid #46086D;
            `
        }
        

        if (phoneNumberInput.current.value.length < 12) {
            phoneNumberInput.current.style.cssText = `
                border: 1px solid red;
            `
        } else {
            phoneNumberInput.current.style.cssText = `
                border: 1px solid #46086D;
            `
        }

        if (emailInput.current.value.length < 12 || emailInput.current.value.endsWith('@gmail.com') === false) {
            emailInput.current.style.cssText = `
                border: 1px solid red;
            `
        } else {
            emailInput.current.style.cssText = `
                border: 1px solid #46086D;
            `
        }

    }


  return (
    <div className='page-section__userDataCard'>

        
        <div className='userDataCard__title'>

            <h1>Keling, tanlashda yordam beramiz!</h1>

            <p>Agar sizda format haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz, raqamingizni qoldiring: barcha savollaringizga javob berish uchun qo'ng'iroq qilamiz.</p>

        </div>


        <div className='userDataCard__wrap'>

            <div className='userDataWrapper'>

                <div className='userData__inputWrapper'>

                    <div>
                        <input className='name-input' type="text" placeholder='Ismingiz' ref={nameInput}/>
                    </div>

                    <div className='phone-number-inputWrapper'>
                        <span>+998</span>
                        <input className='phone-number-input' type="text" placeholder='-- --- -- --' ref={phoneNumberInput}/>
                    </div>
                            
                    <div>
                        <input className='email-input' type="text" placeholder='E-mail' ref={emailInput}/>
                    </div>

                </div>

                <div className='userData__btnWrapper'>

                    <ul className='userData__btnWrapper__list'>
                        <li className='userData__btnWrapper__item'>
                            <input type="checkbox" className="userData__btnWrapper__checkbox" />
                            <span>Karyeraam uchun maslahat olishni hohlayman</span>
                        </li>
                        <li className='userData__btnWrapper__item'>
                            <input type="checkbox" className="userData__btnWrapper__checkbox" />
                            <span>Men shaxsiy ma'lumotlarni qayta ishlashga rozilik beraman</span>
                        </li>
                    </ul>

                    <button className='userData__btnWrapper__btn' onClick={() => sendDataInformation()}>
                        Jo’natish
                        <span>
                            <img src={btnArrowImg} alt="" />
                        </span>
                    </button>
                </div>

            </div>

            <div className='userDataCard__imgWrapper'>
                <img src={userDataCardImg} alt="" />
            </div>

        </div>
    </div>
  )
}
