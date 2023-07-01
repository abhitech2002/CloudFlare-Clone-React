import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function ImageGallery1(){
    return(
        <>
            <div>
                <Container>
                <h1 style={{ marginTop: 1.5 + 'em' }}>30% of Fortune 1000 companies rely on Cloudflare</h1>
                <Row>
                    <Col><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayaGhvctC6QguRT0K8OEU3wyBqitUSY28KhqERBwlSvqoa89d"
                        alt="BROADCOM"
                    /></Col>
                    <Col><img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSyAvglZwQ4tP06_VQuKQDtoulmp9XUvYVWjcV_TauwXYkHRpm1"
                        alt="COLGATE"
                    /></Col>
                    <Col><img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFcPsD_9jzIrej6F3_FavbP-VYWNxZY5eK3ggCWfqukTmv_gEI"
                        alt="DHL"
                    /></Col>
                    <Col><img
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnTy6l0M4fv-TDRCHxht-r16pWUUTcOteP8prpQz5XRW6IWS6O"
                        alt="DOORDASH"
                    /></Col>
                    <Col><img
                        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR8fInXxis6wtqS3LW3uo1mFcuDa_9OyBtx__ZemqvWgyTxYQsb"
                        alt="LABCORP"
                    /></Col>
                    <Col><img
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQQI88MLPfdh8Fw9cpEE5jJPFJPuygpjfih7wa08P3T_ur9Zxu"
                        alt="GARMIN"
                    /></Col>
                </Row>
                <Row>
                    <Col><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rsWX09SC6cVFENaSk0QCZkDPf5Z4qx2VwB1pT81etrzDspAK"
                        alt="Japan Airlines"
                    /></Col>
                    <Col><img 
                        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQBAUVVs2TeqJduyMNpMjLsbzAoN8j-noLq-Qx_rftNg0zk0Lhk"
                        alt="GPC"
                    /></Col>
                    <Col><img 
                        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSbnz5EYsbu1_KQlWvJlWIOAknxenu9-Ue2v55g54L-PimGQBAt"
                        alt="Loreal"
                    /></Col>
                    <Col><img 
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR44H0BaGOcth1rnEey5gE9E6---lcvWgQIsuya_t7xeIYCUTz4"
                        alt="MARS"
                    /></Col>
                    <Col><img 
                        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR4F7sXF6S4z-N8cE3uj6LrqH7PTmwoTo2YHv0Z7S9NqsxZJM_W"
                        alt="NCR"
                    /></Col>
                    <Col><img 
                        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDMMrWfbY5mC3TO61_59-hHoqyedS5Sr3HQ1OdGiLEnKPDbhOd"
                        alt="SHOPIFY"
                    /></Col>
                     <Button variant="link">View More Case Studies</Button>
                </Row>
                <div style={{background: 'blue', backgroundPosition: 'center center', backgroundSize:'cover'}}>
                    <Row>
                        <Col> 
                            <h1 style={{color:'white', marginTop: 0.5 + 'em',  marginBottom: 0.5 + 'em', marginLeft:40+'px', marginRight:40+'px'}}>Get started free in just 5 minutes. Try Cloudflare today.</h1>
                        </Col>
                        <Col>
                        <Button variant="warning" style={{marginTop: 65 +'px'}}>Get Started</Button>{' '}
                        <Button variant="warning" style={{marginTop: 65 +'px'}}>Contact Sales</Button>{' '}
                        
                        </Col>
                    </Row>
                </div>
                </Container>

            </div>
        </>
    )
}