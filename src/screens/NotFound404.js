import React from 'react';
import {Link} from 'react-router-dom';

import '../css/NotFound404.css';

const NotFound404 = () => {
  return (
    <div className="container-404">
      <div className="h-404">404</div>
      <div className="p-404">Oops! Something went wrong.</div>
      <div className="linkdiv-404">
        <Link to="/" className="link-404">
          Go back to Initial page.
        </Link>
      </div>
    </div>
  );
};

export default NotFound404;
