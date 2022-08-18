import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <>
    <div className="nav">
      <div className="links">
        <h1>Bookstore CMS</h1>
        <Link to="/">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
      </div>
      <p>profile</p>
    </div>
  </>
);

export default Navbar;
