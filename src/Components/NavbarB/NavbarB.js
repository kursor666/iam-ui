import React, {PureComponent} from 'react';

import "bootswatch/dist/lux/bootstrap.css";
import {Navbar, Nav, Container} from "react-bootstrap";

export class NavbarB extends PureComponent {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">IAM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="mr-auto" bg="dark">
                            <Nav.Link href="users/create">Create user</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}