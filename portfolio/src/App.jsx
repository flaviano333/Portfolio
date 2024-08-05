import './App.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar.jsx';
import Background from './components/background.jsx';
import Carousel from './components/Carousel.jsx';
import Bio from './components/bio.jsx';
import Portfolio from './components/portfolio.jsx';
import Contato from './components/contato.jsx';
import Creditos from './components/creditos.jsx';
import './App.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <>
    <Navbar /> 
    <section id='home'>
      <Background />
    </section>  
      <Carousel />
      <Bio /> 
    <section id='portfolio'>
      <Portfolio />
    </section>
    <section id='contato'>        
      <Contato /> 
    </section>
    <Creditos /> 
    </>
  )
}

export default App
