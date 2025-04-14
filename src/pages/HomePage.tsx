import { Box, Container } from '@mui/material';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import React from 'react';
import "./homepage.css";
import { downloadData } from 'aws-amplify/storage';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HomePage: React.FC = () => {

  const [open, setOpen] = React.useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText("agnoteelijah@gmail.com");
      setOpen(true);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const downloadResume = async () => {
    try {
      const { body } = await downloadData({
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
          <div className="name slide-in">
            Elijah Agnote
          </div>
          <div className="title slide-in" >Developer</div>
          <div className="location slide-in">
            <LocationOnIcon style={{ marginRight: '5px' }} />
            <span>Singapore</span>
          </div>
        </div>
      </Container>

      <Container className="socials">
        <a className="slide-in" href="https://www.linkedin.com/in/elijah-agnote-1008712bb" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <LinkedInIcon className="icon" />
        </a>

        <a className="slide-in" href="https://github.com/Everyday465" target="_blank" rel="noopener noreferrer" title="Github">
          <GitHubIcon className="icon" />
        </a>

        <a className="slide-in" onClick={handleClick} title="Email">
          <EmailIcon className="icon" />
        </a>

        <a className="slide-in" onClick={downloadResume} title="Download Resume">
          <DescriptionIcon className="icon" />
        </a>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="agnoteelijah@gmail.com has been copied to clipboard!"
      />
    </Box>
  );
};

export default HomePage;
