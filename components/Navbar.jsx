import React from 'react';

const Navbar = ({message}) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <ul className="flex space-x-4">
        <li>
            <a>Home</a>
        </li>
        <li>
            <a>About</a>
        </li>
        <li>
            <a>Related Work</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;