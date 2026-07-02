import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import { ScrollIndicator } from './ScrollIndicator';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import './Hero.css';

const slides = [
  { id: 1, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80', alt: 'Farmhouse with system windows' },
  { id: 2, image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80', alt: 'Elegant apartment project' },
  { id: 3, image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=2000&q=80', alt: 'Workshop craftsmanship' },
  { id: 4, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80', alt: 'Commercial project' },
  { id: 5, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80', alt: 'Showroom display' },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 7000;
  const requestRef = useRef();
  const previousTimeRef = useRef();

  // Preload hero images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.image;
    });
  }, []);

  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      if (deltaTime >= slideDuration) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        previousTimeRef.current = time;
      }
    } else {
      previousTimeRef.current = time;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <section className="hero">
      {/* Slider Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          role="img"
          aria-label={slide.alt}
        ></div>
      ))}

      {/* Dark Overlay for Readability */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="container hero-content">
        <h1 className="display-heading text-inverse">
          Built by People.<br />
          Perfected by Precision.
        </h1>
        <p className="hero-supporting-text subheading text-inverse">
          Crafting aluminium systems with care, experience, and attention to every detail since 2012.
        </p>

        <div className="hero-actions">
          <Link to={ROUTES.PROJECTS}>
            <Button variant="primary" className="pill-btn">Explore Projects</Button>
          </Link>
          <Link to={ROUTES.CONNECT}>
            <Button variant="secondary" className="hero-secondary-btn">Connect With Us</Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};
