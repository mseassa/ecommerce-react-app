import React from 'react'
import { Container, FormControl, Nav, Navbar } from 'react-bootstrap'
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import cart from '../../images/cart.png'
import { Link } from 'react-router-dom'

const NavbarLogIn = () => {
  return (
    <>
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <img src={logo} className='logo' alt='logo'/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        type="search"
                        placeholder="ابحث..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">
                        <Nav.Link
                            className="nav-text d-flex mt-3 justify-content-center">
                                <Link className='d-flex text-decoration-none' to='/login'>
                            <img src={login} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>دخول</p>
                            </Link>
                        </Nav.Link>
                        <Nav.Link
                            className="nav-text d-flex mt-3 justify-content-center"
                            style={{ color: "white" }}>
                                <Link className='d-flex text-decoration-none' to='/cart'>
                            <img src={cart} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>العربه</p>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavbarLogIn