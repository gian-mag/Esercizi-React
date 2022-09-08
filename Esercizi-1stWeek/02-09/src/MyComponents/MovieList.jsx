import { Component } from 'react'
import { Container } from 'react-bootstrap'
import MovieGallery from './MovieGallery';

class MyMain extends Component {
    state = {
        key: '11776e18',
        harryPotter: [],
        signoreDegliAnelli: [],
        fastAndFurious: [],
    }
    componentDidMount() {
        this.fetchSaga('harry', 'potter', 'harryPotter')
        this.fetchSaga('fast', 'and%20furious', 'fastAndFurious')
        this.fetchSaga('lord', 'of%20the%20ring', 'signoreDegliAnelli')
    }
    async fetchSaga(first, second, complete) {
        try {
            let response = await fetch(
                `http://www.omdbapi.com/?apikey=${this.state.key}&s=${first}%20${second}`);
            if (response.ok) {
                let movieArray = await response.json();
                console.log(movieArray.Search);
                this.setState({
                    [complete]: movieArray.Search,
                });
            } else {
                console.log("qualcosa è andato storto");
            }
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <Container fluid style={{"background": "#221f1f"}} >
                <h4 className="pt-3" style={{"color": "white"}}>Harry Potter</h4>
                <MovieGallery  gallery={this.state.harryPotter} />
                <h4 className="pt-3" style={{"color": "white"}}>Lord of The Rings</h4>
                <MovieGallery gallery={this.state.signoreDegliAnelli} />
                <h4 className="pt-3" style={{"color": "white"}}>Fast&Furious</h4>
                <MovieGallery gallery={this.state.fastAndFurious} />
            </Container>
        )
    }
}

export default MyMain;