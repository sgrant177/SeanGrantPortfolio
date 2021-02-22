import './portrait.css'
import React from 'react';
import { Card } from 'reactstrap';
import portrait from '../../assets/portrait.jpg'
const Portrait = (props) => {
  return (
    <div>
      <Card>
        <img id="myPortrait" alt="..." src={portrait}></img>
      </Card>
    </div>
  );
};

export default Portrait;
