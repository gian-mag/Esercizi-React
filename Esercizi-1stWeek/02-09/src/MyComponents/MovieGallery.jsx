import SingleMovie from './SingleMovie'
import { Row, Col } from 'react-bootstrap'
import { Component } from 'react';

class MovieGallery extends Component {

    render() {

        return (

            
                <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 no-gutters text-center">


                    {
                        this.props.gallery.map((movie) => {
                            return  <Col key={movie.imdbID} className="d-flex flex-column justify-content-center">
                                        <SingleMovie  movie={movie} />
                                    </Col>
                        })
                    }


                </Row>
            

        )

    }

}

export default MovieGallery;