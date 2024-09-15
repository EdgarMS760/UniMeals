import React from 'react';
import { Link } from 'react-router-dom';

const TopNavbar = ({ children, logo }) => {
  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full flex items-center justify-between p-4 z-20">
      <div className="flex items-center">
        <Link to="/inicio">
        <img src={logo} alt="Logo" className="w-12 h-12 object-cover" />
        </Link>
        
      </div>

      <div className="flex-grow text-center">
        {children}
      </div>

      <div className="flex items-center">
        <Link to="/profile">
          <i className='pi pi-user' style={{ fontSize: '2rem' }}></i>
        </Link>
      </div>
    </nav>
  );
};

export default TopNavbar;
