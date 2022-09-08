import { Card } from 'react-bootstrap';
import { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";

class SingleBook extends Component {

    state = {
        selected: true,
    }

    render(props) {
        return (

                            <Card className=" w-100 h-100 text-center" onClick={(e) => {
                                this.setState({ selected: !this.state.selected });
                                console.log(this.state.selected);
                                if(this.state.selected === true) {
                                    e.target.classList.add("selected");
                                } else {
                                    e.target.classList.remove("selected")
                                }}
                                }>
                                <Card.Img variant="top" src={this.props.src} />
                                <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Text>
                                    {this.props.category} <br />
                                    {this.props.price}
                                </Card.Text>
                                </Card.Body>
                            </Card>

        )
    }
}

export default SingleBook;