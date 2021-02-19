import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink
} from 'reactstrap';
import './googlebooks.css'
import googlebooksone from '../../assets/googlebooks1.jpg'
import turnuptwo from '../../assets/turnup2.jpg'

const Googlebooks = (props) => {
  return (
    <div>
      <Card id="googlebooksCard">
        <CardTitle id="googlebooksTitle" tag="h3">GoogleBooks</CardTitle>
        <CardImg top src={googlebooksone} alt="Card image cap" id="googlebooksImage" />
        <CardBody>
          <CardTitle id="googlebooksSummary" tag="h3">Summary</CardTitle>
          <CardText>TurnUp is a social hub that allows pop-up shop owners and customers alike to be able to signup and host their pop-ups, allow users to view the different pop-ups being hosted, and keep track of the number of people that plan to attend your event. </CardText>
          <CardTitle id="turnupTech" tag="h3">Technologies</CardTitle>
          <CardText>Turnup was build using React.js for the client-side, Node.js and Express.js for server-side and backend, and MongoDB as the database layer. </CardText>
          <div className="row">
            <div className="col-6">
              <div>
                <CardTitle id="googlebuttonOne" tag="h5">Check out the Repo!</CardTitle>
                <CardLink id="googleGithubButton">Github</CardLink>
              </div>
            </div>
            <div className="col-6">
              <div>
                <CardTitle id="googlebuttonTwo" tag="h5">Check out the App!</CardTitle>
                <CardLink href="https://google-books-search-12.herokuapp.com" target="_blank" id="googleDeployedButton">GoogleBooks!</CardLink>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Googlebooks;