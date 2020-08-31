import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const NavBar: React.FC<INavBarProps> = () => {
    return (
        <header className="my-5">
            <Nav className="border-bottom justify-content-between">
                <Nav.Item>
                    <NavLink exact to="/">Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/books">Books</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/login">Login</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/register">Register</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/admin">Admin</NavLink>
                </Nav.Item>
            </Nav>
        </header>    
    );
};

interface INavBarProps {};

export default NavBar;