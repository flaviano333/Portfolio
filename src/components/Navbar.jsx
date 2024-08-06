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
      <div className={`logo ${isScrolled ? 'scrolled-logo' : ''}`}>
        Portfólio
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#home" className={isScrolled ? 'scrolled-link' : ''}>Home</a></li>
        <li><a href="#sobre" className={isScrolled ? 'scrolled-link' : ''}>Sobre</a></li>
        <li><a href="#composicoes" className={isScrolled ? 'scrolled-link' : ''}>Composições</a></li>
        <li><a href="#portfolio" className={isScrolled ? 'scrolled-link' : ''}>Portfólio</a></li>
        <li><a href="#contato" className={isScrolled ? 'scrolled-link' : ''}>Contatos</a></li>
      </ul>
      <div className={`menu-icon ${isScrolled ? 'scrolled-menu-icon' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>      
    </nav>

  );
};

export default Navbar;