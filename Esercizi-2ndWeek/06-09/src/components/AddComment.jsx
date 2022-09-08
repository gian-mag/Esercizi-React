import { Button, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const AddComment = (props) => {
  /* state = {
    comment: {
      comment: '',
      rate: 1,
      elementId: null,
    },
  } */

  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: null,
  })



  /* componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        comment: {
          ...this.state.comment,
          elementId: this.props.asin,
        },
      })
    }
  } */
  useEffect(() => {
    console.log('componentDidMount chiamato')
    setComment({
      ...comment,
      elementId: props.asin,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin])

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE3NDcwMTViYTcyMTAwMTVkYjdhODgiLCJpYXQiOjE2NjI0Njk4OTAsImV4cCI6MTY2MzY3OTQ5MH0.Rg9V6zC23xjWzG9FhEonZgSn6je4gXvV_BlWAPv7sgI',
          },
        }
      )
      if (response.ok) {
        // the comment has been sent succesfully!!
        alert('Comment was sent!')
        setComment({
          comment: '',
          rate: 1,
          elementId: null,
        })
      } else {
        console.log('error')
        alert('something went wrong')
      }
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <div>
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Label>Comment text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add comment here"
            value={comment.comment}
            onChange={(e) =>
              /* this.setState({
                comment: {
                  ...this.state.comment,
                  comment: e.target.value,
                },
              }) */
              setComment({
                ...comment,
                comment: e.target.value
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              /*  this.setState({
                 comment: {
                   ...this.state.comment,
                   rate: e.target.value,
                 }
               
               }) */
              setComment({
                ...comment,
                rate: e.target.value
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddComment
