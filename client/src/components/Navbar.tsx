import React from 'react';

const Navbar = () => {
  return (
    <nav>
      {/* ... other navigation items ... */}
      <a href="https://issuu.com/doylestowncardinal" target="_blank" rel="noopener noreferrer" className="hover:text-cardinal-red transition-colors">
        Past Articles
      </a>
      {/* ... other navigation items ... */}
    </nav>
  );
};

export default Navbar;