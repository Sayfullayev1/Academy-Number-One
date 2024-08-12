import React from 'react'
import './page-articleComponent.css'
import './page-articleComponentResponsive.css'


import arrow from '../../../photos/PageArticleComponentImg/Vector 15.svg'
import lightning from '../../../photos/PageArticleComponentImg/high-voltage_26a1 1.svg'




import CarouselComponent from '../../carouselComponent/CarouselComponent'





export default function PageArticleComponent() {


  const cardInfo = [
    {
      Number: 2500,
      numberCollor: "#46086D",
      infoText: "Muvafaqqiyatli kursizmizni bitirgan o’quvchilar. Siz ham shu o’quvchilarimiz qatoriga qo’shiling"
    },
    {
      Number: 45,
      numberCollor: "#7678ED",
      infoText: "Muvafaqqiyatli kursizmizni bitirgan o’quvchilar. Siz ham shu o’quvchilarimiz qatoriga qo’shiling"
    },
    {
      Number: 234,
      numberCollor: "#F7B801",
      infoText: "Muvafaqqiyatli kursizmizni bitirgan o’quvchilar. Siz ham shu o’quvchilarimiz qatoriga qo’shiling"
    },
    {
      Number: "97%",
      numberCollor: "#00A76D",
      infoText: "Muvafaqqiyatli kursizmizni bitirgan o’quvchilar. Siz ham shu o’quvchilarimiz qatoriga qo’shiling"
    },
  ];


  const pepeatArray = [1,2,3,4] 


  return (
    <article className='page-article'>
      



      <div className='page-article__infoWrapper'>


        <div className='page-article__info'>

          <div className='page-article__info__textWrapper'>
            <h1 className='page-article__info__text'>Nima uchun bizni <span>tanlashingiz kerak</span></h1>
            <span>?</span>
          </div>

          <div className='page-article__info__arrowWrapper'>

            <div className='page-article__arrowWrapper__line1'></div>

            <div className='page-article__arrowWrapper__line2'></div>

            {
              pepeatArray.map( (item) => {
                return(
                  <div key={item} className={`page-article__info__arrow${item} page-article__info__arrow`}>
                    <img src={arrow} alt="" />
                  </div>
                )
              })
            }


            <div className='page-article__info__arrowWrapper__imgWrapper'>
              <div className='page-article__info__arrowWrapper__img'>
                <img src={lightning} alt="" />
              </div>
            </div>
            

          </div>

        </div>


        <div className='page-article__cardWrapper'>
          {
            cardInfo.map( (item) => {
              return(
                <div key={item.Number} className='page-article__card'>

                  <div className='page-article__card__info'>
                    <h1 style={{color: `${item.numberCollor}`}}>{item.Number}</h1>
                  </div>

                  <div className='page-article__card__text'>
                    <p>{item.infoText}</p>
                  </div>

                  <div className='page-article__card__btn'>
                    <h3 style={{color: `${item.numberCollor}`}}>+</h3>
                  </div>

                </div>
              )
            })
          }
        </div>



      </div>




      <div className='page-article__carouselWrapper'>



        <div></div>



        <div className='page-article__carousel'>

          <CarouselComponent/>

        </div>



        <div></div>



      </div>




    </article>
  )
}
