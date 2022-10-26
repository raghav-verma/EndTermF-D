import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';


function Navbars() {

  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{ fontSize: "1.2em" }}>
      <Container>
        <Navbar.Brand href="/">
          <img style={{ height: "50px", width: "100px" }} src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link href="/estates">Properties</Nav.Link>
            {localStorage.getItem("logined") && JSON.parse(localStorage.getItem("logined")).type == "seller" && <Nav.Link href="/addestate" eventKey={2}>Add Property</Nav.Link>}
            {localStorage.getItem("logined") ? <Nav.Link onClick={() => {
              localStorage.removeItem("logined");
              navigate('/login')
            }} eventKey={2}>Logout</Nav.Link> : <Nav.Link eventKey={2} href="/login">
              Sign In
              <MdOutlineAccountCircle style={{ fontSize: "1.5em", color: "black", marginLeft: "5px" }} />
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;