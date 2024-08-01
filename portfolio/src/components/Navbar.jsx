import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img width="50px" src="https://malistmind.vercel.app/assets/img/logo/ICON2.png" alt="Logo" />
        O Flaviano
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home" className={isScrolled ? 'scrolled-link' : ''}>Home</a></li>
        <li><a href="#about" className={isScrolled ? 'scrolled-link' : ''}>Sobre</a></li>
        <li><a href="#services" className={isScrolled ? 'scrolled-link' : ''}>Portfólio</a></li>
        <li><a href="#contact" className={isScrolled ? 'scrolled-link' : ''}>Contatos</a></li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>      
    </nav>

  );
};

export default Navbar;
