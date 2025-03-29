import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Electronics from './Electronics';
import Jwellery from './Jwellery';
import Men from './Men';
import Woman from './Woman';
import Card from './Card';

function NavBar1() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/electronics">Electronics</Nav.Link>
            <Nav.Link href="/jwellery">Jwellery</Nav.Link>
            <Nav.Link href="/men">Men Cloths</Nav.Link>
            <Nav.Link href="/woman">Woman Cloths</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/electronics' Component={Electronics}></Route>
        <Route path='/jwellery' Component={Jwellery}></Route>
        <Route path='/men' Component={Men}></Route>
        <Route path='/woman' Component={Woman}></Route>
        <Route path='/item' Component={Card}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default NavBar1;