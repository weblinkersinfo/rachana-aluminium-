import React, { useEffect, useRef, useState } from 'react';
import './HowWeWork.css';

const steps = [
  'Site Visit',
  'Measurements',
  'Consultation',
  'Manufacturing',
  'Quality Checks',
  'Delivery',
  'Installation',
  'After-Sales Support',
];

export const HowWeWork = () => {
  const sectionRef = useRef(null);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [isFilling, setIsFilling] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;

          // Start progress line
          setIsFilling(true);

          // Stagger step reveals
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, i]);
            }, 200 + i * 150);
          });

          observer.unobserve(node);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section hww-section" id="how-we-work" ref={sectionRef}>
      <div className="container">
        <div className="hww-header">
          <span className="section-eyebrow small-label" style={{ color: 'var(--accent-primary)' }}>
            Our Process
          </span>
          <h2 className="section-heading" style={{ marginTop: 'var(--space-xs)' }}>
            How We Work
          </h2>
          <p className="hww-supporting">
            Every stage of our process is designed to ensure precision, transparency, and long-term satisfaction.
          </p>
        </div>

        <div className="hww-timeline">
          <div className={`hww-timeline-progress ${isFilling ? 'is-filling' : ''}`}></div>
          {steps.map((step, i) => (
            <div
              key={step}
              className={`hww-step ${visibleSteps.includes(i) ? 'is-visible' : ''}`}
            >
              <div className="hww-step-dot">
                <span className="hww-step-num">{i + 1}</span>
              </div>
              <span className="hww-step-label">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
