import React, { Fragment } from 'react';
import LandingHeader from "../layout/header/LandingHeader";
import LandingFooter from '../layout/footer/LandingFooter';
import { LandingMainSection, SupportSection, AboutSection } from '../components/Component';

const Landing = () => {
    
    return (
        <Fragment>
          
            <LandingHeader showLogin={true}/>

            <LandingMainSection/>

            <SupportSection/>

            <AboutSection/>

            <LandingFooter/>

        </Fragment>
    );
}

export default Landing;