import logo from "../assets/logo.svg";
import "../styles/header.css";

import React from "react";

 function Header({name,city, status}) {
  // console.log("props: ", name, city, status);
  
  return (
    <header className="header-header">
      <img src={logo} className="header-logo" alt="logo" />
      <p>
       name : {name} ;
       city : {city};
       status : {status}
      </p>
      <a
        className="header-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Header