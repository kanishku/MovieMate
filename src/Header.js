// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>MovieMate</h1>
      </div>
      <nav className="navigation">
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/dropdown">Dropdown</a>
      </nav>
    </header>
  );
};

export default Header;
