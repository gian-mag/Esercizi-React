import { Container, Row, Col, Button, Nav, Navbar, Form } from 'react-bootstrap'
import { FaHome, FaBookOpen } from 'react-icons/fa'
import ShowAlbum from './ShowAlbum'


const NavBar = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <Navbar variant="dark" className="navbar navbar-expand-md navbar-white bg-navbar fixed-left " expand="lg"
                        id="sidebar">
                        <Container fluid className="flex-column text-left">
                            <Navbar.Brand href="index.html" ><img
                                src="../logo/Spotify_Logo.png"
                                alt="Spotify_Logo"
                                width="131"
                                height="40"
                            /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll" className="flex-column">
                                <Nav

                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <div>
                                        <Nav.Link className="text-left" href="index.html"><FaHome className="first" />&nbsp; Home</Nav.Link>
                                        <Nav.Link className="text-left" href="#"><FaBookOpen className="first" />&nbsp; Your
                                            Library</Nav.Link>
                                    </div>
                                </Nav>
                                <Form className="input-group d-flex mt-3">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        id="searchField"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button
                                        type="button" id="button-addon1"
                                        className="btn btn-outline-secondary btn-sm">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                            <div className="nav-btn">
                                <div>
                                    <Button className="btn signup-btn" type="button">Sign Up</Button>
                                    <Button className="btn login-btn" type="button">Login</Button>
                                </div>
                                <div className="last-part">
                                    <a href="#1">Cookie Policy {' '}</a>
                                    |
                                    <a href="#1"> Privacy</a>
                                </div>
                            </div>
                        </Container>
                    </Navbar>
                </Col>
                <ShowAlbum />
            </Row >


            <Row>
                <div className="container-fluid fixed-bottom bg-container pt-1">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-2">
                            <div className="row">
                                <div
                                    className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
                                >
                                    <div className="row">
                                        <a href="#1">
                                            <img src="playerbuttons/Shuffle.png" alt="shuffle" />
                                        </a>
                                        <a href="#1">
                                            <img src="playerbuttons/Previous.png" alt="shuffle" />
                                        </a>
                                        <a href="#1">
                                            <img src="playerbuttons/Play.png" alt="shuffle" />
                                        </a>
                                        <a href="#1">
                                            <img src="playerbuttons/Next.png" alt="shuffle" />
                                        </a>
                                        <a href="#1">
                                            <img src="playerbuttons/Repeat.png" alt="shuffle" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center playBar py-3">
                                <div className="col-8 col-md-6">
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow="0"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Container >
    )

}

export default NavBar
