import React from "react";
import "./Nav.css";
import "../index.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <header className="back">
        <div className="search">
          <Link className="logoSearch" to="">
            <img
              className="logoSearch"
              src="../../img/Logo/search.png"
              alt="search"
            />
          </Link>
        </div>

        <nav className="nav">
          <a href="/">
            <img
              src="../../img/Logo/trajet-work.png"
              alt="LOGO"
              className="logo"
            />
          </a>

          <div className="H1">
            <h1>Trajet Work</h1>
          </div>
        </nav>

        <div className="nav__link">
          <Link to="/">Info</Link>
          <Link to="/trouver-un-covoiturage">Trouver un covoiturage</Link>
          <Link to="/proposer-un-covoiturage">Proposer un covoiturage</Link>
          <Link to="/chat">chat</Link>
          <Link to="/mon-compte">mon compte</Link>
        </div>
      </header>
    </>
  );
}

export default Nav;
