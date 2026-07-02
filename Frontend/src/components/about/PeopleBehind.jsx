import React from 'react';
import './PeopleBehind.css';

export const PeopleBehind = () => {
  return (
    <section className="section people-section bg-secondary">
      <div className="container">
        <div className="people-grid">
          {/* Images */}
          <div className="people-image-col">
            <div className="people-images">
              <img
                src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80"
                alt="Craftsmen working in the Rachana Aluminium workshop"
                className="people-img people-img--main"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
                alt="Rachana Aluminium team at work"
                className="people-img people-img--secondary"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className="people-text-col">
            <p className="people-eyebrow">Our People</p>
            <h2 className="section-heading">People Make Every<br />Project Possible.</h2>
            <div className="people-divider"></div>
            <p className="people-body">
              Behind every window and every installation is a team of skilled craftsmen, technicians, and professionals who take pride in their work.
            </p>
            <p className="people-body">
              Their dedication is the foundation of everything we build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
