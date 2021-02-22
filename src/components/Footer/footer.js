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
                        <NavLink href="https://github.com/sgrant177" target="_blank">Github</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.linkedin.com/in/sean-grant-1706a01b9/" target="_blank">LinkedIn</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://onedrive.live.com/view.aspx?resid=3A884DC9DEECA460!29357&ithint=file%2cdocx&authkey=!ADKsRndxF-PA_xc" target="_blank">Resume</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Email: sgrant177@yahoo.com</NavLink>
                    </NavItem>
                </Nav>          
            </Navbar>
        </div>
    );
}

export default Footer;