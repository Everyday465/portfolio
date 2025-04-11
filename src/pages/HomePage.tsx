import { Box, Container } from '@mui/material';
import React from 'react';
import "./homepage.css";
import { downloadData } from 'aws-amplify/storage';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HomePage: React.FC = () => {



  // Downloads file content to memory


  const downloadResume = async () => {
    try {
      const { body} = await downloadData({
        path: "uploads/ELIJAH AGNOTE CV.pdf", // <-- replace with your actual file path
      }).result;

      if (!body) return;

      const blob = await body.blob(); // convert stream to Blob
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "Elijah_Agnote_Resume.pdf"; // <-- desired filename
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Resume download failed:", error);
    }
  };

  return (
    <Box className="homepage" id="home">
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
        <a href="https://www.linkedin.com/in/elijah-agnote-1008712bb" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <LinkedInIcon className="icon" />
        </a>

        <a href="https://github.com/Everyday465" target="_blank" rel="noopener noreferrer" title="Github">
          <GitHubIcon className="icon" />
        </a>

        <a href="mailto:agnoteelijah@gmail.com" title="Email">
          <EmailIcon className="icon" />
        </a>

        <a onClick={downloadResume} title="Download Resume">
          <DescriptionIcon className="icon" />
        </a>
      </Container>
    </Box>
  );
};

export default HomePage;
