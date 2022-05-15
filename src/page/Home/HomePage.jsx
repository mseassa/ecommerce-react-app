import React from 'react'
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import HomeCategory from '../../Components/Home/HomeCategory';
import Slider from '../../Components/Home/Slider';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import Discountsection from './../../Components/Home/Discountsection';

const HomePage = () => {
  return (
    <>
    <div className='font' style={{minHeight: '670px'}}>
    
    <Slider />
    <HomeCategory />
    <CardProductsContainer title='الاكثر مبيعا' btntitle='المزيد' pathText='/products'/>
    <Discountsection />
    <CardProductsContainer title='احدث الازياء' btntitle='المزيد' pathText='/products'/>
    <BrandFeatured title='أشهر الماركات' btntitle='المزيد'/>
    
    </div>
    </>
  )
}

export default HomePage
