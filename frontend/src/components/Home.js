import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className="container">
    <div className="jumbotron mt-5">
    <h1 className="display-4">Welcome to Blog Life!</h1>
    <p className="lead">We makes all kinds of awesome blogs on various topics.</p>
    <hr className="my-4" />
    <p>Click the button below to check out our awesome blogs.</p>
    <p className="lead">
      <Link className="btn btn-primary btn-lg" to='/blog' role="button">Check out our blog</Link>
    </p>
  </div>
  </div>
);

export default home;