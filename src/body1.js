import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from './Earth.jpeg';
import Button from 'react-bootstrap/Button';

export default function BodyTop() {
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1 style={{ marginTop: 1.5 + 'em' }}>Security, reliability and speed everywhere</h1>
                            <h6>...powered by an intelligent global network</h6>
                            <ul style={{ marginBottom: 2.5 + 'em' }}>
                                <li>Security from the network that blocks 100B threats daily</li>
                                <li>Visibility, control and context in one platform</li>
                                <li>Serverless applications that take full advantage of our network</li>
                            </ul>
                            <p style={{color:'blue', marginBottom: 2.5 + 'em', alignContent: 'start'}}>What is cloudflare?</p>   
                            <Button variant="primary">Learn More</Button>{' '}
                            <Button variant="outline-primary">Get Started Free</Button>{' '}
                            
                        </Col>
                        <Col xs={9} md={8} >
                            <Image src={logo} thumbnail style={{ marginLeft: 10.5 + 'em' }}/>
                        </Col>
                    </Row>
                    <div style={{background: 'blue', backgroundPosition: 'center center', backgroundSize:'cover'}}>
                    <Row>
                        <Col> 
                            <h1 style={{color:'white', marginTop: 0.5 + 'em',  marginBottom: 0.5 + 'em', marginLeft:40+'px', marginRight:40+'px'}}>Turn economic uncertainty into opportunity. Regain control with Cloudflare.</h1>
                        </Col>
                        <Col>
                        <Button variant="warning" style={{marginTop: 65 +'px'}}>Talk to Expert</Button>{' '}
                        <Button variant="warning" style={{marginTop: 65 + 'px', marginLeft: 20 + 'px'}}>Learn More</Button>{' '}
                        </Col>
                    </Row>
                </div>
                </Container>
               
            </div>
            
        </>
    )
}