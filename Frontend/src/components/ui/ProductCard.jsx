import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { Image } from './Image';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export const ProductCard = ({ image, title, description, link, hideLearnMore, imageStyle }) => {
  return (
    <div className="product-card">
      <div className="product-image-container" style={{ overflow: 'hidden' }}>
        <Image src={image} alt={title} aspectRatio="4/3" imgStyle={imageStyle} />
      </div>
      <div className="product-content">
        <h3 className="subheading">{title}</h3>
        <p className="product-description">{description}</p>
        {!hideLearnMore && (
          <div className="product-action">
            <Link to={link || '#'} className="btn btn-secondary">
              Learn More <ArrowRight size={18} className="btn-icon" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
