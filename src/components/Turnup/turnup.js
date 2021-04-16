import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardLink
} from 'reactstrap';
import './turnup.css'
import turnupone from '../../assets/turnup1.jpg'


function Turnup() {
  return (
    <div>
      <Card id="turnupCard">
        <CardTitle id="turnupTitle" tag="h3">TurnUp</CardTitle>
        <CardImg top src={turnupone} alt="Card image cap" id="turnupImage" />
        <CardBody>
          <CardTitle id="turnupSummary" tag="h3">Summary</CardTitle>
          <CardText>TurnUp is a social hub that allows pop-up shop owners and customers alike to be able to signup and host their pop-ups, allow users to view the different pop-ups being hosted, and keep track of the number of people that plan to attend your event. </CardText>
          <CardTitle id="turnupTech" tag="h3">Technologies</CardTitle>
          <CardText>Turnup was built using React JS, MongoDB, Mongoose, Express JS, Node JS, and Axios. </CardText>
          <div className="row">
            <div className="col-6">
              <div>
                <CardTitle id="buttonOne" tag="h5">Check out the Repo!</CardTitle>
                <CardLink id="githubButton" href="https://github.com/sgrant177/TurnUp" target="_blank">Github</CardLink>
              </div>
            </div>
            <div className="col-6">
              <div>
                <CardTitle id="buttonTwo" tag="h5">Check out the App!</CardTitle>
                <CardLink href="https://turnup-12.herokuapp.com/" target="_blank" id="deployedButton">TurnUp!</CardLink>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Turnup;