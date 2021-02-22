import React from "react";
import Navigation from "./components/Navigation/navigation.js";
import Header from "./components/Header/header.js"

import './App.css';
import Portrait from "./components/Portrait/portrait.js";
import Brandstatement from "./components/Brandstatement/brandstatement.js";
import Turnup from "./components/Turnup/turnup.js";
import Googlebooks from "./components/Googlebooks/googlebooks.js";
import Fitnesstracker from "./components/Fitnesstracker/fitnesstracker.js";
import Budgettracker from "./components/Budgettracker/budgettracker.js";
import Footer from "./components/Footer/footer.js";





function App() {
  return (
    <div id="body">
      <div id="navDiv">
        <Navigation />
      </div>
      <div id="headerDiv">
        <Header />
      </div>
      <div id="myInfo" className="row">
        <div id="portrait" className="col-4">
          <Portrait />
        </div>
        <div id="brandStatement" className="col-7">
          <Brandstatement />
        </div>
      </div>
      <div id="projects">
        <div className="row">
          <div id="turnup" className="col-lg-6 col-md-12">
            <Turnup />
          </div>
          <div id="googlebooks" className="col-lg-6 col-md-12">
            <Googlebooks/>
          </div>
        </div>
        <div className="row">
          <div id="fitnesstracker" className="col-lg-6 col-md-12">
            <Fitnesstracker/>
          </div>
          <div id="budgettracker" className="col-lg-6 col-md-12">
            <Budgettracker/>
          </div>
        </div>
      </div>
      <div id="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
