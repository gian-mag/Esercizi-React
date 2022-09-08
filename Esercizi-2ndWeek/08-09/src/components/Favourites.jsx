import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'

const Favourites = () => {

    const favJobs = useSelector((state) => state.jobs.content)
    /* const favJobsLength = useSelector((state) => state.job.content.length)

    const dispatch = useDispatch() */

    return (
        <Container>
            <Row>
                <Col>
                    {favJobs.map((job, i) => (
                        <Job key={i} data={job}/>
                        
                    ))}
                </Col>
            </Row>
        </Container>
    )

}

export default Favourites