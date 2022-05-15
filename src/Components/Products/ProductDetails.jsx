import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Productgallery from './Productgallery'
import ProductText from './ProductText';

const ProductDetails = () => {
  return (
    <>
    <div>
        <Row className='py-3'>
            <Col lg='4'>
                <Productgallery />
            </Col>
            <Col lg='8'>
              <ProductText />
            </Col>
        </Row>
    </div>
    </>
  )
}

export default ProductDetails