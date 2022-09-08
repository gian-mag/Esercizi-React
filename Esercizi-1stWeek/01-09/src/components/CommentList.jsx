import { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class CommentList extends Component {

    render() {
        return (

                <ListGroup.Item className="text-dark">{this.props.text} - {this.props.rate}</ListGroup.Item>
                
        )
    }
}

export default CommentList;