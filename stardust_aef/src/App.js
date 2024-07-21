// import logo from './logo.svg';
// import './App.css';

import Stardust from './assets/Stardust.svg'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ImageComponent from './ImageComponent';


function App() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <img
              alt=""
              src={Stardust}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          <Navbar.Brand href="#home">Stardust</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Explore</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
              <Nav.Link href="#pricing">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ImageComponent/>
      
      
    </>
  );
}

export default App;
