import "./footer.css"
import React from 'react';
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
                        <NavLink href="https://drive.google.com/file/d/1CM1ydiBarm4d0mqx-ia95niLmR9_-dSa/view?usp=sharing" target="_blank">Resume</NavLink>
                    </NavItem>
                    
                </Nav>          
            </Navbar>
        </div>
    );
}

export default Footer;