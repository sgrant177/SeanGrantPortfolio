import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardLink
} from 'reactstrap';
import './googlebooks.css'
import googlebooksone from '../../assets/googlebooks1.jpg'


function Googlebooks() {
  return (
    <div>
      <Card id="googlebooksCard">
        <CardTitle id="googlebooksTitle" tag="h3">GoogleBooks</CardTitle>
        <CardImg top src={googlebooksone} alt="Card image cap" id="googlebooksImage" />
        <CardBody>
          <CardTitle id="googlebooksSummary" tag="h3">Summary</CardTitle>
          <CardText>An application created using the MERN stack and allows users to search for books via the Google Books API. Search results are dynamically rendered in the UI and users have the option to save and/or delete books. </CardText>
          <CardTitle id="turnupTech" tag="h3">Technologies</CardTitle>
          <CardText>GoogleBooks was built using React JS, MongoDB, Mongoose, Express JS, Node JS, and Axios. </CardText>
          <div className="row">
            <div className="col-6">
              <div>
                <CardTitle id="googlebuttonOne" tag="h5">Check out the Repo!</CardTitle>
                <CardLink id="googleGithubButton" href="https://github.com/sgrant177/GoogleBooksSearch" target="_blank">Github</CardLink>
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