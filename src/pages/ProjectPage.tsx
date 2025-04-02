import { Box, Container } from '@mui/material';
import React  from 'react';
import './projectpage.css'



const LandingPage: React.FC = () => {
    
    return (
        <Box>
            <Container className='recent-projects'>
                <h1>projects</h1>
                <Container className="project-list">
                    <Container className='project-card'>
                        <img src='./'></img>
                        <div>Enterprise Cloud Project - OceanEyes (Online Therapy)</div>
                        <div></div>
                    </Container>
                    <Container className='project-card'>
                        <img src='./'></img>
                        <div>NYP Lost & Found Cloud Website</div>
                        <div></div>
                    </Container>
                    <Container className='project-card'>
                        <img src='./'></img>
                        <div>NTUC UPlay Website (Online Event Marketplace)</div>
                        <div></div>
                    </Container>
                </Container>
            
            
            </Container>


        </Box>
       
    );
};

export default LandingPage;
