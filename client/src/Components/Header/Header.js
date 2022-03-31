import React from 'react';
import './Header.scss';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {
    PATH_HOME,
    PATH_ABOUT,
} from "../../Route";

export default function Header() {
    const location = useLocation();
    return (
        <Navbar data-test="headerComponent" bg='primary' variant='dark' expand='lg' className="top-nav">
            <Container>
                <Navbar.Brand as='span'>
                    Todo List
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Nav className='justify-content-end' activeKey={location.pathname}>
                    <Link to={PATH_HOME}>
                        <Nav.Link as='span' href={PATH_HOME}>Todos</Nav.Link>
                    </Link>

                    <Link to={PATH_ABOUT}>
                        <Nav.Link as='span' href={PATH_ABOUT}>About</Nav.Link>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
