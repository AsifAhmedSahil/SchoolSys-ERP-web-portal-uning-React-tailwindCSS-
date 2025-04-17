// CustomButton.jsx
import React from 'react';
import './CustomButton.css';

const CustomButton = ({ label, onClick, className = '', active = false }) => {
  return (
    <button
      className={`button-52 ${active ? 'button-active' : ''} ${className}`}
      role="button"
      onClick={onClick}
    >
      <span className="text">{label}</span>
    </button>
  );
};

export default CustomButton;
