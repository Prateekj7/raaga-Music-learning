import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MenuItem() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "white" }}>
      <Container style={{ backgroundColor: "white" }}>
        <Navbar.Brand className="pb-2" href="musicstation">
          <h3>Indian Classic</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="pb-4 mt-4 justify-content-end">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="">
              <NavDropdown.Item href="musicstation">
                Indian Classical
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ghazal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Indian Pop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Western Classical
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuItem;
