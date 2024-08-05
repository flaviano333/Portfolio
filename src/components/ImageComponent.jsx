import React, { useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebaseConfig';

const ImageComponent = ({ imagePath, className, alt }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageRef = ref(storage, imagePath);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error('Erro ao carregar a imagem:', error);
      }
    };

    fetchImage();
  }, [imagePath]);

  return (
    imageUrl ? (
      <img src={imageUrl} alt={alt} className={className} />
    ) : (
      <p>Loading...</p>
    )
  );
};

export default ImageComponent;
