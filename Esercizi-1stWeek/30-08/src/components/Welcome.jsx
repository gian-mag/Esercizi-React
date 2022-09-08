import { Jumbotron } from 'react-bootstrap';
import LatestRelease from './LatestRelease';

const Welcome = () => {

    return (
        <Jumbotron className="mt-5">
            <h1>Libri Fantasy</h1>
            <p>
                Tutti i libri sono nuovi e sigillati. Da noi troverete solo il meglio. Affidabilità e credibilità, servizio clienti al top
            </p>
        </Jumbotron>,
        <LatestRelease></LatestRelease>
    )
}

export default Welcome;