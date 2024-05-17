
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { ShoppingCart } from 'lucide-react';

const NavbarPanel = () => {
  const countCart = useSelector((state) => state.cart);
  return (
    <div className="fixed top-0 left-0 right-0 z-10 ">
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container fluid>
          <Navbar.Brand
            style={{ color: 'royalblue', fontFamily: 'sans-serif' }}
          >
            NAIJAZON
          </Navbar.Brand>
          <Nav>
            <Nav.Link
              style={{ color: 'royalblue', fontFamily: 'sans-serif' }}
              to="/"
              as={Link}
            >
              Products
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav>
                <div className='hover:bg-blue-500 rounded-md text-white'><Button variant="" to='/signin' as={Link} >Sign in</Button></div>
                <Nav.Link
                  to="/cart"
                  as={Link}
                  data-count={countCart.length}
                  className="cart_btn"
                >
                  <ShoppingCart />
                </Nav.Link>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarPanel;
