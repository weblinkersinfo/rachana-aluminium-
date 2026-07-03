import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { navigation } from '../../data/siteData';
import { ROUTES } from '../../constants/routes';
import './Header.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // 'centered' -> 'flying' -> 'done'
  const [introState, setIntroState] = useState(isHomePage ? 'centered' : 'done');
  const logoRef = useRef(null);
  const [logoStyle, setLogoStyle] = useState({});

  useEffect(() => {
    if (!isHomePage) {
      setIntroState('done');
      return;
    }

    const handleFlight = () => setIntroState('flying');
    const handleDone = () => setIntroState('done');

    window.addEventListener('startLogoFlight', handleFlight);
    window.addEventListener('homeIntroFinished', handleDone);

    return () => {
      window.removeEventListener('startLogoFlight', handleFlight);
      window.removeEventListener('homeIntroFinished', handleDone);
    };
  }, [isHomePage]);

  // FLIP animation calculation
  useEffect(() => {
    if (introState === 'centered' && logoRef.current) {
      // Small timeout to ensure layout is calculated
      const timer = setTimeout(() => {
        if (!logoRef.current) return;
        const rect = logoRef.current.getBoundingClientRect();
        
        // Native center of the logo in the header
        const nativeCenterX = rect.left + rect.width / 2;
        const nativeCenterY = rect.top + rect.height / 2;
        
        // Center of the screen
        const screenCenterX = window.innerWidth / 2;
        const screenCenterY = window.innerHeight / 2;
        
        // Delta to push it to the center
        const deltaX = screenCenterX - nativeCenterX;
        const deltaY = screenCenterY - nativeCenterY;
        
        setLogoStyle({
          transform: `translate(${deltaX}px, ${deltaY}px) scale(2.5)`,
          transition: 'none' // Snap to center instantly on mount
        });
      }, 50);
      return () => clearTimeout(timer);
    } else if (introState === 'flying') {
      setLogoStyle({
        transform: `translate(0px, 0px) scale(1)`,
        transition: 'transform 1.5s cubic-bezier(0.25, 1, 0.5, 1)'
      });
    } else {
      setLogoStyle({});
    }
  }, [introState]);

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

  useEffect(() => {
    handleScroll(); // Initial check

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Re-check theme when route changes
  useEffect(() => {
    // Small timeout to allow DOM to render the new page
    const timer = setTimeout(() => {
      handleScroll();
    }, 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);


  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'} ${isDarkBackground ? 'header-theme-dark' : 'header-theme-light'}`}>
      <div className="container header-container">
        <Link to={ROUTES.HOME} className="logo" ref={logoRef} style={{...logoStyle, pointerEvents: introState === 'centered' ? 'none' : 'auto'}}>
          <img src={isDarkBackground ? "/images/logo white.png" : "/images/logo.png"} alt="Rachana Aluminium Logo" className="logo-image" />
        </Link>

        {/* Horizontal Scrollable Navigation */}
        <nav className="desktop-nav" style={{ opacity: introState === 'done' ? 1 : 0, transition: 'opacity 0.5s ease', pointerEvents: introState === 'done' ? 'auto' : 'none' }}>
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
      </div>
    </header>
  );
};
