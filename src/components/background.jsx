import React from 'react';
import './background.css';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Background = () => {
  return (
    <>
    <div className="container">
      {/* Imagem de fundo */}
      <img
        className="gif_fundo"
        src="/src/assets/images/render.gif"
        alt="Imagem de fundo"
      />
      {/* Texto sobre a imagem */}
      <div className="texto1">
        <Typography variant="h4" sx={{ fontSize: '2rem', fontFamily: 'Ubuntu'}}>Eu me chamo</Typography>
      </div>
      <div className="texto2">
        <Typography variant="h4" sx={{ fontSize: '4rem', fontFamily: 'MinhaFontePersonalizada'}}>Flávio de Oliveira</Typography>
      </div>  
      <div className="texto3">
        <Typography variant="h4" sx={{ fontSize: '2rem', fontFamily: 'Ubuntu'}}>Estudante de Design e programador</Typography>
      </div>
      <Stack spacing={2} direction="row">
        <a href="#sobre">
            <Button 
            variant="outlined"
            sx={{
              color: 'white',               // Cor do texto
              borderColor: 'green',         // Cor da borda
              '&:hover': {
                borderColor: 'darkgreen',  // Cor da borda ao passar o mouse
                backgroundColor: 'green',  // Cor do texto ao passar o mouse
              },
              position: 'absolute',        // Posição absoluta
              top: { xs: '72%', sm: '58%' }, // Distância do topo para diferentes tamanhos de tela
              left: { xs: '6%', sm: '8%' }, // Distância da esquerda para diferentes tamanhos de tela
              padding: '20px 80px',        // Espaçamento interno
              borderRadius: '4px',         // Bordas arredondadas
            }}
            >
            Saiba mais
            </Button></a>
    </Stack>
      <svg className="shape-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>     <section id='composicoes'>    </section>                
    </div></>
  );
};

export default Background;
