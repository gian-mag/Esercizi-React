import { Badge } from 'react-bootstrap';

const MyBadge = (prop) => {

    return   <h3>
                {prop.title} <Badge variant={prop.color}>New</Badge>
             </h3>
  }

  export default MyBadge;