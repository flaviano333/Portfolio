import React from 'react';
import { Paper, Typography } from '@mui/material';
import './bio.css';
import Grid from '@mui/material/Grid';
import ImageComponent from './ImageComponent';

const Bio = () => {
  return (
    
    <Paper 
      sx={{ backgroundColor: '#494949', padding: '20px', borderRadius: 0 }} // Defina a cor de fundo e remova o arredondamento
      elevation={3} className='bio-container'
    >
      <Grid container spacing={2} alignItems="flex-start" >
        <Grid item sm={4} xs={10}>
          <ImageComponent imagePath="gs://portfolio-75cc2.appspot.com/flaviano.png" alt="Foto" className="bio-image"/>
        </Grid>
        <Grid item sm={8} xm={12}>
                 
          <Typography variant="h5" component="h2" style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: 'bold', marginTop: '20px', marginLeft: '10%' }}>
            FLÁVIO DE OLIVEIRA
          </Typography>
         
          <Typography variant="body1" style={{ color: 'rgb(211, 149, 252)', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '10px', marginLeft: '10%' }}>
            Estudante de Design e Programador
          </Typography>          
          <Typography variant="body1" style={{ color: '#e0e0e0', fontSize: '1.5rem', fontWeight: '400', marginBottom: '10px', marginLeft: '10%', fontFamily:'Ubuntu' }}>
          Olá, meu nome é Flávio de Oliveira, tenho 19 anos e sou estudante de Design na <b>Universidade de Brasília (UnB)</b>. Em 2023, concluí o curso de Técnico em Informática na <b>Escola Técnica de Brasília (ETB)</b>, o que me proporcionou uma base sólida em desenvolvimento web. Desde então, tenho me dedicado ao aprimoramento dos meus projetos pessoais, especialmente no contexto de design.
<p></p>
Atualmente, estou em busca de oportunidades no mercado de trabalho como designer. Apesar de ainda não ter experiência profissional formal, organizei meus projetos pessoais em um portfólio, que inclui principalmente trabalhos relacionados a videogames e streaming. Estou ansioso para aplicar minhas habilidades e conhecimentos em novos desafios profissionais.
          </Typography>
        </Grid>
      </Grid>     
    </Paper>
  );
};

export default Bio;
