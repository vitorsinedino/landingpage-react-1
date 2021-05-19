import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ContentSecondCta from '../components/content-2-cta';
import ContentSecondImg from '../components/content-2-img';

class ContentSecond extends React.Component {
    render() {
        return (
            <Container id="about2" className="content-second">
                <Row>
                    <ContentSecondCta></ContentSecondCta>
                    <ContentSecondImg></ContentSecondImg>
                </Row>
            </Container>
        )
    }
}

export default ContentSecond