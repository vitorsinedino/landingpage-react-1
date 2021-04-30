import React from 'react';
import Navigation from '../components/navbar'
import WelcomeCta from '../components/welcome-cta';
import WelcomeImg from '../components/welcome-img';
import './welcome.css';


class Welcome extends React.Component {
    render() {
        return(
            <div className="Welcome">
                <Navigation></Navigation>
                <div className="row welcome-content">
                    <WelcomeCta></WelcomeCta>
                    <WelcomeImg></WelcomeImg>
                </div>
            </div>
        );
    }
}

export default Welcome