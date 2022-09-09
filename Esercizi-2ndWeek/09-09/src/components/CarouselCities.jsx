import Carousel from 'react-bootstrap/Carousel'

const CarouselCities = (props) => {

    return (
        <Carousel>
            {
                props.arrayNames.map((names) =>

                (


                    <Carousel.Item key={names.id}>

                        <div className="carouselApp">
                            <h3>{names.name}</h3>
                            <p>{(names.country).toLowerCase()}</p>
                        </div>

                    </Carousel.Item>

                )
                )
            }

        </Carousel>
    )

}
export default CarouselCities


