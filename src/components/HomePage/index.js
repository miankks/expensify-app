import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Index extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Home page</h1>
        </div>
        <div className="col-container">
          <div className="col lightblue-background">
            <Link className="icon__title" to="/dashboard">
              <h3>Expensify</h3>
            </Link>
          </div>
          <div className="col lightgrey-background">
            <Link className="icon__title" to="/newhooks">
              <h3>New Hooks</h3>
            </Link>
          </div>
          <div className="col lightblue-background">
            <Link className="icon__title" to="/bootstrapheader">
              <h3>Bootstrap</h3>
            </Link>
          </div>
        </div>
        <div className="col-container">
          <div className="col lightblue-background">
            <Link className="icon__title" to="/synchronousexample">
              <h3>Synchronous Calls</h3>
            </Link>
          </div>
          <div className="col lightgrey-background">
            <Link className="icon__title" to="/promises">
              <h3>Promises</h3>
            </Link>
          </div>
          <div className="col lightblue-background">
            <Link className="icon__title" to="/asyncawait">
              <h3>Async await</h3>
            </Link>
          </div>
        </div>
        <div className="col-container">
          <div className="col lightblue-background">
            <Link className="icon__title" to="/weatherapp">
              <h3>Weather App</h3>
            </Link>
          </div>
          <div className="col lightgrey-background invisible-divs"></div>
          <div className="col lightblue-background invisible-divs"></div>
        </div>
      </div>
    );
  }
}

// <Link className="icon__title" to="/dashboard">
// <h3>Expensify</h3>
// </Link>
