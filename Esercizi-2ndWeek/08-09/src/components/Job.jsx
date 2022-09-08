import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FcLike } from 'react-icons/fc'
import { TiHeartOutline } from 'react-icons/ti'


const Job = ({ data }) => {

  const jobs = useSelector((state) => state.jobs.content)
  const dispatch = useDispatch()


  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={2}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      {jobs.some((e) => e._id === data._id) ? (
        <Col xs={2}>
          <TiHeartOutline />
        </Col>) : (<Col xs={2}>
          <FcLike onClick={() => 
              dispatch({
                type: 'ADD_TO_FAV',
                payload: data
              })
              
            }
          
          />
        </Col>
      )
      }

    </Row>
  )

}


export default Job
