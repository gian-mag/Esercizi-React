import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddComment extends Component {

    state = {
            comment: "",
            rate: "5",
            elementId: this.props.asin 
    }

    handleChange = (propertyName, propertyValue) => {
        this.setState({
                ...this.state.reservation,
                [propertyName]: propertyValue,
            
        })
    }

    addPost = async (e) => {

        
        e.preventDefault();

        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                method: 'POST',
                body: JSON.stringify({
                    comment: this.state.comment,
                    rate: this.state.rate,
                    elementId: this.state.elementId
                }),
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwYjUxMTVlODE3MTAwMTU1YjM1M2MiLCJpYXQiOjE2NjIwMzkzMTMsImV4cCI6MTY2MzI0ODkxM30.YFGlcMD6_WlGt6KbQi1b_2mhNfp14Ohl4xdVmVkMJFk",
                }
                
            })
            if(response.ok) {
                let data = await response.json();
                console.log(data)
                this.setState({
                        comment: "",
                        rate: "5",
                        elementId: ""
                })
                
            } else {
                console.log('Ocio brody non funge il form')
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {

        return (
            <Form onSubmit={this.addPost}>

                <Form.Group>
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select" value={this.state.rate} 
                    onChange={(e) => {
                        this.handleChange('rate', e.target.value)
                    }}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} value={this.state.comment} 
                    onChange={(e) => {
                        this.handleChange('comment', e.target.value)
                    }}
                    />
                </Form.Group>
                <br />
                <Button variant="info" type="submit">Submit</Button>

            </Form>
        )

    }

}

export default AddComment;