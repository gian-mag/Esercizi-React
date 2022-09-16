import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import SingleAlbum from './SingleAlbum'

const ShowAlbum = () => {

    const [singleRock, setSingleRock] = useState([])
    const [singlePop, setSinglePop] = useState([])
    const [singleHipHop, setSingleHipHop] = useState([])

    const [rockRandomArtists, setRockRandomArtists] = useState([])
    const [popRandomArtists, setPopRandomArtists] = useState([])
    const [hipHopRandomArtists, setHipHopRandomArtists] = useState([])

    const rockArtists = [
        'queen',
        'u2',
        'thepolice',
        'eagles',
        'thedoors',
        'oasis',
        'thewho',
        'bonjovi',
    ]

    const popArtists = [
        'maroon5',
        'coldplay',
        'onerepublic',
        'jamesblunt',
        'katyperry',
        'arianagrande',
    ]

    const hipHopArtists = [
        'eminem',
        'snoopdogg',
        'lilwayne',
        'drake',
        'kanyewest',
    ]

    const Carica = () => {

        while (rockRandomArtists.length < 4) {
            
            let artist =
                rockArtists[Math.floor(Math.random() * rockArtists.length)]
            if (!rockRandomArtists.includes(artist)) {
                
                rockRandomArtists.push(artist) 
            }
        }

        while (popRandomArtists.length < 4) {
            let artist = popArtists[Math.floor(Math.random() * popArtists.length)]
            if (!popRandomArtists.includes(artist)) {
                popRandomArtists.push(artist)
            }
        }

        while (hipHopRandomArtists.length < 4) {
            let artist =
                hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)]
            if (!hipHopRandomArtists.includes(artist)) {
                hipHopRandomArtists.push(artist)
            }
        }

        console.log(rockRandomArtists)
        console.log(popRandomArtists)
        console.log(hipHopRandomArtists)

        for (let j = 0; j < rockRandomArtists.length; j++)
            handleArtist(rockRandomArtists[j], setSingleRock)


        for (let k = 0; k < popRandomArtists.length; k++)
            handleArtist(popRandomArtists[k], setSinglePop)

        for (let l = 0; l < hipHopRandomArtists.length; l++)
            handleArtist(hipHopRandomArtists[l], setSingleHipHop)

        console.log(singleRock)
        console.log(singlePop)
        console.log(singleHipHop)

    }


    useEffect(() => {
        Carica()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const headers = new Headers({
        // sets the headers
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
    })


    const handleArtist = async (artistName, func) => {

        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
                artistName,
                {
                    method: 'GET',
                    headers,
                }
            )
            if (response.ok) {
                let result = await response.json()
                /* let setResult = await result.data */
                func(result.data)
                console.log(result)
            } else {
                console.log('error')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Col className="col-12 col-md-9 offset-md-3 mainPage">
            <Row>
                <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                    <a href="#1">TRENDING</a>
                    <a href="#1">PODCAST</a>
                    <a href="#1">MOODS AND GENRES</a>
                    <a href="#1">NEW RELEASES</a>
                    <a href="#1">DISCOVER</a>
                </Col>
            </Row>
            <Row>
                <Col className="col-10">
                    <div id="searchResults" className="text-left" style={{ display: "none" }}>
                        <h2>Search Results</h2>
                        <Row
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                        ></Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="col-10">
                    <div id="rock" className="text-left">
                        <h2>Rock Classics</h2>
                        <Row
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="rockSection"
                        >
                            {
                                rockRandomArtists && singleRock.map((song, i) =>
                                    <SingleAlbum key={i} songInfo={song} />
                                )
                            }

                        </Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="col-10">
                    <div id="pop" className="text-left">
                        <h2>Pop Culture</h2>
                        <Row
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="popSection"
                        >
                            {
                                popRandomArtists && singlePop.map((song, i) =>
                                    <SingleAlbum key={i} songInfo={song} />
                                )
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="col-10">
                    <div id="hiphop" className="text-left">
                        <h2>#HipHop</h2>
                        <Row
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="hipHopSection"
                        >
                            {
                                hipHopRandomArtists && singleHipHop.map((song, i) =>
                                    <SingleAlbum key={i} songInfo={song} />
                                )
                            }
                        </Row>
                    </div>

                </Col>
            </Row>
        </Col>
    )
}

export default ShowAlbum