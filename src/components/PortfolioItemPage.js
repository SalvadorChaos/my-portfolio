import React from 'react';
//import Expensify from '../../public/images/Expensify.png';

const PortfolioItem = (props) => (
  <div className="portfolio-item-container">
    <h1>This is my {props.match.params.id} App</h1>
    <img src={props.match.params.id} />
  </div>
);

export default PortfolioItem;