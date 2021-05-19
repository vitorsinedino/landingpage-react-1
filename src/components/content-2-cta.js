import React from 'react';
import Col from 'react-bootstrap/Col'
import imgFirst from '../assets/about-icon-01.png';
import imgSecond from '../assets/about-icon-02.png'; 
import imgThirrd from '../assets/about-icon-03.png';  

class contentCtaSecond extends React.Component {
    render() {
        return(      
            <Col lg={5} md={12} sm={12}>
                <h5 className="header-about">Curabitur aliquam eget tellus id porta</h5>
                <p className="text-about"> Proin justo sapien, posuere suscipit tortor in, fermentum mattis elit. Aenean in feugiat purus.</p>

                <ul>
                        <li>
                            <img src={imgFirst} alt=""/>
                            <div class="text">
                                <h6>Nulla ultricies risus quis risus</h6>
                                <p>You can use this website template for commercial or non-commercial purposes.</p>
                            </div>
                        </li>
                        <li>
                            <img src={imgSecond} alt=""/>
                            <div class="text">
                                <h6>Donec consequat commodo purus</h6>
                                <p>You have no right to re-distribute this template as a downloadable ZIP file on any website.</p>
                            </div>
                        </li>
                        <li>
                            <img src={imgThirrd} alt=""/>
                            <div class="text">
                                <h6>Sed placerat sollicitudin mauris</h6>
                                <p>If you have any question or comment, please <a rel="nofollow" href="https://templatemo.com/contact">contact</a> us on TemplateMo.</p>
                            </div>
                        </li>
                </ul>
            </Col>
        )
    }
}

export default contentCtaSecond