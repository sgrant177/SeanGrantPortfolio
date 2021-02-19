import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink
} from 'reactstrap';
import './budgettracker.css'
import budgettrackerone from '../../assets/budgettracker1.jpg'
import turnuptwo from '../../assets/turnup2.jpg'

const Budgettracker = (props) => {
  return (
    <div>
      <Card id="budgetCard">
        <CardTitle id="budgetTitle" tag="h3">BudgetTracker</CardTitle>
        <CardImg top src={budgettrackerone} alt="Card image cap" id="budgetImage" />
        <CardBody>
          <CardTitle id="budgetSummary" tag="h3">Summary</CardTitle>
          <CardText>TurnUp is a social hub that allows pop-up shop owners and customers alike to be able to signup and host their pop-ups, allow users to view the different pop-ups being hosted, and keep track of the number of people that plan to attend your event. </CardText>
          <CardTitle id="budgetTech" tag="h3">Technologies</CardTitle>
          <CardText>Turnup was build using React.js for the client-side, Node.js and Express.js for server-side and backend, and MongoDB as the database layer. </CardText>
          <div className="row">
            <div className="col-6">
              <div>
                <CardTitle id="budgetbuttonOne" tag="h5">Check out the Repo!</CardTitle>
                <CardLink id="budgetGithubButton">Github</CardLink>
              </div>
            </div>
            <div className="col-6">
              <div>
                <CardTitle id="budgetbuttonTwo" tag="h5">Check out the App!</CardTitle>
                <CardLink href="https://budget-tracker-12.herokuapp.com/" target="_blank" id="budgetDeployedButton">BudgetTracker!</CardLink>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Budgettracker;