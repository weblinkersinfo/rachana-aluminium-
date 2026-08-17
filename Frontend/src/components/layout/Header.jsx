import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { navigation } from '../../data/siteData';
import { ROUTES } from '../../constants/routes';
import './Header.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // 'centered' -> 'flying' -> 'done'
  const [introState, setIntroState] = useState(isHomePage ? 'centered' : 'done');
  const logoRef = useRef(null);
  const [logoStyle, setLogoStyle] = useState({});
  const darkSectionsRef = useRef([]);
  const tickingRef = useRef(false);

  const updateDarkSections = () => {
    const darkClasses = [
      '.bg-dark', '.hero', '.why-hero', '.why-connect-cta', '.why-trust-indicators',
      '.in-house-manufacturing', '.sw-hero', '.project-stats', '.projects-hero',
      '.projects-connect', '.products-hero', '.products-connect-cta', '.connect-hero',
      '.footer', '.connect-final-cta', '.manufacturing-story', '.about-hero', '.sys-hero'
    ].join(', ');
    darkSectionsRef.current = Array.from(document.querySelectorAll(darkClasses));
  };

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
    if (!tickingRef.current) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        setIsScrolled(currentScrollY > 50);

        const headerHeight = 80;
        const checkY = headerHeight / 2;
        let overDark = false;

        for (let i = 0; i < darkSectionsRef.current.length; i++) {
          const rect = darkSectionsRef.current[i].getBoundingClientRect();
          if (rect.top <= checkY && rect.bottom >= checkY) {
            overDark = true;
            break; // Stop loop once we find a dark section behind the header
          }
        }
        
        setIsDarkBackground(overDark);
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  };

  useEffect(() => {
    updateDarkSections();
    handleScroll(); // Initial check

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Re-check theme when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false); // Close menu on route change
    // Small timeout to allow DOM to render the new page
    const timer = setTimeout(() => {
      updateDarkSections();
      handleScroll();
    }, 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'} ${isDarkBackground ? 'header-theme-dark' : 'header-theme-light'}`}>
      <div className="container header-container">
        <Link 
          to={ROUTES.HOME} 
          className="logo" 
          ref={logoRef} 
          style={logoStyle}
          onClick={(e) => {
            setIsMobileMenuOpen(false);
            if (introState === 'centered') {
              e.preventDefault();
              window.dispatchEvent(new Event('triggerHomeAnimation'));
            }
          }}
        >
          <img loading="lazy" src={isDarkBackground ? "/images/logo white.webp" : "/images/logo.webp"} alt="Rachana Aluminium Logo" className="logo-image" />
        </Link>

        {/* Hamburger Toggle */}
        {!isMobileMenuOpen && (
          <button 
            className={`mobile-menu-toggle ${isDarkBackground && !isScrolled ? 'text-inverse' : ''}`} 
            onClick={() => setIsMobileMenuOpen(true)}
            style={{ opacity: introState === 'done' ? 1 : 0, pointerEvents: introState === 'done' ? 'auto' : 'none' }}
            aria-label="Open mobile menu"
          >
            <Menu size={32} />
          </button>
        )}

        {/* --- THE MOBILE MENU --- */}
        {isMobileMenuOpen && (
          <>
            {/* 1. The Blurred Overlay (Blocks clicks to the website) */}
            <div 
              className="menu-overlay" 
              onClick={() => setIsMobileMenuOpen(false)} 
            ></div>

            {/* 2. The White Box Drawer */}
            <nav className="mobile-white-box">
              <button 
                className="close-btn" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>

              <ul className="mobile-links">
                {navigation.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className={location.pathname === link.path ? 'active' : ''}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}

        {/* Desktop Navigation */}
        <nav className={`desktop-nav ${introState === 'done' ? 'intro-done' : ''}`}>
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
        </nav>
      </div>
    </header>
  );
};
