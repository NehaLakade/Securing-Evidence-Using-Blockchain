import React from 'react';
import { Link } from 'react-router-dom';
import App from './App';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="badge bg-light text-dark">Securing Evidence Using Blockchain</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Pathology Lab</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/policedashboard">Police Department</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/evilist">Report Generation</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
