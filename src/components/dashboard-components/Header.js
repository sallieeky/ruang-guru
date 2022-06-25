import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={require("../../assets/images/login_logo.png")}
              width={50}
            />
          </Link>
          <Link className="nav-link" to="/login">
            Logout
          </Link>

          {/* <div
            className="collapse navbar-collapse d-flex bg-dark justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Header;
