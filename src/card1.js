import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Cards() {
    return (
        <>
            <div>
                <Container>
                <h1 style={{margin: '60px 0px'}}>How we can help</h1>
                    <Row>
                        <Col>
                            <Card style={{ width: '40rem', margin: '10px 0px' }}>
                                <Card.Body>
                                    <Card.Title>Secure & Accelerate Applications</Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                    Secure, optimize and accelerate your websites, APIs, and Internet applications.
                                    </Card.Text>
                                    <Card.Link href="#">Learn More</Card.Link>
                                    
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '39rem', margin: '10px 0px' }}>
                                <Card.Body>
                                    <Card.Title>Secure Your Employees and Contractors</Card.Title>
                                    <Card.Text>
                                    Secure any user accessing any application, on any device, in any location.
                                    </Card.Text>
                                    <Card.Link href="#">Learn More</Card.Link>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card style={{ width: '40rem' }}>
                                <Card.Body>
                                    <Card.Title>Secure & Accelerate Your Networks</Card.Title>
                                    <Card.Text>
                                    Network security, performance, & reliability on a global scale
                                    </Card.Text>
                                    <Card.Link href="#">Learn More</Card.Link>
                                    
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '39rem' }}>
                                <Card.Body>
                                    <Card.Title>Build Serverless Applications</Card.Title>
                            
                                    <Card.Text>
                                    Write code, test and deploy static and dynamic applications on Cloudflare's global network.
                                    </Card.Text>
                                    <Card.Link href="#">Learn More</Card.Link>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )


}