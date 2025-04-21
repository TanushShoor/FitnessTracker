import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
      <nav className='navigation'>
        <Link to="/" className='site-title'>
        <img src="/pngtree-athlete-running-logo-png-image_15872672.png" alt="" />
        FitTrack
        </Link>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/addworkout">Add Workout</Link></li>
        </ul>
      </nav>
  );
}

export default Header;
