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
          <CardText>Track your workouts with Fitness Tracker. The app will keep track of every exercise in your workout. The app dashboard will display weekly summary graphs of all workouts done in a week. </CardText>
          <CardTitle id="fitnessTech" tag="h3">Technologies</CardTitle>
          <CardText>Fitness Tracker is built with html, css, javascript, bootstrap, node, eppress, and mongo. </CardText>
          <div className="row">
            <div className="col-6">
              <div>
                <CardTitle id="fitnessbuttonOne" tag="h5">Check out the Repo!</CardTitle>
                <CardLink id="fitnessGithubButton" href="https://github.com/sgrant177/FitnessTracker" target="_blank">Github</CardLink>
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