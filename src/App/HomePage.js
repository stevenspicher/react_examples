import React from 'react';
import {Container, Row, Col, Stack, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link} from 'react-router-dom'

function HomePage() {
    return (
        <Container>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <NavDropdown title="Pages" id="collasible-nav-dropdown">
                        <NavDropdown.Item ><Link to="/">HomePage</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/examples">Examples</Link></NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Row >
                <Col className="mt-3 bg-light border text-center" xs={{ offset: 2, span: 8 }} ><h1>Page Title</h1></Col>
            </Row>
            <Row xs={6}>
                <Col className="d-none d-lg-block" xs={2} >
                <Stack gap={1}>
                    <div className="bg-light border">First item</div>
                    <div className="bg-light border">Second item</div>
                    <div className="bg-light border">Third item</div>
                </Stack>
                </Col>
                <Col className="m-3 bg-light border" lg={{ offset: 2, span: 8 }} xs={12}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Col>
            </Row>
            <Row>
                <Col md={"d-bg.primary"}lg={{ offset: 8, span: 4 }} xs={4} >
                <Stack direction="horizontal" gap={3}>
                    <div className="bg-light border">First item</div>
                    <div className="bg-light border">Second item</div>
                    <div className="bg-light border">Third item</div>
                </Stack></Col>
            </Row>
            <Row>
                <Col xs={{span:4, offset:4}}>
                    <Stack direction="horizontal">

                    </Stack>
                </Col>
            </Row>
                
        </Container>
    )

   
}

export default HomePage
