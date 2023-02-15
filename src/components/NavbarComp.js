import React, {useContext} from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import { UserContext } from "../context/user";
import "bootstrap/dist/css/bootstrap.min.css";



function NavbarComp() {
  const {user} = useContext(UserContext)
 


  
  
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        user(null);
      }
    });
    
  }
  return (
  
    
 
   
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Pet&Date </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="HomePage">Home</Nav.Link>
            <Nav.Link href="Login"> Login</Nav.Link>
            <Nav.Link href="UserProfile"> Profile</Nav.Link>
            <NavDropdown title="UserInfo" id="navbarScrollingDropdown">
              <NavDropdown.Item href="Dates">Schedule</NavDropdown.Item>
              <NavDropdown.Item href="Pets">
                Pets
                 </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item  onClick={handleLogoutClick} href="Logout">
            Logout 
                {/* YOU CAN USE disabled in the nav.link tab to turn the link off but display text on page  */}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="FAQ">FAQ</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavbarComp;
