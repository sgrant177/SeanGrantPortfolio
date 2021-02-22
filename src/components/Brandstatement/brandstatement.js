import React from 'react';
import './brandstatement.css'

const Brandstatement = (props) => {
  return (
    <div id="brandStatement" className="container">
      <div className="row">
        <div className="col-12">
          <h3>About Me</h3>
          <p>Full Stack Web Developer with a work history in manufacturing and supervising. Hardworking, analytical problem-solver with conscientious approach to tackling operations issues. Decisive leader and collaborative team-builder with solid time management and multitasking abilities.</p>
        </div>
        <div />
        <div className="row">
          <h3>Technologies</h3>
          <div className="col-12">
            <p>HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express JS, React JS, Progressive Web Apps, Node JS, Database Theory, MongoDB, Mongoose, MySQL, Sequelize, Command Line, and Git.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brandstatement;