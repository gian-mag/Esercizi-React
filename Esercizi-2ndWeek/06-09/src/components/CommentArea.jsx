
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import { useState, useEffect } from 'react'

const CommentArea = (props) => {
  /* state = {
    comments: [], // comments will go here
    isLoading: false,
    isError: false,
  } */

  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)


  const tryFetch = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.asin}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE3NDcwMTViYTcyMTAwMTVkYjdhODgiLCJpYXQiOjE2NjI0Njk4OTAsImV4cCI6MTY2MzY3OTQ5MH0.Rg9V6zC23xjWzG9FhEonZgSn6je4gXvV_BlWAPv7sgI',
          },
        }
      )
      console.log('RESPONSE: ', response)
      console.log(props.asin)
      if (response.ok) {
        let post = await response.json()
        /* this.setState({
          comments: comments,
          isLoading: false,
          isError: false,
        
        }) */
        
        setComments(post)
        setIsLoading(false)
        setIsError(false)
      } else {
        console.log('error')
        console.log(props)
        /* this.setState({ isLoading: false, isError: true }) */
        setIsLoading(false)
        setIsError(true)

      }
    } catch (error) {
      console.log(error)
      /* this.setState({ isLoading: false, isError: true }) */
      setIsLoading(false)
        setIsError(true)
    }
  }

  useEffect(() => {
    console.log('componentDidMount chiamato')
    tryFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin])

    return (
      <div>
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={props.asin} />
        <CommentList commentsToShow={comments} />
      </div>
    )
  }


export default CommentArea
