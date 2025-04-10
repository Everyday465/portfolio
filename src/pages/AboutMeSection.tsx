import { Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import "./aboutmesection.css";
import HtmlIcon from '@mui/icons-material/Html';

import ReactIcon from '@mui/icons-material/Code';
import TypeScriptIcon from '@mui/icons-material/Code';
import PythonIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import SqlIcon from '@mui/icons-material/Storage';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';

import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';

const AboutMePage: React.FC = () => {
    const [items] = useState<any[]>([
        { name: "HTML5/CSS", icon: <HtmlIcon /> },
        { name: "React", icon: <ReactIcon /> },
        { name: "TypeScript", icon: <TypeScriptIcon /> },
        { name: "Python", icon: <FontAwesomeIcon icon={faPython} style={{color: "#FFD43B", }} size="xl" /> },
        { name: "C#", icon: <PythonIcon /> },
        { name: "AWS Cloud Services", icon: <CloudIcon /> },
        { name: "MySQL", icon: <SqlIcon /> }
    ]);

    return (
        <Box className="about-me">
            <Container className='tech-stack'>
                <h1 id='heading'>tech stack</h1>
                <Container className='content'>
                    {items.map((item, index) => (
                        <div key={index} className="tech-stack-item">
                            {item.icon} {item.name}
                        </div>
                    ))}
                </Container>
            </Container>

            <Container className='experience'>
                <h1 id='heading'>experience</h1>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            Apr 2025
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Hackathon, NUS HumanITy 2025
                            </Typography>
                            <Typography>
                                still on going
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            Mar 2024 - May 2024
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Internship, Shaw Organisation
                            </Typography>
                            <Typography>
                                Learned Java fundamentals with a focus on OOP and unit testing. Contributed to in-house system design using Figma and documented workflows in Confluence for consistency and clarity.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            Jun 2024 - Aug 2024
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Final Year Project, Ministry of Law Singapore
                            </Typography>
                            <Typography>
                                Designed and developed a prototype wireframe to enhance the Ministry of Law’s application system, applying software engineering principles across analysis, design, and development phases, with clear documentation to support seamless implementation.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            Nov 2024
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Hackathon, SDG Open Hack 2024
                            </Typography>
                            <Typography>
                                Collaborated in a team of 4 to pitch an online mental health solution aligned with SDG 17, developing a wireframe and presenting a practical, research-backed idea. Reached the grand finals and placed top 3 in the qualifying rounds.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            Sep 2023
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <LaptopMacIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Hackathon, Code Overflow Hackathon 2023
                            </Typography>
                            <Typography>
                                Built a health-focused platform in 3 days with calorie tracking, food diary, and supplement store features. Used Python for the backend, HTML/CSS for the frontend, and integrated a shelve database for data management.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Container>
        </Box>
    );
};

export default AboutMePage;
