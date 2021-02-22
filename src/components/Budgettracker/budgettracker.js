import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardLink
} from 'reactstrap';
import './budgettracker.css'
import budgettrackerone from '../../assets/budgettracker1.jpg'


const Budgettracker = (props) => {
  return (
    <div>
      <Card id="budgetCard">
        <CardTitle id="budgetTitle" tag="h3">BudgetTracker</CardTitle>
        <CardImg top src={budgettrackerone} alt="Card image cap" id="budgetImage" />
        <CardBody>
          <CardTitle id="budgetSummary" tag="h3">Summary</CardTitle>
          <CardText>The Budget Tracker is a progressive web application that will allow the user to track their budget by adding expenses and deposits to their budget. They are able to add or subtrac with or without internet connection. If they are using it offline, the transactions are stored in the indexedDB and then transferrd to the databse when the user is back online. </CardText>
          <CardTitle id="budgetTech" tag="h3">Technologies</CardTitle>
          <CardText> Budget Tracker was built with HTML, CSS, Bootstrap, JavaScript, Node JS, Express JS, MongoDB, and Mongoose. </CardText>
          <div className="row">
            <div className="col-6">
              <div>
                <CardTitle id="budgetbuttonOne" tag="h5">Check out the Repo!</CardTitle>
                <CardLink id="budgetGithubButton" href="https://github.com/sgrant177/BudgetTracker" target="_blank">Github</CardLink>
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