import { Card } from 'react-bootstrap'

const SingleWeather = (props) => {

    return (


        < Card border="light" style={{ width: '30rem' }} className="card" >
            <Card.Header className="text-center headerCard">{props.meteo.name}</Card.Header>
            <Card.Body className="text-center">
                <Card.Title className="text-center text-uppercase">{props.meteo.weather[0].description}</Card.Title>
                <Card.Text>
                    <img src={'http://openweathermap.org/img/wn/' + props.meteo.weather[0].icon + '@2x.png'} alt="icon" />
                    <h3> {(props.meteo.main.temp - 273.15).toFixed(0)}°</h3>
                    <span className="text-start">Min:  {(props.meteo.main.temp_min - 273.15).toFixed(0)}°</span> - <span className="text-end">Max:  {(props.meteo.main.temp_max - 273.15).toFixed(0)}°</span>
                    <br />
                    <p>Umidità: {props.meteo.main.humidity}%</p>

                    <p>Vento: {props.meteo.wind.speed}km/h</p>
                    
                </Card.Text>
            </Card.Body>
        </ Card>
    )

}

export default SingleWeather