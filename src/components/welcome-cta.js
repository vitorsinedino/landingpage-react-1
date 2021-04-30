import React from 'react';


class WelcomeCta extends React.Component {
    render() {
        return (
            <div className="welcome-text left-text col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h1 className="header-text">Art Factory is free  <strong style={{fontWeight:500}}>for YOU</strong></h1>
                <p className="header-text">
                    This template is available for 100% free of charge on TemplateMo. Download, modify and use this for your business website.
                    <br></br>
                    <btn className="welcome-button">
                        <a >
                            FIND OUT MORE
                        </a>
                    </btn>
                    
                </p>
                
            </div>
        );
    }
}

export default WelcomeCta
