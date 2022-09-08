import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const [jobs, setJobs] = useState([])
  const jobsFav = useSelector((state) => state.jobs.content.length)
  const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col xs={8} className="mx-auto">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={2} className="mt-3 justify-content-center">
          <Link to={"/favourites"}>
          <AiFillHeart className="text-center"/> : {jobsFav}
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
