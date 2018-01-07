import React from 'react';
import {NavLink} from 'react-router-dom';


const NotFound = () => {
  return (<div>
          <h4>Page Not Found</h4>
          <p>
            <NavLink exact activeClassName="active" to='/login' >Click to Login Page</NavLink>
          </p>
        </div>)
}

export default NotFound;
