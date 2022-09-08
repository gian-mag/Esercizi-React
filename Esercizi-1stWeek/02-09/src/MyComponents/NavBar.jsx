import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Search, BellFill, PersonFill, Grid3x3GapFill, GridFill} from 'react-bootstrap-icons';


const NavBar = () => {
    return (
        <div>
        <Navbar expand="lg" style={{"background": "#221f1f"}}
            variant="dark"
        >
            <Navbar.Brand href="#home">
                <img src="assets/logo.png" alt="FlexNit" style={{"width": "100px", "height": "55px"}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"
                style={{"border: 1px solid": "rgba(255,255,255,.1)"}}
            />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <Nav.Link href="#home" className="font-weight-bold">Home</Nav.Link>

                    <Nav.Link href="#tvshow" className="font-weight-bold">TV Shows</Nav.Link>

                    <Nav.Link href="#movies" className="font-weight-bold">Movies</Nav.Link>

                    <Nav.Link href="#added" className="font-weight-bold">Recently Added</Nav.Link>

                    <Nav.Link href="#mylist" className="font-weight-bold">My List</Nav.Link>


                </Nav>

                <Nav className="d-flex justify-content-center flex-row">
                    <div>
                        <Search className="text-light mx-2 mx-md-5 mx-lg-3" />
                    </div>

                    <div id="kids" className="text-light mx-2 mx-md-5 mx-lg-3">KIDS</div>
                    <div>
                        <BellFill className="text-light mx-2 mx-md-5 mx-lg-3" />
                    </div>
                    <div>
                        <PersonFill className="text-light mx-2 mx-md-5 mx-lg-3" />
                    </div>
                </Nav>


            </Navbar.Collapse>
            
        </Navbar >
        <Navbar bg="dark" id="TV">
                    <Container className="justify-content-between" fluid>
                        <Navbar.Brand className="d-flex align-items-center w-50" href="#home">
                            <h2 className='text-light mr-3'>TV Shows</h2>
                            
                            <DropdownButton id="navDropdown" style={{"background": "#221f1f"}} variant="dark" className="text-light ms-4 menuGenre" title="Genres ">
                                <Dropdown.Item href="#action/3.1">Comedy</Dropdown.Item>
                                <Dropdown.Item href="#action/3.2">
                                    Drama
                                </Dropdown.Item>
                                <Dropdown.Item href="#action/3.3">Thriller</Dropdown.Item>
                            </DropdownButton>
                        </Navbar.Brand>
                        <Nav className="flex-row justify-content-evenly">
                            <Nav.Link className="text-light" href="#search"><GridFill /></Nav.Link>
                            <Nav.Link className="text-light" href="#memes">
                                <Grid3x3GapFill />
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
        

        </div>

    )

}

export default NavBar;