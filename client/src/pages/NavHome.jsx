import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand fw-bold text-primary" to="/" style={{ fontSize: '40px' }}>
  RuralReach
</Link>
        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/loan/investor">
                Become an Investor
              </Link>
            </li>
            <li className="nav-item">
            <a
                href="https://www.instagram.com/iam_sjeevan?igsh=YmxxODVsMWhuMzEz"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-reset"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Right Section - Login/Register */}
          <div className="d-flex">
            <Link to="/register" className="btn btn-outline-primary me-2">
              Register
            </Link>
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
