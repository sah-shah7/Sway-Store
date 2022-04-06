import React from "react";
import "./NavBar.css";
import '../Badges/Badges.css'

const NavBar = () => {
  const navBarTitle = "SwayStore";
  return (
    <nav className="nav-container">
      <div className="nav-bar-left">
        <ul className="nav-bar-list">
          <li className="nav-bar-title-text">
            <a className="link-a link-a-font-color-black" href="./index.html">
              {navBarTitle}
            </a>
          </li>
          <li className="nav-bar-list-items nav-bar-list-items-text">
            <a className="link-a link-a-font-color-black" href="./index.html">
              Home
            </a>
          </li>
          <li className="nav-bar-list-items nav-bar-list-items-text">
            <a
              className="link-a link-a-font-color-black"
              href="../../pages/getting-started.html"
            >
              Buy Now
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-bar-right">
        <ul className="nav-bar-list">
          <li className="nav-bar-list-items nav-bar-list-items-text">
            <a
              className="link-a link-a-font-color-black"
              href="../../index.html"
            >
              {" "}
              <button type="button" className="badge-typ-1">
                {" "}
                <span className="fa-solid fa-heart f-s-lg"></span>{" "}
                <span className="badge-count typ-bg-red">9+</span>{" "}
              </button>
            </a>
          </li>
          <li className="nav-bar-list-items nav-bar-list-items-text">
            <a
              className="link-a link-a-font-color-black"
              href="../../pages/getting-started.html"
            >
              Login
            </a>
          </li>
          <li className="nav-bar-list-items nav-bar-list-items-text">
            <a
              className="link-a link-a-font-color-black"
              href="https://github.com/sah-shah7/Sway-UI"
            >
              <button className="badge-typ-1">
                <span className="fas fa-shopping-cart f-s-lg"></span>
                <span className="badge-count typ-bg-yw">9+</span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
