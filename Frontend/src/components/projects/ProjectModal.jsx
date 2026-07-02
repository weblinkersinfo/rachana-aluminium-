import React, { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import './ProjectModal.css';

export const ProjectModal = ({ project, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);

  // Escape key & scroll lock
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Reset image on project change
  useEffect(() => { setActiveImg(0); }, [project]);

  const prev = useCallback(() => {
    setActiveImg((i) => (i === 0 ? project.images.length - 1 : i - 1));
  }, [project.images.length]);

  const next = useCallback(() => {
    setActiveImg((i) => (i === project.images.length - 1 ? 0 : i + 1));
  }, [project.images.length]);

  if (!project) return null;

  return createPortal(
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Image Carousel */}
        <div className="modal-carousel">
          <img
            key={activeImg}
            src={project.images[activeImg]}
            alt={`${project.name} – image ${activeImg + 1}`}
            className="modal-carousel-image"
          />
          {project.images.length > 1 && (
            <>
              <button className="modal-nav modal-nav--prev" onClick={prev} aria-label="Previous image">
                <ChevronLeft size={22} />
              </button>
              <button className="modal-nav modal-nav--next" onClick={next} aria-label="Next image">
                <ChevronRight size={22} />
              </button>
              <div className="modal-dots">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    className={`modal-dot ${i === activeImg ? 'active' : ''}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Project Details */}
        <div className="modal-details">
          <div className="modal-meta">
            <span className="modal-category">{project.category}</span>
            <span className="modal-location">
              <MapPin size={13} />
              {project.location}
            </span>
          </div>
          <h2 className="modal-title">{project.name}</h2>
          <p className="modal-desc">{project.description}</p>

          {project.products && project.products.length > 0 && (
            <div className="modal-products">
              <span className="modal-products-label">Products Used</span>
              <ul className="modal-products-list">
                {project.products.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
