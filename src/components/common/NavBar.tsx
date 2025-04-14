import { Alert, Box, Collapse, Container, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import React from 'react';
import "./navbar.css"

const NavBar: React.FC = () => {
    const [open, setOpen] = React.useState(true);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box className="navbar">


            <Container className="navbar-content">
                
                <div onClick={() => scrollToSection("home")}>homes</div>
                <div
                    onClick={() => alert("The 'About Me' section is still under construction.")}
                    style={{ textDecoration: 'line-through', cursor: 'not-allowed', color: 'gray' }}
                >
                    about me
                </div>

                <div onClick={() => scrollToSection("projects")}>projects</div>
            </Container>
            <Container className='alert'>
                <Collapse in={open}>
                    <Alert
                        id='warning'
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        severity="warning"
                    >
                        website is working in progress.. last updated 14apr
                    </Alert>
                </Collapse>
            </Container>

        </Box>
    );
};

export default NavBar;
