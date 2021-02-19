import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./header.css"

const Header = (props) => {
  return (
    <div>
      <Jumbotron id="jumbotron" fluid>
        <Container id="myName"  fluid>
          <h1 className="display-3">Sean Valentino Grant</h1>
          <p className="lead">Web Developer</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;