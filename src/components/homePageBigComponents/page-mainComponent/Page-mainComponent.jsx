import React, { useEffect, useRef, useState } from 'react'
import './page-mainComponent.css'
import './page-mainComponentResponsive.css'


import elipse1 from "../../../photos/PageMainComponentImages/Ellipse 6.svg"
import elipse2 from "../../../photos/PageMainComponentImages/Ellipse 5.svg"


import vector1 from "../../../photos/PageMainComponentImages/Vector 1.svg"
import vector2 from "../../../photos/PageMainComponentImages/zap.svg"
import vector3 from "../../../photos/PageMainComponentImages/Vector 2.svg"
import vector4 from "../../../photos/PageMainComponentImages/zap (1).svg"


import ligoImg1 from '../../../photos/mainPageCardImages/online-test 1.svg'
import ligoImg2 from '../../../photos/mainPageCardImages/exam 1.svg'
import ligoImg3 from '../../../photos/mainPageCardImages/exam 1.svg'




export default function PageMainComponent() {

    const btnOfTheCard = useRef([])


    const [listIndexOfTheCard, setListIndexOfTheCard] = useState(0)

    const cardData = [
        {
            Name: "Front-End",
            Info: [
                {
                    img: ligoImg1,
                    title: "Eng so'nggi ko'nikmalarni o'rganing",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
                {
                    img: ligoImg2,
                    title: "Karyera uchun tayyorlaning",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
                {
                    img: ligoImg3,
                    title: "Sertifikatga ega bo'ling",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
            ],
        },
        {
            Name: "Back-End",
            Info: [
                {
                    img: ligoImg1,
                    title: "Eng so'nggi ko'nikmalarni o'rganing",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
                {
                    img: ligoImg2,
                    title: "Karyera uchun tayyorlaning",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
                {
                    img: ligoImg3,
                    title: "Sertifikatga ega bo'ling",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
            ],
        },
        {
            Name: "Full-Stack",
            Info: [
                {
                    img: ligoImg1,
                    title: "Eng so'nggi ko'nikmalarni o'rganing",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
                {
                    img: ligoImg2,
                    title: "Karyera uchun tayyorlaning",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
                {
                    img: ligoImg3,
                    title: "Sertifikatga ega bo'ling",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
            ],
        },
        {
            Name: "Web-testirovshik",
            Info: [
                {
                    img: ligoImg1,
                    title: "Eng so'nggi ko'nikmalarni o'rganing",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
                {
                    img: ligoImg2,
                    title: "Karyera uchun tayyorlaning",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
                {
                    img: ligoImg3,
                    title: "Sertifikatga ega bo'ling",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
            ],
        },
        {
            Name: "Php dasturchi",
            Info: [
                {
                    img: ligoImg1,
                    title: "Eng so'nggi ko'nikmalarni o'rganing",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
                {
                    img: ligoImg2,
                    title: "Karyera uchun tayyorlaning",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
                {
                    img: ligoImg3,
                    title: "Sertifikatga ega bo'ling",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
            ],
        },
        {
            Name: "Phyton dasturchi",
            Info: [
                {
                    img: ligoImg1,
                    title: "Eng so'nggi ko'nikmalarni o'rganing",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
                {
                    img: ligoImg2,
                    title: "Karyera uchun tayyorlaning",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
                {
                    img: ligoImg3,
                    title: "Sertifikatga ega bo'ling",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
            ],
        },
        {
            Name: "Java dasturchi",
            Info: [
                {
                    img: ligoImg1,
                    title: "Eng so'nggi ko'nikmalarni o'rganing",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
                {
                    img: ligoImg2,
                    title: "Karyera uchun tayyorlaning",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
                {
                    img: "https://s3-alpha-sig.figma.com/img/2b45/0a7a/aeec583b742195169b6d6e836c5b8470?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gcgIOhCAB3zxNoytHRs3mfiAXO~pPNmPyL4YzmARW5866gspfyaA1rlAc8u7pH1mZdijj-E1NgDXWu~~iSGaYa5xPI-hg-ihoUWkpjDW70IGbqlKMG~YnAAWsEewIUMUxFMYduGzLtXx9-Y6LVguVdtQ5BvJksf9Ja0Cov5uP10s64Vc-pUPYwrOjsgkiUXA-grg1pOTOQSE5zmMf1dOqeP0mPRXzNeAIXZBTeuBZNXmeOXR-tqJPRmRjsP5IRkEnbPiqrZqQ-4QVzDSkcxvWWRVez9z8cCuiJrJF01TwxxRfqzxxp7hH05QVmcZYyl1K1vGY09LqNhkJ-sCsdDB6w__",
                    title: "Sertifikatga ega bo'ling",
                    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.",
                },
            ],
        },
    ]


    useEffect(() => {
        btnOfTheCard.current.forEach( (item) => {
            item.style.cssText=`
                // color: #FFFFFF;
                // background: none;
            `
        })
        btnOfTheCard.current[listIndexOfTheCard].style.cssText=`
            color: #4D2C5E;
            background: #FFFFFF;
        `
    }, [listIndexOfTheCard])



  return (
    <main className='page-main'>



        <div className='page-main__info'>


            <div className='page-main__info__text'>

                <div className='page-main__info__text__imgWrapper'>
                    <img src={vector1} alt="" />
                </div>

                <div className='page-main__info__text__imgWrapper'>
                    <img src={vector2} alt="" />
                </div>

                <h1>
                    Kuzni yangi bilimlar bilan 
                    <span> 
                        <div>
                            <img src={elipse1} alt="" />
                        </div> 
                            {` boshlang !`}
                        <div>
                            <img src={elipse2} alt="" />
                        </div>
                    </span> 
                </h1>

                <div className='page-main__info__text__imgWrapper'>
                    <img src={vector3} alt="" />
                </div>

                <div className='page-main__info__text__imgWrapper'>
                    <img src={vector4} alt="" />
                </div>

            </div>


            <div className='page-main__info__arrowWrapper'>

                <div className='page-main__info__arrow'>

                    <div className='page-main__info__line'></div>

                    <div className='page-main__info__endLine'>
                        <div></div>
                        <div></div>
                    </div>

                </div>
                

            </div>


        </div>



        <div className='page-main__cardWrapper'>


            <div className='page-main__card'>

                <div className='page-main__card__infoWrapper'>
                    {
                        cardData[listIndexOfTheCard].Info.map( (item) => {
                            return(
                                <div className='page-main__card__info' key={item.title}>
                                    <div className='page-main__card__info__imgWrapper'>
                                        <div>
                                            <img className='page-main__card__info__img' src={item.img} alt="" />
                                        </div>
                                    </div>
                                    <div className='page-main__card__info__text'>
                                        <h1>{item.title}</h1>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>

                <div className='page-main__card__btnWrapper'>

                    <h1>IT - kurslar</h1>

                    <div className='page-main__card__btn'>
                        {
                            cardData.map( (item, index) => {
                                return(
                                    <button onClick={()=>setListIndexOfTheCard(index)} ref={(el) => (btnOfTheCard.current[index] = el)} key={item.Name}>{item.Name}</button>
                                )
                            })
                        }       
                    </div>


                </div>


            </div>


            


        </div>

        

    </main>
  )
}
