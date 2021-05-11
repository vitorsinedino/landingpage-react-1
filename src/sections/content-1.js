import React from 'react';
import ContentCta from '../components/content-1-cta';
import ContentImg from '../components/content-1-img';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './content-1.css';

class ContentFirst extends React.Component {
    render() {
        return (
            <Container className="content-first">
                <Row>
                    <ContentImg></ContentImg>
                    <ContentCta></ContentCta>
                </Row>
            </Container>
        )
    }
}

export default ContentFirst