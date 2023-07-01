import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


export default function ExploreProduct() {
    return (
        <>
            <div>
                <Container>
                    <h1 style={{ margin: '60px 0px' }}>Explore our products</h1>
                    <Row>
                        <Col>
                            <Card style={{ width: '25rem', margin: '10px 0px' }}>
                                <Card.Body>
                                    <Card.Title>
                                        Zero Trust Services    </Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                        Stop data loss, malware and phishing with the most performant Zero Trust application access and Internet browsing solution.
                                    </Card.Text>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Zero Trust Network Access (ZTNA)</ListGroup.Item>
                                        <ListGroup.Item>Secure Web Gateway (SWG)</ListGroup.Item>
                                        <ListGroup.Item>Browser Isolation & Email Security</ListGroup.Item>
                                        <ListGroup.Item>Cloud Access Security Broker (CASB)</ListGroup.Item>
                                    </ListGroup>
                                    <Card.Link href="#">Read the Report</Card.Link>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '25rem', margin: '10px 0px' }}>
                                <Card.Body>
                                    <Card.Title>
                                    Website & App Performance</Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                    Speed up websites, apps, & APIs through our global network to optimize your content & deliver it closer to the users location.
                                    </Card.Text>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>CDN</ListGroup.Item>
                                        <ListGroup.Item>DNS</ListGroup.Item>
                                        <ListGroup.Item>Load Balancing</ListGroup.Item>
                                        <ListGroup.Item>Website & Application Acceleration</ListGroup.Item>
                                    </ListGroup>    
                                    <Card.Link href="#">Read the blog</Card.Link>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '26rem', margin: '10px 0px' }}>
                                <Card.Body>
                                    <Card.Title>
                                        
Website & App Security
                                    </Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                    Protect websites & applications from bots, DDoS attacks & more. All while monitoring for suspicious activity & potential attacks.
                                    </Card.Text>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>DDoS Protection</ListGroup.Item>
                                        <ListGroup.Item>Bot Management</ListGroup.Item>
                                        <ListGroup.Item>WAF</ListGroup.Item>
                                        
                                    </ListGroup>    
                                    <Card.Link href="#">Read the blog</Card.Link>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card style={{ width: '25rem', margin: '10px 0px' }}>
                                <Card.Body>
                                    <Card.Title>
                                    Network Security & Performance</Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                    Networking solutions to connect, secure, & accelerate your networks — without the cost & complexity of managing legacy hardware.
                                    </Card.Text>
                                    <Card.Link href="#">Read the Report</Card.Link>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>WAN as a Service</ListGroup.Item>
                                        <ListGroup.Item>WFaaS & L3/L4 DDoS Protection</ListGroup.Item>
                                        <ListGroup.Item>Network Interconnect</ListGroup.Item>
                                        <ListGroup.Item>Smart Routing</ListGroup.Item>
                                    </ListGroup> 
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '25rem', margin: '10px 0px' }}>
                                <Card.Body>
                                    <Card.Title>
                                    Developer Platform</Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                    Deploy serverless code instantly across the globe to give it exceptional performance, reliability, & scale.
                                    </Card.Text>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Serverless code</ListGroup.Item>
                                        <ListGroup.Item>JAMstack platform</ListGroup.Item>
                                        <ListGroup.Item>R2 object storage</ListGroup.Item>
                                        <ListGroup.Item>Live streaming & on-demand video</ListGroup.Item>
                                    </ListGroup> 
                                    <Card.Link href="#">Read the blog</Card.Link>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '26rem', margin: '10px 0px' }}>
                                <Card.Body>
                                    <Card.Title>
                                        SASE - Cloudflare One
                                    </Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                    Zero Trust network-as-a-service platform to dynamically connect remote & on-site users to resources, with identity-based security controls.
                                    </Card.Text>
                                    <Card.Text>
                                    Replace expensive, proprietary circuits with a single global network that provides built-in Zero Trust functionality, DDoS mitigation, network firewalling, and traffic acceleration.
                                    </Card.Text>
                                    <Card.Link href="#">Read the blog</Card.Link>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}