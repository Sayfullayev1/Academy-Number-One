import './homePage.css'


import PageMainComponent from '../../../components/homePageBigComponents/page-mainComponent/Page-mainComponent'
import PageArticleComponent from '../../../components/homePageBigComponents/page-articleComponent/Page-articleComponent'
import PageSectionComponent from '../../../components/homePageBigComponents/page-sectionComponent/page-sectionComponent'





export default function HomePage() {
  
  return (
    <div className='homePage'>
      

      <PageMainComponent/>


      <div className='homePage__contentWrapper'>

        <PageArticleComponent/>

        <PageSectionComponent/>

      </div>

    </div>
  )
}
