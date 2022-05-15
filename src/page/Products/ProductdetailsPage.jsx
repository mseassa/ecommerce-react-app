import React from 'react'
import { Container } from 'react-bootstrap';
import ProductDetails from '../../Components/Products/ProductDetails';
import RateContainer from '../../Components/Rate/RateContainer';
import CategoryHeader from './../../Components/Category/CategoryHeader';
import CardProductsContainer from './../../Components/Products/CardProductsContainer';

const ProductdetailsPage = () => {
  return (
    <div>
        <CategoryHeader />
        <Container>
            <ProductDetails />
            <RateContainer />
            <CardProductsContainer title='منتجات قد تعجبك'/>
        </Container>
    </div>
  )
}

export default ProductdetailsPage