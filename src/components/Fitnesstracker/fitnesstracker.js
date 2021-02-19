import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink
} from 'reactstrap';
import './fitnesstracker.css'
import fitnesstrackerone from '../../assets/fitnesstracker2.jpg'
import turnuptwo from '../../assets/turnup2.jpg'

const Fitnesstracker = (props) => {
  return (
    <div>
      <Card id="fitnessCard">
        <CardTitle id="fitnessTitle" tag="h3">FitnessTracker</CardTitle>
        <CardImg top src={fitnesstrackerone} alt="Card image cap" id="fitnessImage" />
        <CardBody>
          <CardTitle id="fitnessSummary" tag="h3">Summary</CardTitle>
          <CardText>TurnUp is a social hub that allows pop-up shop owners and customers alike to be able to signup and host their pop-ups, allow users to view the different pop-ups being hosted, and keep track of the number of people that plan to attend your event. </CardText>
          <CardTitle id="fitnessTech" tag="h3">Technologies</CardTitle>
          <CardText>Turnup was build using React.js for the client-side, Node.js and Express.js for server-side and backend, and MongoDB as the database layer. </CardText>
          <div className="row">
            <div className="col-6">
              <div>
                <CardTitle id="fitnessbuttonOne" tag="h5">Check out the Repo!</CardTitle>
                <CardLink id="fitnessGithubButton">Github</CardLink>
              </div>
            </div>
            <div className="col-6">
              <div>
                <CardTitle id="fitnessbuttonTwo" tag="h5">Check out the App!</CardTitle>
                <CardLink href="https://fintness-tracker12.herokuapp.com/" target="_blank" id="fitnessDeployedButton">FitnessTracker!</CardLink>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Fitnesstracker;