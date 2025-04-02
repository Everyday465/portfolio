import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Box, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import './index.css';
// import { AlertProvider } from './contexts/AlertContext';
// import AlertComponenet from './components/common/Alert';
// import SideNav from './components/common/SideNav';
import NavBar from './components/common/NavBar';
// import { SnackbarProvider } from 'notistack';
// import { UserProvider } from './contexts/UserContext';
//import { GoogleSSOProvider } from './contexts/GoogleSSOContext';


function Root() {


    const theme = createTheme({
        typography: {
            fontFamily: 'Poppins, Roboto, sans-serif'
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        fontFamily: 'Poppins, Roboto, sans-serif',
                    }
                }
            }
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                {/* <AlertProvider> */}
                {/* <UserProvider> */}
                {/* <SnackbarProvider maxSnack={3}> */}
                <CssBaseline />
                <NavBar />
                {/* <AlertComponenet /> */}
                <Box>
                    <Outlet />
                </Box>
                
                <ScrollRestoration />

                {/* </SnackbarProvider> */}
                {/* </UserProvider> */}
                {/* </AlertProvider> */}
            </ThemeProvider>
        </>
    );
}

export default Root;