import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  mb-4">
      <div className="container navContent">
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          <img className={styles.img} src="Rick_and_Morty.svg" />
        </Link>
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          <img
            className={styles.imgB}
            src="Bouslogo-color.svg"
            alt="LogoBous"
          />
        </Link>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars open text-dark"></span>
          <span className="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link">
              Personajes
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episodios
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/location"
            >
              Localización
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
