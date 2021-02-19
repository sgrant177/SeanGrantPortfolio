import "./footer.css"
import React, { useState } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Footer = (props) => {
    return (
        <div>
            <Navbar id="footerNav">
                <Nav >
                    <NavItem>
                        <NavLink id="aboutMe" href="">Github</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink id="aboutMe" href="">LinkedIn</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink id="aboutMe" href="">Resume</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink id="aboutMe" href="">Email</NavLink>
                    </NavItem>
                </Nav>          
            </Navbar>
        </div>
    );
}

export default Footer;