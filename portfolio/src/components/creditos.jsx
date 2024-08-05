import React from 'react';
import './creditos.css';

const HalfImage = ({ src, alt }) => {
  return (
    <div className="half-image-container">
        <h1 className='overlay-text'>© Criado por Flávio de Oliveira</h1>
      <img src='https://drive.google.com/file/d/1c5MuPaxWkeIO20fGlrqLotmn2zyNMwYI/view?usp=drive_link' alt={alt} className="half-image" />
    </div>
  );
};

export default HalfImage;
