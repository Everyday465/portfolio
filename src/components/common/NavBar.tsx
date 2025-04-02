import { Alert, Box, Collapse, Container, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import React from 'react';
import "./navbar.css"

const NavBar: React.FC = () => {
    const [open, setOpen] = React.useState(true);

    return (
        <Box className="navbar">

            <Container className="navbar-content">
                <div>home</div>
                <div>about me</div>
                <div>projects</div>
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
                        website is working in progress.. last updated 2apr
                    </Alert>
                </Collapse>
            </Container>

        </Box>
    );
};

export default NavBar;
