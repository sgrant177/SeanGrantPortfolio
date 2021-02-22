import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./header.css"

const Header = (props) => {
  return (
    <div>
      <Jumbotron id="jumbotron" fluid>
        <Container id="myNameContainer" fluid>
          <h1 id="myName" className="display-3">Sean Valentino Grant</h1>
          <p id ="webDeveloper" className="lead">Web Developer</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;