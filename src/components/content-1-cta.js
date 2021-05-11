import React from 'react';

import Col from 'react-bootstrap/Col'

class contentCta extends React.Component {
    render() {
        return(      
            <Col lg={5} md={12} sm={12}>
                <h5 className="header-about">Vivamus sodales nisi id ante molestie venenatis</h5>
                <p className="text-about">This template is last updated on 20 August 2019 for main menu drop-down arrow and sub menu text color. Duis auctor dolor eu scelerisque vestibulum. Vestibulum lacinia, nisl sit amet tristique condimentum.
                <br></br>

Sed a consequat velit. Morbi lectus sapien, vestibulum et sapien sit amet, ultrices malesuada odio. Donec non quam euismod, mattis dui a, ultrices nisi.t</p>
                
                <a className="main-button">
                    DISCOVER MORE
                </a>
            </Col>
        )
    }
}

export default contentCta