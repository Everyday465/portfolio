import React  from 'react';
import HomePage from './HomePage';
import AboutMePage from './AboutMePage';
import RecentProjectPage from './ProjectPage';



const LandingPage: React.FC = () => {
    
    return (
        <>
        <HomePage/>
        <AboutMePage/>
        <RecentProjectPage/>
        </>
       
    );
};

export default LandingPage;
