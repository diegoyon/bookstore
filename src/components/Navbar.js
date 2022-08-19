import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import profile from '../images/profile.png';

const Navbar = () => (
  <>
    <div className="nav">
      <div className="links">
        <h1>Bookstore CMS</h1>
        <Link to="/bookstore">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
      </div>
      <img src={profile} alt="profile" />
    </div>
  </>
);

export default Navbar;
