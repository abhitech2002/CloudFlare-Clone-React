import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Analyst1() {
    return (
        <>
            <div>
                <Container>
                    <h1 style={{ margin: '60px 0px' }}>What analysts are saying</h1>
                    <Row>
                        <Col>
                            <Card style={{ width: '25rem', margin: '10px 0px' }}>
                                <Card.Body>
                                    <Card.Title>
                                        A Leader in Gartner® Magic Quadrant™ for Web Application and API Protection</Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                        Learn how Cloudflare worked to rapidly secure and accelerate thousands of customer domains.
                                    </Card.Text>
                                    <Card.Link href="#">Read the Report</Card.Link>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '25rem', margin: '10px 0px' }}>
                                <Card.Body>
                                    <Card.Title>
                                        Cloudflare a Leader in 2023 Forrester Wave™: Enterprise Email Security </Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                        Cloudflare tied for the top score in the strategy category, and received the highest scores possible in the criteria of vision and innovation.
                                    </Card.Text>
                                    <Card.Link href="#">Read the Report</Card.Link>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '26rem', margin: '10px 0px' }}>
                                <Card.Body>
                                    <Card.Title>
                                        Cloudflare a Leader in 2023 IDC MarketScape: Zero Trust Network Access
                                    </Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                        IDC cites Cloudflare's "aggressive product strategy to support enterprise security needs."
                                    </Card.Text>
                                    <Card.Link href="#">Read the Report</Card.Link>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}