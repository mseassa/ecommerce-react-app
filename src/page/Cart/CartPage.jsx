import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartCheckout from '../../Components/Cart/CartCheckout'
import CartItem from '../../Components/Cart/CartItem'

const CartPage = () => {
  return (
    <>
    <Container>
        <Row>
            <div className="cart-title">عربة التسوق</div>
        </Row>
        <Row className=' justify-content-center'>
            <Col xs='12' md='9'>
                <CartItem />
                <CartItem />
            </Col>

            <Col xs='6' md='3'>
                <CartCheckout />
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default CartPage