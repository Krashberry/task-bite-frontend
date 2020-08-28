import React from 'react';
import { Link } from 'react-router-dom'
import '../sass/SideBar.scss'

const SideBar = (props) => {
  return (
    <div class="navigation">
      <div className="links">
        <ul>
        { props.currentuser ?
          <> 
            <li>
              <Link to={'/projects'}>Project Silo</Link>
              </li>
            <li>
              <a href="/" onClick={ props.project.new }> + </a>
            </li>
            <li>
              <a href="/" onClick={ props.project.delete }> - </a>
            </li>
            <li>
              <a href="/logout" onClick={ props.logout }>Log Out</a>
            </li>
          </>
        :
          <>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/login'}>Login</Link>
            </li>
            <li>
              <Link to={'/register'}>Register</Link>
            </li>
          </>
        }
        </ul>
      </div>
    </div>
  );
}

export default SideBar;