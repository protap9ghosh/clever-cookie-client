import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Clever Cookie</Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto me-2 my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Blog</Nav.Link>
                            <Nav.Link href="#">Link</Nav.Link>
                        </Nav>
                        <img className='rounded-circle' style={{ width: 50, height: 50 }} src="https://rb.gy/izb1j" alt="" />
                        <Button className='ms-3' variant="outline-success">LogIn</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;