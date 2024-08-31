import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import ImageComponent from './ImageComponent';

const Carousel = () => {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    prevArrow: <div className="slick-prev">←</div>,
    nextArrow: <div className="slick-next">→</div>,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 3000,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSettings(prevSettings => ({
          ...prevSettings,
          slidesToShow: 1,
          centerPadding: '20px',
        }));
      } else {
        setSettings(prevSettings => ({
          ...prevSettings,
          slidesToShow: 3,
          centerPadding: '60px',
        }));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="heading-container">
        <h1>ALGUMAS COMPOSIÇÕES</h1>
        <h3>Arraste para o lado</h3>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
          <iframe width="100%" src="https://www.youtube.com/embed/_R6MHJ-Gtxk?si=UVHhYh8hV3KjKNgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>          
          <div>
            <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/aladdin mega drive.jpg" alt="Slide 1" />
          </div>
          <div>
            <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/dkc21.jpg" alt="Slide 2" />
          </div>
          <div>
            <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/dkc22.jpg" alt="Slide 3" />
          </div>
          <div>
            <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/mmx4.jpg" alt="Slide 4" />
          </div>
        </Slider>
        <section id='sobre'></section>
      </div>
    </>
  );
};

export default Carousel;
