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
                  <Link to="/category/keyboards" className="nav-link" aria-current="page">Keyboards</Link>
                  <Link to="/category/mouses" className="nav-link" aria-current="page">Mouses</Link>
                  <Link to="/category/mousepads" className="nav-link" aria-current="page">MousePads</Link>
                  <Link to="/category/pc´s" className="nav-link" aria-current="page">PC´s</Link>
                </NavDropdown>
                </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </header>
  );
}