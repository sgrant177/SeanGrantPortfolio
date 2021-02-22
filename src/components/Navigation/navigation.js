import "./navigation.css"
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar id="topNav" dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink id="aboutMe" href="#myInfo">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="aboutMe" href="#projects">Projects</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle id="contactInfo" nav caret>
                Contact Info
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                 <NavLink id="github" href="https://github.com/sgrant177" target="_blank">Github</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink id="linkedin" href="https://www.linkedin.com/in/sean-grant-1706a01b9/" target="_blank">LinkedIn</NavLink>
                </DropdownItem>
                <DropdownItem>
                 <NavLink id="resume" href="https://onedrive.live.com/view.aspx?resid=3A884DC9DEECA460!29357&ithint=file%2cdocx&authkey=!ADKsRndxF-PA_xc" target="_blank">Resume</NavLink>
                </DropdownItem>
                <DropdownItem>
                 <NavLink id="email">Email: sgrant177@yahoo.com</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;