import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeCart = (id) => {
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <div className="col-md-4 " key={product.id}>
      <Card style={{ width: '18rem' }}>
        <div className="m-auto">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: '100px', height: '120px' }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>&#8358;{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white">
          <Button variant="danger" onClick={() => removeCart(product.id)}>
            remove item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div >
      <div className="row mt-5">{cards}</div>;
      <section className="row m-5 ">
        <Card style={{ width: '18rem' }}>
          <p>Total price of items</p>&#8358;
          {products.reduce((total, num) => total + num.price, 0)}
          <Card.Footer className="bg-white">
            <Button className="w-full rounded-md " variant="success" >
            <Link style={{textDecoration:"none", color:"white"}} to="/pay">Pay Now</Link>
            </Button>
          </Card.Footer>
        </Card>
      </section>
    </div>
  );
};

export default Cart;
