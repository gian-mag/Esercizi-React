import { Container, Row, Col } from 'react-bootstrap';



const Footer = () => {

    return (
        <Container fluid>
            <Row className="row text-center" style={{ background: "#3E9CF0" }} >
                <Col className="col-6 offset-3 text-left text-light" >

                    <Row className="row"

                    >
                        <Col className="col col-12 m-2 copyright text-center"
                            style={{ "color": "white", "font-size": "12px" }}>
                            © 1997-2022 Weather, Inc.
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    )

}

export default Footer;