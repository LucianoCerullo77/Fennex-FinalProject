import CartWidget from "../CartWidget/CartWidget";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom"
export default function Header () {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="textLogo">
            <Link to="/" className="nav-link active" aria-current="page">Fennex</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                <Link to="/products" className="nav-link active" aria-current="page">Products</Link>
                <NavDropdown title="Category List" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/category/1" className="nav-link" aria-current="page">Keyboards</NavDropdown.Item>
                  <NavDropdown.Item href="/category/2" className="nav-link" aria-current="page">Mouses</NavDropdown.Item>
                  <NavDropdown.Item href="/category/3" className="nav-link" aria-current="page">MousePads</NavDropdown.Item>
                  <NavDropdown.Item href="/category/4" className="nav-link" aria-current="page">PC´s</NavDropdown.Item>
                </NavDropdown>
                </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </header>
  );
}