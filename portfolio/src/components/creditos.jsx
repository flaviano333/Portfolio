import React from 'react';
import './creditos.css';

const HalfImage = ({ src, alt }) => {
  return (
    <div className="half-image-container">
        <h1 className='overlay-text'>© Criado por Flávio de Oliveira</h1>
      <img src='src/assets/images/render para site.gif' alt={alt} className="half-image" />
    </div>
  );
};

export default HalfImage;
