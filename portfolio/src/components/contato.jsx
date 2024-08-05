import React from 'react';
import { IconButton, Grid, Paper } from '@mui/material';
import { FaWhatsapp, FaGithub, FaYoutube, FaBehance } from 'react-icons/fa';
import './contato.css';

const ContactIcons = () => {
  return (
    <Paper className='contact-paper' elevation={3} sx={{ backgroundColor: '#494949' }} square>
        <div className='texto'>VEJA MAIS OU ENTRE EM CONTATO!</div>
      <Paper 
        elevation={1}
        sx={{
            padding: 1,
            paddingRight: 4,
            paddingLeft: 4,
            backgroundColor: '#ffffff',
            borderRadius: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto', // Centraliza o Paper horizontalmente
            maxWidth: 'fit-content', // Define a largura mínima para acomodar o conteúdo

        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <IconButton
              component="a"
              href="https://wa.me/61991538327"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="contact-icon-button"
            >
              <FaWhatsapp size={32} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component="a"
              href="https://github.com/flaviano333"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="contact-icon-button"
            >
              <FaGithub size={32} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component="a"
              href="https://www.youtube.com/@flaviano333"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="contact-icon-button"
            >
              <FaYoutube size={32} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component="a"
              href="https://www.behance.net/flaviano333"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="contact-icon-button"
            >
              <FaBehance size={32} />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  );
};

export default ContactIcons;
