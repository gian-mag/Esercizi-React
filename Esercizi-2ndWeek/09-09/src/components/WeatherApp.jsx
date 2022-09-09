import { useState, useEffect } from "react"

import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import SingleWeather from './SingleWeather'

import Carousel from 'react-bootstrap/Carousel'


const WeatherApp = () => {

    const [cityName, setCityName] = useState('')
    const [weatherArray, setWeatherArray] = useState(null)



    const arrayNames = [
        {
            name: "London",
            country: "uk",
            id: 0
        },
        {
            name: 'Rome',
            country: 'it',
            id: 1
        },
        {
            name: 'New York',
            country: 'us',
            id: 2
        },
        {
            name: 'Pechino',
            country: 'china',
            id: 3
        },
        {
            name: 'Milan',
            country: 'it',
            id: 4
        },
        {
            name: 'Hong Kong',
            country: 'japan',
            id: 5
        },
    ]


    const getWeather = async (e) => {

        try {
            let response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3c5b56745eb5d6e933d7fdd1908ab4c6&lang=it`
            )
            console.log('RESPONSE: ', response)

            if (response.ok) {
                console.log("son partita")
                let weather = await response.json()
                setWeatherArray(weather)
                setCityName('')
            } else {
                console.log('error')


            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ "background": "grey" }}>
            <Container fluid >
                <Row >
                    <Col className=" m-5">

                        <Form onSubmit={getWeather}>
                            <Form.Group>
                                <Form.Label>Città</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={cityName}
                                    placeholder="Es: Roma, Milano.."
                                    onChange={(e) =>
                                        setCityName(e.target.value)
                                    }
                                />

                            </Form.Group>


                        </Form>

                    </Col>

                </Row>

                <Row className="pb-5">
                    <div className="wrapper">
                        <h3 className="text-light">Città principali </h3>
                        <Carousel>
                            {
                                arrayNames.map((names) =>

                                (


                                    <Carousel.Item key={names.id} onClick={() => {
                                        setCityName(names.name)
                                        console.log(cityName)
                                        getWeather()
                                    }

                                    }
                                        className="text-light"
                                    >

                                        <div className="carouselApp">
                                            <h3>{names.name}</h3>

                                        </div>

                                    </Carousel.Item>

                                )
                                )
                            }

                        </Carousel>
                    </div>
                </Row>
                {
                    weatherArray !== null &&
                    (<Row className="pb-5">
                        <div className="wrapper">
                            <SingleWeather meteo={weatherArray} />
                        </div>
                    </Row>)
                }

            </Container >



        </div >
    )


}

export default WeatherApp