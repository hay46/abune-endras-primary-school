import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/image.png"; // adjust path
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [nav, setNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}

      <header className="div-nav">
        <div className="nav-nav">
          {/* Logo */}
          <img src={logo} alt="logo" className="img-nav" />

          {/* Nav Links */}
          <ul className={`ul-nav ${menuOpen ? "active" : ""}`}>
            <li
              onClick={() => setNav("Home")}
              className={nav === "Home" ? "underline" : ""}
            >
              <Link to="#">Home</Link>
            </li>
            <li
              onClick={() => setNav("Teacher")}
              className={nav === "Teacher" ? "underline" : ""}
            >
              <Link to="#">Teacher</Link>
            </li>
            <li
              onClick={() => setNav("Classes")}
              className={nav === "Classes" ? "underline" : ""}
            >
              <Link to="#">Classes</Link>
            </li>
            <li
              onClick={() => setNav("Portfolio")}
              className={nav === "Portfolio" ? "underline" : ""}
            >
              <Link to="#">Portfolio</Link>
            </li>
            <li
              onClick={() => setNav("Gallery")}
              className={nav === "Gallery" ? "underline" : ""}
            >
              <Link to="#">Gallery</Link>
            </li>
            <li
              onClick={() => setNav("Contact")}
              className={nav === "Contact" ? "underline" : ""}
            >
              <Link to="#">Contact</Link>
            </li>

            {/* Mobile Buttons */}
            <div className="mobile-buttons">
              <button className="butt">WhatsApp</button>
              <button className="login">Log In</button>
            </div>
          </ul>

          {/* Desktop Buttons */}
          <div className="nav-buttons">
            <button className="butt">WhatsApp</button>
            <button className="login">Log In</button>
          </div>

          {/* Hamburger Menu */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
