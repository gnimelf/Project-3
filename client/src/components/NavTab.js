import React from "react";
import { Link } from 'react-router-dom';

import Auth from '../../src/utils/Auth';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTab({ currentPage, handlePageChange }) {
  // const location = useLocation();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const onLoginClick = (e) =>{
    e.prevendtDefault()
    this.props.logout()
  }

  const onLogOutClick = (e) => {
    e.preventDefault()
    this.props.login()
  }

  return (
    <ul className="nav nav-tabs .current-menu-item a ">
      <li className="nav-item">
        <a href =  "/"
          className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
        >
          <button className="btn btn-primary border border-5" type="submit">Home</button>
        </a>
      </li>
      <li className="nav-item">
        <a href = "/review"
          className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
        >
          <button className="btn btn-primary border border-5" type="submit">Review</button>
        </a>
      </li>
      <li className="SignUp">
        <a href = '/signup'
          className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
        >
          <button class="btn btn-primary border border-5" type="submit">SignUp</button>
        </a>
      </li>
      {/* {Auth.loggedIn() ? ( */}
        <>
      <li className="LogIn">
        <a href = '/login'
          className={({isActive}) => isActive? "nav-link active" : "nav-link"}
        >
          <button className="btn btn-primary border border-5" type="submit">LogIn</button>
        </a>
      </li>
      </>
      {/* // ) : ( */}
        <>
      <li className="LogOut">
        <a href = '/logout'>
          <button className="btn btn-primary border border-5" type= "submit" onClick={logout}>LogOut</button>
        </a>
      </li>
      </>
      {/* )} */}
    </ul>

  );
}

export default NavTab;
