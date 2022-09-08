import { Component } from 'react';
import Row from 'react-bootstrap/Row';

class SingleMovie extends Component {

    render() {

        return (
            <Row className="d-flex justify-content-center marginCard">
                <img className="dimensions img-fluid mx-1" src={this.props.movie.Poster} alt="poster"></img>
            </Row>
        )

    }

}

export default SingleMovie;