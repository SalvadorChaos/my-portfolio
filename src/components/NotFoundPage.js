import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>
      Error 404! Page Not Found - <Link to="/">
      Go Back Home</Link>
    </p>
  </div>
);

export default NotFoundPage;