import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTab({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs .current-menu-item a ">
      <li className="nav-item">
        <a
          href="#Home"
          onClick={() => handlePageChange("Home")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Review"
          onClick={() => handlePageChange("Review")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Review" ? "nav-link active" : "nav-link"}
        >
          Review
        </a>
      </li>
      <li className="SignUp">
        <a
          href="#SignUp"
          onClick={() => handlePageChange("SignUp")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "SignUp" ? "nav-link active" : "nav-link"}
        >
          SignUp
        </a>
      </li>
      <li className="LogIn">
        <a
          href="#LogIn"
          onClick={() => handlePageChange("LogIn")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "SignUp" ? "nav-link active" : "nav-link"}
        >
          LogIn
        </a>
      </li>
    </ul>
  );
}

export default NavTab;
