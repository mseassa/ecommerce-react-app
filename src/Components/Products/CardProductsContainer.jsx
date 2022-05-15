import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import SubTitle from './../Utility/SubTitle';

const CardProductsContainer = ({title, btntitle, pathText}) => {
  return (
    <>
    <Container className=''>
    <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
        <Row className='my-2 d-flex justify-content-between'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Row>
    </Container>
    </>
  )
}

export default CardProductsContainer