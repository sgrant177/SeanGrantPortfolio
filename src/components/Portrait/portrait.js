import './portrait.css'
import React from 'react';
import { Card } from 'reactstrap';
import portrait from '../../assets/portrait.jpg'
function Portrait() {
  return (
    <div>
      <Card>
        <img id="myPortrait" alt="..." src={portrait}></img>
      </Card>
    </div>
  );
};

export default Portrait;
