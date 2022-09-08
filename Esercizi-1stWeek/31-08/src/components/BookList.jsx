import fantasy from '../data/fantasy.json';
import { Component } from 'react';
import { Form, FormGroup, Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';

class BookList extends Component {

    state = {
        research: {
            search: '',
        }
    };

    handleChange = (propretyName, propretyValue) => {
        this.setState({
            research: {
                ...this.state.research,
                [propretyName]: propretyValue
            }
        })
    }

    book = fantasy;

    bookFilter(searchInput) {
        this.book = fantasy.filter((e) => e.title.toLowerCase().includes(searchInput.toLowerCase()))
    }

    render() {
        return (
            <Container fluid>

                <Form>
                    <FormGroup>
                        <Form.Control size="sm" type="text" 
                        value={this.state.research.search} 
                        onChange={(e) => {
                            this.handleChange('search', e.target.value);
                            this.bookFilter(e.target.value)
                        }}
                        />
                    </FormGroup>
                </Form>
                
                    <Row>
                        {this.book.map((childBook) => 
                            <Col sm={12} md={4} lg={2} className=" my-2 w-100 h-100">
                            <SingleBook className="d-none" key={childBook.asin} src={childBook.img} title={childBook.title} category={childBook.category} price={childBook.price}></SingleBook>
                        </Col>)
                        }
                    </Row>
            </Container>
        )
    }

}

export default BookList;
