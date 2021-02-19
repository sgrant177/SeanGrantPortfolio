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
              <NavLink id="aboutMe" href="">About Me</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle id="projects" nav caret>
                Projects
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem id="project1"> 
                  Project 1
                </DropdownItem>
                <DropdownItem id="project2">
                  Project 2
                </DropdownItem>
                <DropdownItem id="project3">
                  Project 3
                </DropdownItem>
                <DropdownItem id="project4">
                  Project 4
                </DropdownItem>                
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle id="contactInfo" nav caret>
                Contact Info
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                 <NavLink id="github" href="">Github</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink id="linkedin" href="">LinkedIn</NavLink>
                </DropdownItem>
                <DropdownItem>
                 <NavLink id="resume" href="">Resume</NavLink>
                </DropdownItem>
                <DropdownItem>
                 <NavLink id="email" href="">Email</NavLink>
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