import React, { useEffect, useRef, useState } from 'react';
import './QualityControl.css';

const steps = [
  'Measurements',
  'Precision Cutting',
  'Fabrication',
  'Assembly',
  'Quality Checks',
  'Delivery',
  'Installation',
];

export const QualityControl = () => {
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
            }, 200 + i * 200);
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
    <section className="section qc-section" id="quality-control" ref={sectionRef}>
      <div className="container">
        <div className="qc-header">
          <span className="section-eyebrow small-label" style={{ color: 'var(--accent-primary)' }}>
            Our Process
          </span>
          <h2 className="section-heading" style={{ marginTop: 'var(--space-xs)' }}>
            Quality at Every Stage
          </h2>
          <p className="qc-supporting">
            Quality is not something inspected only at the end. It is considered throughout the process.
          </p>
        </div>

        <div className="qc-timeline">
          <div className={`qc-timeline-progress ${isFilling ? 'is-filling' : ''}`}></div>
          {steps.map((step, i) => (
            <div
              key={step}
              className={`qc-step ${visibleSteps.includes(i) ? 'is-visible' : ''}`}
            >
              <div className="qc-step-dot">
                <span className="qc-step-num">{i + 1}</span>
              </div>
              <span className="qc-step-label">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
