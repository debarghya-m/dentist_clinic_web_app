import React, { useState, useEffect } from "react";
import "./nav.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
const Nav = () => {
  const logoRef = () => {
    window.location.href = "#";
  };
  const [isMobile, setIsMobile] = useState(false);
  const handleClick = () => {
    setIsMobile(!isMobile);
  };
  return (
    <section className="nav">
      <div className="nav-container">
        <h2 className="logo" onClick={logoRef}>
          <span className="logo-span">Dr.</span> Aakanksha Sharma
        </h2>
        <ul className="desktop-menu">
          <li className="desktop-menu-item">
            <a href="#doctors">Doctors</a>
          </li>
          <li className="desktop-menu-item">
            <a href="#about">About</a>
          </li>
          <li className="desktop-menu-item">
            <a href="#testimonials">Reviews</a>
          </li>
          <li className="desktop-menu-item">
            <a href="#footer">Address</a>
          </li>
        </ul>
        <a href="#" className="nav-btn" onClick={handleClick}>
          {isMobile === true ? (
            <RxCross1 className="nav-icon" />
          ) : (
            <AiOutlineMenu className="nav-icon" />
          )}
        </a>
      </div>

      <ul
        className={
          isMobile === true
            ? "desktop-menu-mobile mobile-mode"
            : "desktop-menu-mobile"
        }
      >
        <li className="desktop-menu-item" onClick={handleClick}>
          <a href="#doctors">Doctors</a>
        </li>
        <li className="desktop-menu-item" onClick={handleClick}>
          <a href="#about">About</a>
        </li>
        <li className="desktop-menu-item" onClick={handleClick}>
          <a href="#testimonials">Reviews</a>
        </li>
        <li className="desktop-menu-item" onClick={handleClick}>
          <a href="#footer">Address</a>
        </li>
      </ul>
    </section>
  );
};

export default Nav;
