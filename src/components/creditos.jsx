import React from 'react';
import './creditos.css';
import ImageComponent from './ImageComponent';

const HalfImage = ({ src, alt }) => {
  return (
    <div className="half-image-container">
        <h1 className='overlay-text'>Criado por Flávio de Oliveira</h1>
      <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/render.gif" alt={alt} className="half-image" />
    </div>
  );
};

export default HalfImage;
