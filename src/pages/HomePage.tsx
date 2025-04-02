import { Box, Container } from '@mui/material';
import React from 'react';
import "./homepage.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';


const HomePage: React.FC = () => {

    return (
        <Box className="homepage">
            <Container className="intro">
                <div>Elijah Agnote</div>
                <div>Web Developer</div>
                <div>Learn more about me</div>
            </Container>
            <Container className="socials">
                <LinkedInIcon/>
                <GitHubIcon/>
                <EmailIcon/>
                <DescriptionIcon/>
            </Container>

        </Box>


    );
};

export default HomePage;
