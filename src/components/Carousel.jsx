import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true, // Mostrar pontos de navegação
    infinite: true, // Loop infinito
    speed: 500, // Velocidade de transição
    slidesToShow: 3, // Número de slides a serem exibidos
    slidesToScroll: 1, // Número de slides a serem rolados
    arrows: true, // Mostrar setas de navegação
    adaptiveHeight: true, // Ajusta a altura do carrossel de acordo com o slide visível
    prevArrow: <div className="slick-prev">←</div>,
    nextArrow: <div className="slick-next">→</div>,
    centerPadding: "60px",
    autoplay: true, // Ativa a rotação automática
    autoplaySpeed: 3000, // Velocidade da rotação automática (em milissegundos)    
 
  };

  return (
    <>
    <div className="heading-container">
      <h1>ALGUMAS COMPOSIÇÕES</h1>
      <h3>Arraste para o lado</h3>
    </div>
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="/src/assets/images/aladdin mega drive.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/src/assets/images/dkc21.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="/src/assets/images/mmx4.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="/src/assets/images/dkc22.jpg" alt="Slide 3" />
        </div>                
      </Slider>
      <section id='sobre'> 
      </section>       
    </div>
    </>
  );
};

export default Carousel;
