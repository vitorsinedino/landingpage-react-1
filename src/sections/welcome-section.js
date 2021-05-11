import React from 'react';
import WelcomeCta from '../components/welcome-cta';
import WelcomeImg from '../components/welcome-img';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './welcome.css';


class Welcome extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <div className="Welcome col-sm-12" id="welcome-area">
                        <div className="welcome-content">
                            <WelcomeCta></WelcomeCta>
                            <WelcomeImg></WelcomeImg>
                        </div>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default Welcome