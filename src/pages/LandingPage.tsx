import React  from 'react';
import HomePage from './HomePage';
import AboutMeSection from './AboutMeSection';
import RecentProjectSection from './ProjectSection';



const LandingPage: React.FC = () => {
    
    return (
        <>
        <HomePage/>
        <AboutMeSection/>
        <RecentProjectSection/>
        </>
       
    );
};

export default LandingPage;
