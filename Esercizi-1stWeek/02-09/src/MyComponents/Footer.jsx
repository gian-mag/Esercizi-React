import { Container, Row, Col, Button } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';


const Footer = () => {

    return (
        <Container fluid>
            <Row className="row text-center mt-5 " style={{"background": "#221f1f"}} >
                <Col className="col-6 offset-3 text-left text-light" >
                    <Row className="row">
                        <Col className="col col-12  d-flex mb-3 justify-content-center">
                            <Facebook className="mx-3 text-light" />
                            <Instagram className="mx-3 text-light text-light" />
                            <Twitter className="mx-3 text-light text-light" />
                            <Youtube className="mx-3 text-light text-light" />
                        </Col>
                    </Row>
                    <Row
                        className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4"

                    >
                        <Col className="col" >
                            <Row className="row" >
                                <Col className="col col-12 ">
                                    <p>
                                        <a style={{ "color": "#838383" }} href="#1" alt="footer link">Audio and Subtitles</a>
                                    </p>
                                    <p>
                                        <a href="#2" alt="footer link">Media Center</a>
                                    </p>
                                    <p>
                                        <a href="#3" alt="footer link">Privacy</a>
                                    </p>
                                    <p>
                                        <a  href="#4" alt="footer link">Contact us</a>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="col">
                            <Row className="row">
                                <Col className="col col-12 ">
                                    <p>
                                        <a href="#1" alt="footer link">Audio Description</a>
                                    </p>
                                    <p>
                                        <a href="#2" alt="footer link">Investor Relations</a>
                                    </p>
                                    <p >
                                        <a href="#3" alt="footer link">Legal Notices</a>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="col">
                            <Row className="row">
                                <Col className="col col-12 ">
                                    <p >
                                        <a href="#1" alt="footer link">Help Center</a>
                                    </p>
                                    <p >
                                        <a href="#2" alt="footer link">Jobs</a>
                                    </p>
                                    <p>
                                        <a href="#3" alt="footer link">Cookie Preferences</a>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="col">
                            <Row className="row">
                                <Col className="col col-12">
                                    <p>
                                        <a href="#1" alt="footer link">Gift Cards</a>
                                    </p>
                                    <p>
                                        <a href="#2" alt="footer link">Terms of Use</a>
                                    </p>
                                    <p>
                                        <a href="#3" alt="footer link">Corporate Information</a>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col className="col col-12 text-left mb-2">
                            <Button
                                type="button"
                                className="btn btn-sm footer-button rounded-0 mt-3 "
                                style={{"background": "#221f1f", "color": "#838383"}}
                                variant="dark"

                            >
                                Service Code
                            </Button>
                        </Col>
                    </Row>
                    <Row className="row"

                    >
                        <Col className="col col-12 mb-2 mt-2 copyright"
                            style={{ "color": "#838383", "font-size": "10px"}}>
                            © 1997-2022 Netflix, Inc.
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}

export default Footer;