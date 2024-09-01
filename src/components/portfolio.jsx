import React, { useState } from 'react';
import { Grid } from '@mui/material';
import './portfolio.css';
import Button from '@mui/material/Button';
import ImageComponent from './ImageComponent';

const Portfolio = () => {
  const [view, setView] = useState('thumbnail');

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="portfolio-container">
      <div className="view-buttons">
        <button onClick={() => handleViewChange('thumbnail')}>THUMBNAILS</button>
        <button onClick={() => handleViewChange('flyer')}>ANIMAÇÕES</button>
        <button onClick={() => handleViewChange('poster')}>FLYERS</button>
        <button onClick={() => handleViewChange('modelagem3d')}>Modelagem 3D</button>
        {/* Adicione mais botões conforme necessário */}
      </div>
      <div className="image-container">
        {view === 'thumbnail' && (
          <Grid container spacing={2} justifyContent="center">
            <Grid item sm={4}>
              <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/mmx4.jpg" alt="Thumbnail 1" className="portfolio-image" />
            </Grid>
            <Grid item sm={4}>
              <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/dkc22.jpg" alt="Thumbnail 2" className="portfolio-image" />
            </Grid>
            <Grid item sm={4}>
              <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/aladdin mega drive.jpg" alt="Thumbnail 3" className="portfolio-image" />
            </Grid>
            <Grid item sm={4}>
              <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/dkc21.jpg" alt="Thumbnail 3" className="portfolio-image" />
            </Grid>
            <Grid item sm={4}>
              <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/ristar.jpg" alt="Thumbnail 3" className="portfolio-image" />
            </Grid>
            <Grid item sm={4}>
              <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/Megaman X online.jpg" alt="Thumbnail 3" className="portfolio-image" />
            </Grid>
            <Grid item sm={4}>
              <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/Donkey Kong Country 3.jpg" alt="Thumbnail 3" className="portfolio-image" />
            </Grid>
            <Grid item sm={4}>
              <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/zelda breath of the wild.jpg" alt="Thumbnail 3" className="portfolio-image" />
            </Grid>
            <Grid item sm={4}>
              <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/Megaman x6.jpg" className="portfolio-image" />
            </Grid>                                                                        
            {/* Adicione mais imagens conforme necessário */}
          </Grid>
        )}
        {view === 'flyer' && (
          <Grid container spacing={2} justifyContent="center">
            <Grid item sm={4}>
              <iframe 
                src="https://www.youtube.com/embed/_R6MHJ-Gtxk?si=QseXle7mwj1RsBwD" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="portfolio-video"
              ></iframe>
            </Grid>
            <Grid item sm={4}>
            <iframe className="portfolio-video"
              src="https://www.youtube.com/embed/gpT7iv84sBw?si=XK6xJ0u9PV-4m3zI" 
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
              gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            </Grid>
            <Grid item sm={4}>
            <iframe  className="portfolio-video"
            src="https://www.youtube.com/embed/NWmXrempGgI?si=Qxq2az24voE49B9v" 
            title="YouTube video player" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
            web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            </Grid>
            <Grid item sm={4}>
            <iframe className="portfolio-video"
            src="https://www.youtube.com/embed/X_Q0pSHEBAE?si=QkjNbSa-pw8LUece" 
            title="YouTube video player" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
             </iframe>
            </Grid> 
            <Grid item sm={4}>
            <iframe className="portfolio-video" src="https://www.youtube.com/embed/hEGmgT1u9KE?si=ux5Eo0Y2SS6VfplY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Grid> 
            <Grid item sm={4}>
            <iframe className="portfolio-video" src="https://www.youtube.com/embed/4qRAPZheWPM?si=KSjt22ymrJOhxtct" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Grid> 
            <Grid item sm={4}>
            <iframe className="portfolio-video" src="https://www.youtube.com/embed/StSJUVGZKzU?si=HT1bj9LNAZvvTgb6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Grid> 
            <Grid item sm={4}>
            <iframe className="portfolio-video" src="https://www.youtube.com/embed/CoNr5Fqfvy8" title="blinksoft intro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Grid>
            {/* Adicione mais imagens conforme necessário */}
          </Grid>
        )}
        {view === 'poster' && (
          <Grid container spacing={2} justifyContent="center">
            <Grid item sm={4}>
              <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/aviso live.jpg" alt="flyer1" className="portfolio-image" />
            </Grid>
            <Grid item sm={4}>
              <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/sistematizei.png" alt="Poster 2" className="portfolio-image" />
            </Grid>
            <Grid item sm={4}>
              <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/flyer2.jpeg" alt="Poster 3" className="portfolio-image" />
            </Grid>
            {/* Adicione mais imagens conforme necessário */}
          </Grid>
        )}
        {view === 'modelagem3d' && (
          <Grid container spacing={2} justifyContent="center">
            <Grid item sm={4}>
              <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/aviso live.jpg" alt="flyer1" className="portfolio-image" />
            </Grid>
            <Grid item sm={4}>
              <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/sistematizei.png" alt="Poster 2" className="portfolio-image" />
            </Grid>
            <Grid item sm={4}>
              <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/flyer2.jpeg" alt="Poster 3" className="portfolio-image" />
            </Grid>
            {/* Adicione mais imagens conforme necessário */}
          </Grid>
        )}        
      </div>     
    </div>
  );
};

export default Portfolio;
