import { Box, Container } from '@mui/material';
import React from 'react';
import "./homepage.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HomePage: React.FC = () => {
  return (
    <Box className="homepage">
      <Container className="intro">
        <div>
          <div className="name">Elijah Agnote</div>
          <div className="title">Web Developer</div>
          <div className="location">
            <LocationOnIcon style={{ marginRight: '5px' }} />
            <span>Singapore</span>
          </div>
        </div>
      </Container>

      <Container className="socials">
        <a href="https://www.linkedin.com/in/elijah-agnote-1008712bb" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="icon" />
        </a>

        <a href="https://github.com/Everyday465" target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="icon" />
        </a>

        <a href="mailto:agnoteelijah@gmail.com">
          <EmailIcon className="icon" />
        </a>

        <a href="/your-resume.pdf" target="_blank">
          <DescriptionIcon className="icon" />
        </a>
      </Container>
    </Box>
  );
};

export default HomePage;
