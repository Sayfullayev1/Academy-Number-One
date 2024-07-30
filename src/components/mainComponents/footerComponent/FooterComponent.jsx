import React from 'react'
import './footerComponent.css'
import './footerComponentResponsive.css'


import { Link } from 'react-router-dom'


import logo from "../../../photos/logo/Untitled-1@3x 1.svg";

import facebook from "../../../photos/footerPhotos/FooterImgLogo/Facebook.svg"
import twitter from "../../../photos/footerPhotos/FooterImgLogo/Twitter.svg"
import instagram from "../../../photos/footerPhotos/FooterImgLogo/Instagram.svg"
import linkedIn from "../../../photos/footerPhotos/FooterImgLogo/LinkedIn.svg"
import youTube from "../../../photos/footerPhotos/FooterImgLogo/YouTube.svg"


import email from "../../../photos/footerPhotos/footerImgList/Email.svg"
import phone from "../../../photos/footerPhotos/footerImgList/Phone.svg"



export default function FooterComponent() {


  const menuList = [
    {
      Name: "Product",
      list: [
        {
          itemName: "Features",
          Link: ""
        },
        {
          itemName: "Pricing",
          Link: ""
        },
        {
          itemName: "Case studies",
          Link: ""
        },
        {
          itemName: "Reviews",
          Link: ""
        },
        {
          itemName: "Updates",
          Link: ""
        },
      ]
    },
    {
      Name: "Company",
      list: [
        {
          itemName: "About",
          Link: ""
        },
        {
          itemName: "Contact us",
          Link: ""
        },
        {
          itemName: "Careers",
          Link: ""
        },
        {
          itemName: "Culture",
          Link: ""
        },
        {
          itemName: "Blog",
          Link: ""
        },
      ]
    },
    {
      Name: "Support",
      list: [
        {
          itemName: "Getting started",
          Link: ""
        },
        {
          itemName: "Help center",
          Link: ""
        },
        {
          itemName: "Server status",
          Link: ""
        },
        {
          itemName: "Report a bug",
          Link: ""
        },
        {
          itemName: "Chat support",
          Link: ""
        },
      ]
    },
  ]

  const socialNetwork = [
    {
      photo: facebook,
      link: "",
    },
    {
      photo: twitter,
      link: "",
    },
    {
      photo: instagram,
      link: "",
    },
    {
      photo: linkedIn,
      link: "",
    },
    {
      photo: youTube,
      link: "",
    },
  ]

  const contactList = [
    {
      photo: email,
      text: "contact@company.com",
      link: "mailto:contact@company.com",
    },
    {
      photo: phone,
      text: "50 756 11 88",  
      link: "tel:+507561188",
    },
    {
      photo: phone,
      text: "Chilonzorde oka",  
      link: "https://yandex.com/maps",
    },
  ]



  return (
    <footer className='page-footer'>
      


      <div className='page-footer__wrap'>
          

          <div className='page-footer__info'>

            <div className='page-footer__info__logo'>
                <span>
                  <img src={logo} alt="" />
                </span>
                <h1>Academic Number One</h1>
            </div>

            <div className='page-footer__info__text'>
              <h1>Biz bilan kelajakga birinchi qadamni tashlang!</h1>
            </div>

            <div className='page-footer__info__Logos'>
              {
                socialNetwork.map( (item, index) => {
                  return(
                    <Link key={index}>
                      <img src={item.photo} alt="" />
                    </Link>
                  )
                })
              }
            </div>
            
          </div>


          <div className='page-footer__menuWrapper'>  
            {
              menuList?.map( (item) => {
                return(
                  <div className='page-footer__menu' key={item.Name}>
                    <h1 className='page-footer__menu__text'>{item.Name}</h1>
                    <ul className='page-footer__menu__list'>
                      {
                        item.list.map( (elem, index) => {
                          return(
                            <li className='page-footer__menu__item' key={index}>
                              <Link className='page-footer__menu__link'>
                                {
                                  elem.itemName
                                }
                              </Link>
                            </li>
                          )
                          
                        })
                      }
                    </ul>
                  </div>
                )
                
              })
            }
          </div>


          <div className='page-footer__info'>
            <div className='page-footer__info__wrap'>
              <h1 className='page-footer__info__text'>Bog’lanish</h1>
              <ul className='page-footer__info__list'>
                {
                  contactList.map( (item) => {
                    return(
                      <li key={item.text} className='page-footer__info__item'>
                        <Link className='page-footer__info__link' to={item.link}>
                          <span>
                            <img src={item.photo} alt="" />
                          </span>
                          <h2>{item.text}</h2>
                        </Link>
                      </li>
                    )
                  })
                }
                
              </ul>
              
            </div>
          </div>
        

      </div>



      <div className='page-footer__select'>


        <div className='page-footer__select__text'>
          <h1>Copyright © 2024 yokubov Templates</h1>
        </div>


        <div className='page-footer__select__info'>

          <span>All Rights Reserved | </span>
          
          <span>
            <Link>{`Terms and `}</Link>
          </span>

          <span>
            <Link>{`Conditions`}</Link>
          </span>

          <span>{` | `}</span>

          <span>
            <Link>Privacy Policy</Link>
          </span>

        </div>


      </div>



    </footer>
  )
}
