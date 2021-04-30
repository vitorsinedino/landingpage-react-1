import React from 'react';
import img from '../assets/slider-icon.png';

class WelcomeImg extends React.Component {
    render() {
        return (
            <div className="welcome-text left-text col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img className="rounded img-fluid d-block mx-auto" src={img}></img>
            </div>
        );
    }
}

export default WelcomeImg
