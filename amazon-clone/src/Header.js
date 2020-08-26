import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        ></img>
      </Link>
      <input type="text" className="header_searchInput" />
    </nav>
  );
}
// LOGO ON THE LEFT
// seacrh box
//3 links
//busket icon wih number

export default Header;
