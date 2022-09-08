
import { Card} from 'react-bootstrap';
import { Component } from 'react';
import fantasy from '../data/fantasy.json';
import { Container, Row, Col } from "react-bootstrap";

class LatestRelease extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                        {fantasy.map((book) => 
                        <Col  key={book.asin} sm={12} md={4} lg={2} className="my-2">
                            <Card className=" w-100 h-100 text-center " >
                                <Card.Img variant="top" src={book.img} />
                                <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>
                                    {book.category} <br />
                                    {book.price}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                        }
                </Row>
            </Container>
        )
    }
}

export default LatestRelease;