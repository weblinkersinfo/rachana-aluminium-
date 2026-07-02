import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Button.css';

export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false, 
  loading = false,
  className = ''
}) => {
  const baseClass = `btn btn-${variant} ${className}`;
  
  return (
    <button 
      className={baseClass} 
      onClick={onClick} 
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="btn-loader"></span>
      ) : (
        <>
          {children}
          {variant === 'secondary' && <ArrowRight size={18} className="btn-icon" />}
        </>
      )}
    </button>
  );
};
