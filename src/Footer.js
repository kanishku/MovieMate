// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Movie Search App</p>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOK5TJxN5NaxqnAn4C-hlGapyhyC966vN68XrCF5vfzw&s" alt="Facebook Icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt="Twitter Icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9Q63UofGiKYxXueuIekFkMCWf50PPkV4Y8AHAxk6hQ&s" alt="Instagram Icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
