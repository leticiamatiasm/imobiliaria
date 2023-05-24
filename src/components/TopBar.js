import React from 'react';
import Home from '../screens/Home';
import Login from '../screens/Login';

import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

function NavigationBar() {
    return (<>
        <BrowserRouter>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" as={Link} to="/">Nome da empresa</Navbar.Brand>
                    <Nav className="me-auto" style={{ position: 'absolute', top: '50%', right: '15%', transform: 'translateY(-50%)' }}>
                        <Nav.Link href="#pricing" as={Link} to="/Login">Fazer login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" exact={true} element={<Home />}> </Route>
                <Route path="/Login" element={<Login />}> </Route>
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default NavigationBar;