'use strict';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Form, FormControl, Button } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            //src="/logo512.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}QA Cinema</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <NavDropdown title="Movies" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/CurrentMovies">Current Movies</NavDropdown.Item>
                            <NavDropdown.Item href="/UpcomingMovies">Upcoming Movies</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Tickets">Tickets</Nav.Link>
                        <Nav.Link href="/Forum">Forum</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div >
    );
}
export default NavBar;