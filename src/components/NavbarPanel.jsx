import { SignedIn, SignedOut, UserButton, useClerk } from '@clerk/clerk-react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';

// function SignUpButton() {
//   const clerk = useClerk();

//   return (
//     <button className="sign-up-btn" onClick={() => clerk.openSignUp({})}>
//       Sign up
//     </button>
//   );
// }

function SignInButton() {
  const clerk = useClerk();

  return (
    <button className="sign-in-btn" onClick={() => clerk.openSignIn({})}>
      Sign in
    </button>
  );
}



const NavbarPanel = () => {
  const countCart = useSelector((state) => state.cart);
  
  return (
    <div className="fixed border-b top-0 left-0 right-0 z-10 ">
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
          <Navbar.Collapse className="flex justify-content-end">
            <Navbar.Text>
              <Nav>
                <div className="flex">
                  <nav className='nav_bar'>
                    <SignedOut>
                      <ul>
                        {/* <li>
                          <SignUpButton />
                        </li> */}

                        <li>
                          <SignInButton />
                        </li>
                      </ul>
                    </SignedOut>

                    <SignedIn >
                      <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                  </nav>
                  <Nav.Link
                  to="/cart"
                  as={Link}
                  // let isLoggedIn = true;
                  // isLoggedIn ? console.log("Welcome back!") : console.log("Please log in.");
                
                  data-count={countCart.length}
                  
                  className="cart_btn"
                >
                  <ShoppingCart className='text-blue-500'/>
                </Nav.Link>
                </div>
              
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarPanel;
