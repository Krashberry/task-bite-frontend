import React from 'react';
import { Link } from 'react-router-dom'

const SideBar = (props) => {
  return (
    <div className="navigation">
      <ul>
      { props.currentUser ?
        <> 
          <ul>
            <a href="/logout" onClick={ props.logout }>
              Log Out
            </a>
          </ul>
        </>
      :
        <>
          <ul>
            <li>
              <Link to={'/'}>
                Home
              </Link>
            </li>
            <li>
              <Link to={'/login'}>
                Login
              </Link>
            </li>
            <li>
              <Link to={'/register'}>
                Register
              </Link>
            </li>
          </ul>
        </>
      }
      </ul>
    </div>
  );
}

export default SideBar;