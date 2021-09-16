import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"
export const Header = ({login = false}) => {
  return (
    <Container fluid className="p-0 mb-5">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Controle de visitações</Navbar.Brand>
          {login && (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <NavDropdown title="Opções" id="basic-nav-dropdown">
                      <Link to="/visitadores-cadastro" className="dropdown-item">Cadastro de visitadores</Link>
                      <Link to="" className="dropdown-item">Cadastro de visitações</Link>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
    </Container>
  );
};
