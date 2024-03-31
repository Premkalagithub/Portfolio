// Error404.jsx

import React from 'react';
import {Link} from 'react-router-dom'
import './Error404.css'; 

const Error404 = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link to={'/'}>Go back to homepage</Link>
    </div>
  );
};

export default Error404;
