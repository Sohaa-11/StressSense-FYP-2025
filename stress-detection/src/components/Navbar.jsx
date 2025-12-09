import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🧠 Stress Sense</div>

      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-route">
            Home
          </Link>
        </li>
        <li>
          <Link to="/working" className="nav-route">
            How it Works
          </Link>
        </li>
        <li>
          {/* Updated link to point to Stress Detection page */}
          <Link to="/stress" className="nav-route">
            Upload
          </Link>
        </li>
        <li>
          <Link to="/result" className="nav-route">
            Results
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
