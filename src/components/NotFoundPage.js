import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p className="page-not-found">
      Error 404! Page Not Found
    </p>

    <p className="go-home">
      <Link to="/" className="go-home-link">
      Go Back Home</Link>
    </p>
  </div>
);

export default NotFoundPage;