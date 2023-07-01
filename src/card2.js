import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Cards2() {
    return(
        <>
            <div>
                <Container>
                    <h1 style={{margin: '60px 0px'}}>What's new</h1>
                    <Row>
                        <Col>
                        <Card style={{ width: '25rem', margin: '10px 0px' }}>
                                <Card.Body>
                                    <Card.Title>
Cloudflare a Leader in 2023 IDC MarketScape: Zero Trust Network Access</Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                    IDC cites Cloudflare's "aggressive product strategy to support enterprise security needs."
                                    </Card.Text>
                                    <Card.Link href="#">Read the Report</Card.Link>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '25rem', margin: '10px 0px' }}>
                                <Card.Body>
                                    <Card.Title>
                                    Every product announcement from Speed Week 2023</Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                    See the latest product news for accelerating your AI, Zero Trust and networking use cases.
                                    </Card.Text>
                                    <Card.Link href="#">Read the blog</Card.Link>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '26rem', margin: '10px 0px' }}>
                                <Card.Body>
                                    <Card.Title>
                                    Cloudflare a Leader in 2023 Forrester Wave™: Enterprise Email Security
</Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                    Cloudflare tied for the top score in the strategy category, and received the highest scores possible in the criteria of vision and innovation.
                                    </Card.Text>
                                    <Card.Link href="#">Read the blog</Card.Link>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div style={{background: 'blue', backgroundPosition: 'center center', backgroundSize:'cover'}}>
                    <Row>
                        <Col> 
                            <h1 style={{color:'white', marginTop: 0.5 + 'em',  marginBottom: 0.5 + 'em', marginLeft:40+'px', marginRight:40+'px'}}>Need help getting started? Get a personalized recommendation.</h1>
                        </Col>
                        <Col>
                        <Button variant="warning" style={{marginTop: 65 +'px'}}>Answer a Few Question</Button>{' '}
                        
                        </Col>
                    </Row>
                </div>
                </Container>
            </div>
        </>
    )
}