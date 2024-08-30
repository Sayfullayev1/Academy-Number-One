import React from 'react'
import './page-sectionComponent.css'
import './page-sectionComponentResponsive.css'

import VideoCardComponent from '../../videoCardComponent/videoCardComponent'
import ContactFormComponent from '../../contactFormComponent/ContactFormComponent'



import video from "../../../video/47116636_1398629244120351_1238740285526184807_n.mp4"




export default function PageSectionComponent() {


    const videoData = [
        {
            titlePhoto: "https://s3-alpha-sig.figma.com/img/cb1e/1b37/08b363dcc1fa6dd38a0fb0a6effc5e27?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oLFVYPWzf40vZSQtF0GQsjmpRTtQe6ADQHu-m5W0gyiDJ621vhquRj~7kVqE0MG0yZdE7tbItVgbDYLiLJ1iPCiPAfjbrAhmfCWxJfXb2txTNHedYCS0xhjl1yVLKHVl9K2v3pG714NXHls0Z3YEa8Bc7P2NsxwKVuXmcXMh8W9je13t2jsqxdYCKC~JBHIboe~BcioW0aVoeGbmaIM1s3ro7LO8zHOGYGJjtN~ohkPHzGPhdAwUoUwy4x55ausjuRmCrWaMeaRFhfO2o90WGTWprHZ4oV3VwRM2wn-u5F5m7chN4JjWcNL64~Auzq1kohGzS4XlmXrZF3SZk-t6PA__"
        },
        {
            titlePhoto: "https://s3-alpha-sig.figma.com/img/cb1e/1b37/08b363dcc1fa6dd38a0fb0a6effc5e27?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oLFVYPWzf40vZSQtF0GQsjmpRTtQe6ADQHu-m5W0gyiDJ621vhquRj~7kVqE0MG0yZdE7tbItVgbDYLiLJ1iPCiPAfjbrAhmfCWxJfXb2txTNHedYCS0xhjl1yVLKHVl9K2v3pG714NXHls0Z3YEa8Bc7P2NsxwKVuXmcXMh8W9je13t2jsqxdYCKC~JBHIboe~BcioW0aVoeGbmaIM1s3ro7LO8zHOGYGJjtN~ohkPHzGPhdAwUoUwy4x55ausjuRmCrWaMeaRFhfO2o90WGTWprHZ4oV3VwRM2wn-u5F5m7chN4JjWcNL64~Auzq1kohGzS4XlmXrZF3SZk-t6PA__"
        },
        {
            titlePhoto: "https://s3-alpha-sig.figma.com/img/7144/78ff/21c8257a6ac1ed6712f86a0ced671606?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QJ4p3Z2KJAJ8b7srMDacquqbW7rQ1yYC3fzmVh8RnZIdhIxrrzLYM~19FTez-s2-z7ATLJxGEtwr2R49IeASCZ0YlWIiq2RSONrPbzTnQJWOykIsSR9OcIU2t1cB80Oe8dAvdu6-hu0QlTm~N5iihvmNahFLpg8yiEKrz-flymI0VA37EPh8ACL1HdvgOYgwch~l6OJwma73U9L1LP7wvFt5pudHXCD9jP9sF83LhX1w14gpmHu8OqADZb30YcuUOKiBPgtzDm1gNniY3X6FVVQlR2B1bAWX7zWfDoLEZ6n7eaMfPlgUmBLbyGTSFsxOUitOHFN8m5uZJy3iSQZQzA__"
        },
        {
            titlePhoto: "https://s3-alpha-sig.figma.com/img/6ad0/557d/74e007c1c23efef45ab5a81dfda0cbdf?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gjML~YXvuGQ~-CefCNWL8zSTYYNTFij9fpSxswIX2-ohx19m1i0dPrdwLIaARJb7qTOx5aebwnRcz9w4LIWvsPVMSV-uMV1PcDX5vqYvvfxH3W7yom6OKGjkYR96dYhdkrs32uVck5Hj-cczwyYV8O0tuOFdm0gQSjntC~ClZYdlT2DOz2QXUqy9Dqge7X5nIKFUHz6HcIkyXnEQfuHrdLXUtMaTeZf85wwNKnctoz2dySk~rI2Uh6LF3zLo4m-4aDq25RjbnCP5SeEGdmCcp~Y2g18COiRuvjDORnH7ApdWdz7KDXsRQ1bbyEpYq4okO~9Pk1eCo-FULkPIsNs78Q__"
        },
    ]


  return (
    <section className='page-section'>

{/* 


        <div className='page-section__videoWrapper'>


            <div className='page-section__videoWrapper__text'>

                <h1>Kursimizni</h1>

                <h2>tamomlagan o’quvchilar</h2>

            </div>


            <div className='page-section__videoWrapper__wrap'>
                {
                    videoData?.map( (item, index) => {
                        return(
                            <VideoCardComponent elem={ {image: item , video: video ,} } key={index}/>
                        )
                    })
                }
            </div>


        </div> */}




        <div className='page-section__userDataCardWrapper'>
            
            <ContactFormComponent/>

        </div>




    </section>
  )
}
