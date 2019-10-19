import React from 'react';
import Profilepic from '../images/profilepic.jpg';
import {Helmet} from 'react-helmet';

const HomePage = () => (
  <div>
    <Helmet>
      <title>Sal J's Portfolio</title>
      <meta
        name="description"
        content="Portfolio of, Freelance Web Developer, Salvador Martinez Jr."
      />
    </Helmet>
    <div className="intro">
      <div className="profile-pic">
        <img src={Profilepic} alt="profile-pic" className="me" />
      </div>

      <div className="welcome-titles">
        <h1 className="welcome">Welcome!</h1>
        <p>This is my site. Take a look around!</p>
      </div>
    </div>

    <div className="skills">
      <h2>My Skills</h2>

      <div className="front-end">
        <h3>Front End</h3>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Webpack</li>
          <li>React</li>
          <li>Redux</li>
      </div>

      <div className="back-end">
        <h3>Back End</h3>
        <li>Node</li>
        <li>Express</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Authentication</li>
      </div>
    </div>
  </div>
);

export default HomePage;