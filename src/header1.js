import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function HeaderTop() {
    return (
        <>
            <div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand >
                            <img
                                alt=""
                                src=""
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            CLOUDFLARE
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text style={{ marginRight: 1.5 + 'em' }}>
                                Sales: 0008 000 501 996
                            </Navbar.Text>
                        </Navbar.Collapse>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Support"
                            menuVariant="bright"
                            style={{ marginRight: 1.5 + 'em' }}
                        >
                            <NavDropdown.Item href="#action/3.1">Contact Support</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Help Center</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cloudflare Community</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Lost account access?</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Language"
                            menuVariant="bright"
                        >
                            <NavDropdown.Item href="#action/4.1">Engish</NavDropdown.Item>
                            <NavDropdown.Item href="#action/4.2">English (United Kindom)</NavDropdown.Item>
                            <NavDropdown.Item href="#action/4.3">English (Canada)</NavDropdown.Item>
                            <NavDropdown.Item href="#action/4.4">English (India)</NavDropdown.Item>
                            <NavDropdown.Item href="#action/4.5">Deutsch</NavDropdown.Item>
                            <NavDropdown.Item href="#action/4.6">Espanol</NavDropdown.Item>
                        </NavDropdown>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Navbar bg="light" data-bs-theme="light">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#resources">Resources</Nav.Link>
                            <Nav.Link href="#partners">Partners</Nav.Link>
                            <Nav.Link href="#whycloudflare" style={{ marginRight: 5 + 'em' }}>Why Cloudflare</Nav.Link>
                            <Nav.Link href="#search" style={{ marginLeft: 21 + 'em', marginRight: 1 + 'em' }}>Search</Nav.Link>
                            <Nav.Link href="#signup" style={{ marginRight: 1.5 + 'em', color: 'blue' }}>Sign Up</Nav.Link>
                            <Nav.Link href="#attack" style={{ marginRight: 1.5 + 'em', background: 'orange', color: 'white' }}>Under Attack?</Nav.Link>
                            <Nav.Link href="#login" style={{ background: 'blue', color: 'white' }}>Log in</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>

    );
}

