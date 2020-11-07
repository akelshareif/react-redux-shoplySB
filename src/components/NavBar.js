import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={Link} to="/">
                    Shoply
                </NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link to="/cart">Cart</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

export default NavBar;
