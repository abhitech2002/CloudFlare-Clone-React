import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from './Earth.jpeg';
// import Button from 'react-bootstrap/Button';

export default function Body2() {
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1 style={{ marginTop: 1.5 + 'em' }}>Why Cloudflare?</h1>
                            <h5>Unified Networking and Security Platform</h5>
                            <p>Cloudflare’s fully cloud native platform improves the security and performance of applications, employees, and networks. This reduces complexity, cost and attack surface while improving security posture.</p>
                            <h5>Global Scale Network and Data</h5>
                            <p>Cloudflare protects about 20% of all websites. The scale and variety of our user base, traffic volume, and data sources, deliver deep real-time context on the threat environment.</p>
                            <h5>Fully Programmable Network</h5>
                            <p>Cloudflare’s intelligent global network is fully programmable, so you can handle tricky use cases and complex requirements with a few API calls. This means you can respond faster to changing business needs.</p>
                            
                        </Col>
                        <Col xs={9} md={8} >
                            <Image src={logo} thumbnail style={{ marginLeft: 10.5 + 'em' }}/>
                        </Col>
                    </Row>
                </Container>
               
            </div>
            
        </>
    )
}