import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoreVertical, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { navigation } from '../../data/siteData';
import { ROUTES } from '../../constants/routes';
import './Header.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      const headerHeight = 80;
      // List of all classes that have a dark background in the CSS
      const darkClasses = [
        '.bg-dark', '.hero', '.why-hero', '.why-connect-cta', '.why-trust-indicators',
        '.in-house-manufacturing', '.sw-hero', '.project-stats', '.projects-hero',
        '.projects-connect', '.products-hero', '.products-connect-cta', '.connect-hero',
        '.footer', '.connect-final-cta', '.manufacturing-story', '.about-hero', '.sys-hero'
      ].join(', ');
      
      const darkSections = document.querySelectorAll(darkClasses);
      let overDark = false;
      const checkY = headerHeight / 2;
      
      darkSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= checkY && rect.bottom >= checkY) {
          overDark = true;
        }
      });
      
      setIsDarkBackground(overDark);
    };

    handleScroll(); // Initial check

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'} ${isDarkBackground ? 'header-theme-dark' : 'header-theme-light'}`}>
      <div className="container header-container">
        <Link to={ROUTES.HOME} className="logo">
          <img src={isDarkBackground ? "/images/logo white.png" : "/images/logo.png"} alt="Rachana Aluminium Logo" className="logo-image" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navigation.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="header-cta">
            <Link to={ROUTES.CONNECT}>
              <Button variant="primary" className="header-btn">Connect With Us</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <MoreVertical size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <ul className="mobile-nav-list">
              {navigation.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="mobile-nav-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to={ROUTES.CONNECT}
                  className="mobile-nav-link"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  Connect With Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
