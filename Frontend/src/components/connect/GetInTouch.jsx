import React, { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { Phone, MessageCircle, Mail, MapPin, X, Building2, Store } from 'lucide-react';
import './GetInTouch.css';

const contacts = [
  {
    id: 'call',
    icon: Phone,
    title: 'Call Us',
    items: [
      { label: 'Avinash Latwade', value: '+91 94207 76484', href: 'tel:+919420776484' },
      { label: 'Pravin Latwade', value: '+91 90497 97772', href: 'tel:+919049797772' }
    ],
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    title: 'WhatsApp',
    items: [
      { label: 'Avinash Latwade', value: '+91 94207 76484', href: 'https://wa.me/919420776484' },
      { label: 'Pravin Latwade', value: '+91 90497 97772', href: 'https://wa.me/919049797772' }
    ],
  },
  {
    id: 'email',
    icon: Mail,
    title: 'Email',
    items: [
      { label: 'General', value: 'info@rachanaaluminium.com', href: 'mailto:info@rachanaaluminium.com' }
    ],
  },
  {
    id: 'showroom',
    icon: MapPin,
    title: 'Our Locations',
    items: [
      { label: 'View Addresses', isModalTrigger: true }
    ],
  },
];

export const GetInTouch = () => {
  const { ref, isRevealed } = useReveal();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="section git-section" id="get-in-touch">
        <div className="container">
          <div className="git-header">
            <span className="section-eyebrow small-label" style={{ color: 'var(--accent-primary)' }}>
              Contact
            </span>
            <h2 className="section-heading" style={{ marginTop: 'var(--space-xs)' }}>
              Get In Touch
            </h2>
            <p className="git-supporting">
              We're happy to answer your questions and discuss your project requirements.
            </p>
          </div>

          <div
            ref={ref}
            className={`git-grid ${isRevealed ? 'is-revealed' : ''}`}
          >
            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.id} className="git-card reveal-stagger">
                  <div className="git-card-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="git-card-title">{c.title}</h3>
                  <div className="git-card-value">
                    {c.items.map((item, i) => (
                      <div key={i} style={{ marginBottom: i < c.items.length - 1 ? '12px' : '0' }}>
                        {item.label !== 'View Addresses' && item.label !== 'General' && (
                          <span style={{ fontSize: '0.85em', color: 'var(--text-secondary)', display: 'block', marginBottom: '2px' }}>{item.label}</span>
                        )}
                        {item.isModalTrigger ? (
                          <button 
                            onClick={() => setIsModalOpen(true)}
                            className="git-modal-trigger"
                          >
                            {item.label}
                          </button>
                        ) : (
                          <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                            {item.value}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Address Modal */}
      <div className={`address-modal-overlay ${isModalOpen ? 'is-open' : ''}`} onClick={() => setIsModalOpen(false)}>
        <div className="address-modal" onClick={e => e.stopPropagation()}>
          <button className="address-modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close">
            <X size={20} />
          </button>
          <h3 className="address-modal-title">Our Locations</h3>
          
          <div className="address-list">
            <div className="address-item">
              <h4 className="address-item-title">
                <Building2 size={18} /> Office Address
              </h4>
              <p className="address-item-text">
                Rachana Aluminium, Tin Batti Chowk,<br />
                16/805, IGM Rd, Kagwade Mala,<br />
                Ichalkaranji, Maharashtra 416115
              </p>
              <a 
                href="https://www.google.com/maps/dir//Rachana+Aluminium,+Tin+Batti+Chowk,+16%2F805,+IGM+Rd,+Kagwade+Mala,+Ichalkaranji,+Maharashtra+416115/@16.3101787,73.8229156,8.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc0e27c9385281b:0xeb28b8bed8e3ed6f!2m2!1d74.4571681!2d16.6841028?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'inline-block', marginTop: '12px', fontSize: '0.875rem', color: 'var(--accent-primary)', textDecoration: 'underline' }}
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
