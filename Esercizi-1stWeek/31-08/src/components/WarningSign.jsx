import { Alert } from 'react-bootstrap';

const WarningSign = (prop) => {
    return  <Alert variant={prop.variant}>
      This is a danger alert—check it out!
    </Alert>;
    
}
  export default WarningSign;