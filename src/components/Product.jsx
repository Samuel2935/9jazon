import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Product = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);
  console.log(products);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div key={product.id} className="col-md-3">
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
          {/* 	&#8358; &#x20A6; */}
          <Card.Text>&#8358;{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white">
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      {loading ? (
        <div className="row mt-5 mb-5"> {cards}</div>
      ) :  (
        <Stack
          className="m-5 flex justify-items-center"
          sx={{ color: 'greyy' }}
          spacing={2}
          direction="row"
        >
          <CircularProgress color="secondary" />
        </Stack>
      )}
    </div>
  );
};

export default Product;
