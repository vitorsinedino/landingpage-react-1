import React from 'react';
import Col from 'react-bootstrap/Col'
import  img from '../assets/left-image.png'
import Image from 'react-bootstrap/Image'

class contentImg extends React.Component {
    render() {
        return(
            <Col lg={7} md={12} sm={12}>
                <Image src={img} rounded fluid></Image>
            </Col>           
        );
    }
}

export default contentImg