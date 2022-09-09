import { Navbar, Nav, NavDropdown } from "react-bootstrap";


const NavBar = () => {

    return (

            <Navbar collapseOnSelect expand="lg" variant="dark" style={{ background: "#3E9CF0" }}>
                <Navbar.Brand href="#home">Weatheroo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                </Navbar.Collapse>
            </Navbar>

    )

}

export default NavBar;
