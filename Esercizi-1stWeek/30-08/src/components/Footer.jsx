import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <Container fluid> 
            <Row lg={12} className="text-center bg-dark text-light">
                <Col >
                    My Favourite BookShop &copy; since 2002
                </Col>
            </Row>
        </Container>
    )
}

export default Footer; 