import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/Auth/context";
import { useContext } from "react";
import logo from '../../img/logo-site-1.png'

export const Header = ({login = false}) => {
  const { authState } = useContext(AuthContext);
  // const logo = require()
  console.log(logo)
  function logout() {
    authState.jwt_token = ''
    localStorage.setItem('token', '');
    window.location.reload()
  }
  

  return (
    <Container fluid className="p-0 mb-3">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand style={{cursor: "pointer"}} >
            <a href="https://www.essencialdf.com.br/" target="_blank" className="me-3" rel="noreferrer">
              <span><img alt="logo-essencial" src={logo}></img></span>
              
            </a>
            Controle de visitações
          </Navbar.Brand>
          
          {login && (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <NavDropdown title="Opções" id="basic-nav-dropdown">                    
                      <Link to="/" className="dropdown-item">Cadastro de visitações</Link>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logout}>
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
