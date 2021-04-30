import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import './navbar.css';

class Navigation extends React.Component {
    render() {
        return (
            <div className="nav-container" >
                <Navbar>
                    <Navbar.Brand href="#home">ART FACTORY</Navbar.Brand>
                    <Nav className="mr-auto ml-auto w-100 justify-content-end">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#features">Services</Nav.Link>
                        <Nav.Link href="#pricing">Freqeuntly questions</Nav.Link>
                        <Nav.Link href="#home">Drop down</Nav.Link>
                        <Nav.Link href="#features">Contact us</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation
