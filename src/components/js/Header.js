import React from 'react';
import '../sass/Header'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      <div className="links">
        <ul>
        { props.currentuser ?
          <> 
          <li><Link to={'/projects'}>Project Silo</Link></li>
          <li><Link to={'/projects/new'}>+</Link></li>
          <li><a href="/logout" onClick={ props.logout }>Log Out</a></li>
          </>
        :
          <>
          <li><Link to={'/login'}>Login</Link></li>
          </>
        }
        </ul>
      </div>
    </header>
  );
}

export default Header;