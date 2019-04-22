import React from 'react';
import './NavbarB.css';

import "bootstrap/dist/css/bootstrap.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const NavbarB = () =>
    <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand><NavLink to='/users' className='navlink'>IAM</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="mr-auto" bg="dark">
                    <NavLink to='/users' className='navlink'>Users</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>;