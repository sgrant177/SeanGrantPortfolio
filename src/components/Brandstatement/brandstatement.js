import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './brandstatement.css'

const Brandstatement = (props) => {
  return (
    <div>
      <Card id="brandCard">
        <CardBody>
          <CardTitle tag="h3">About Me</CardTitle>
          <CardText>Full Stack Web Developer with a work history in manufacturing and supervising. Hardworking, analytical problem-solver with conscientious approach to tackling operations issues. Decisive leader and collaborative team-builder with solid time management and multitasking abilities. </CardText>
        </CardBody>
        <CardBody>
          <CardTitle tag="h3">Technologies</CardTitle>
          <div className="row">
            <div className="col-3">
              <CardText><p>HTML5</p></CardText>
              <CardText><p>CSS3</p></CardText>
              <CardText><p>Command Line</p></CardText>
            </div>
            <div className="col-3">
              <CardText><p>JavaScript</p></CardText>
              <CardText><p>jQuery</p></CardText>
              <CardText><p>Bootstrap</p></CardText>
            </div>
            <div className="col-3">
              <CardText><p>Node.js</p></CardText>
              <CardText><p>React.js</p></CardText>
              <CardText><p>Express.js</p></CardText>
            </div>
            <div className="col-3">
              <CardText><p>MongoDB</p></CardText>
              <CardText><p>MySQL</p></CardText>
              <CardText><p>Database Theory</p></CardText>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Brandstatement;