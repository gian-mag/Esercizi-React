import { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Job from './Job'
import { useSelector, useDispatch } from 'react-redux'
import { getJobsAction } from '../redux/actions'
import Spinner from 'react-bootstrap/spinner'
import Alert from 'react-bootstrap/alert'
import { setUsernameAction } from '../redux/actions'

const MainSearch = () => {
  const [query, setQuery] = useState('')

  const navigate = useNavigate()

  const jobs = useSelector((state) => state.job.results)
  const dispatch = useDispatch()

  const [formValue, setFormValue] = useState('')

  const loader = useSelector((state) => state.job.loading)
  const err = useSelector((state) => state.job.error)

  const userName = useSelector((state) => state.user.name)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getJobsAction(query))
  }

  const formSubmit = (e) => {
    e.preventDefault()
    console.log('stiamo inviando il form')
    // qua dobbiamo dispatchare un'azione per utilizzare formValue come payload
    dispatch(setUsernameAction(formValue))
  }

  const logout = () => {
    window.location.reload(false);
    localStorage.clear()
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          {userName ? (
            <>
              <span className="mr-2">Hello, {userName}!</span>
              <Button onClick={() =>  logout() }>Levate</Button>
            </>
          ) : (<>
            <Form onSubmit={formSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Log in here"
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                />
              </Form.Group>
            </Form>
          </>)
          }
          {userName ? (<div></div>) : (
            <>
            < Button onClick={() => navigate('/favourites')}>Favourites</ Button>
            </>)
          }
          
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
          {err && (
            <Alert variant="danger">
              Errore nel recupero delle prenotazioni :(
            </Alert>
          )}
          {loader && (<div className="spinny"><Spinner animation="grow" variant="success" /></div>)}

          {jobs.length === 0 && !loader && !err ? (<div className="spinny"><h2>OOH non hai ancora cercato nulla, testina!</h2></div>) : (
            <>

              {jobs.map((jobData) => (
                <Job key={jobData._id} data={jobData} />
              ))}

            </>)}

        </Col>
      </Row>
    </Container >
  )
}

export default MainSearch
