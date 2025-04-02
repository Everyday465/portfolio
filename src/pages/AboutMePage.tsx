import { Box, Chip, Container } from '@mui/material';
import React, { useState } from 'react';
import "./aboutmepage.css"


const AboutMePage: React.FC = () => {
    const [items] = useState<any[]>(["TypeScript (Node.js/React.js)", "HTML5/CSS (Bootstrap)", "Python", "C#", "AWS Cloud Services", "MySQL"]);

    return (
        <Box className="about-me">
            <Container className='personal'>
                <h1 id='heading'>about me</h1>
                <Container className='content'>
                    <img src='./' />
                    <div>hi, i am Elijah Agnote</div>
                    <div>I am passionate about cloud computing and web development, with interests in cybersecurity andAI. I enjoy designing and building websites, seeing projects come to life, and continuously improvingmy skills across different IT domains.I thrive in collaborative environments, value constructive feedback, and actively seek opportunitiesto learn from others. Committed to delivering high-quality work, I take pride in my projects, go theextra mile for excellence, and enjoy mentoring others as a way to reinforce my own understanding.</div>
                </Container>
            </Container>
            <Container className='tech-stack'>
                <h2 id='heading'>tech stack</h2>
                <Container className='content'>
                    {(
                        items.map((item) => (
                            <Chip label={item} />
                        ))
                    )}
                </Container>
            </Container>
            <Container className='experience'>
                <h2 id='heading'>experience</h2>
                <Container className='content'>
                    <div>Internship, Shaw Organisation</div>
                    <div>Mar 2024 - May 2024</div>
                    <div>Learned Java fundamentals, applied OOP concepts, and practiced unit testing for code quality.
                        Assisted in designing the in-house business system using Figma and documented processes in
                        Confluence, ensuring standardized design elements and clear documentation with collegues</div>

                    <div>Internship, Shaw Organisation</div>
                    <div>Mar 2024 - May 2024</div>
                    <div>Learned Java fundamentals, applied OOP concepts, and practiced unit testing for code quality.
                        Assisted in designing the in-house business system using Figma and documented processes in
                        Confluence, ensuring standardized design elements and clear documentation with collegues</div>
                </Container>
            </Container>

        </Box>

    );
};

export default AboutMePage;
