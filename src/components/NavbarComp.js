import React, {useContext} from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown} from "react-bootstrap";
import { UserContext } from "../context/user";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "bootstrap";




function NavbarComp() {
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()


  
  
  function handleLogout() {
    console.log('handleLogoutClick')
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser({});
        navigate("/Pet&Date")
       
      }
    });
    
  }
  return (
  
    
 
   
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand 
      href="#">Pet&Date 
    </Navbar.Brand>
    <Navbar.Toggle 
      aria-controls="navbarScroll"
    />
    <Navbar.Collapse id="navbarScroll">
      <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: "100px" }}
      navbarScroll
      >
      <Nav.Link 
        href="Pet&Date">Home
      </Nav.Link>
      <Nav.Link 
        href= "Pets">Pets
      </Nav.Link>
      <Nav.Link 
        href="UserProfile"> 
        Profile
      </Nav.Link>
      <NavDropdown title= 'Users Info' id="navbarScrollingDropdown">
        <NavDropdown.Item 
          href='Dates'>
          Dates
        </NavDropdown.Item>
        <NavDropdown.Item 
          href="PetCalendar">
          Your Pets' Calendar
        </NavDropdown.Item>
        <NavDropdown.Item 
          href="Settings">
          Settings
        </NavDropdown.Item>
          <NavDropdown.Divider />
            <Nav.Link 
              onClick={handleLogout}> 
              Logout
            </Nav.Link> 
        <NavDropdown.Item>
          {/* YOU CAN USE disabled in the nav.link tab to turn the link off but display text on page  */}
        </NavDropdown.Item>
        </NavDropdown>
      <Nav.Link 
        href="FAQ">
        FAQ
      </Nav.Link>
      </Nav>
    </Navbar.Collapse>
   </Container>
</Navbar>

  );
}

export default NavbarComp;
