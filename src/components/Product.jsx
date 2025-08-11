import { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

import {
  Button,
  Card,
  Form,
  Row,
  Col,
  Container,
  Pagination,
  // Badge,
} from 'react-bootstrap';
// import Skeleton from '@mui/material/Skeleton';

const Product = () => {
  const dispatch = useDispatch();
  // const cartItems = useSelector((state) => state.cart);

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [loading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
        setFiltered(data);
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const result = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(applySorting(result, sortOption));
    setCurrentPage(1);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOption(value);
    const sorted = applySorting(filtered, value);
    setFiltered(sorted);
  };

  const applySorting = (data, option) => {
    switch (option) {
      case 'price-asc':
        return [...data].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...data].sort((a, b) => b.price - a.price);
      case 'title-asc':
        return [...data].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      case 'title-desc':
        return [...data].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      default:
        return data;
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / productsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    return filtered.slice(start, start + productsPerPage);
  }, [filtered, currentPage]);

  const renderSkeletonCards = () => (
<Row>
  {paginatedProducts.map((product) => (
    <Col key={product.id} xs={12} sm={6} md={4} className="mb-4 d-flex bg-rose-600]">
      <Card className="w-100 h-100 d-flex flex-column">
        <div className="text-center pt-3">
          <Card.Img
            variant="top"
            src={product.image}
            style={{
              width: '100px',
              height: '120px',
              objectFit: 'contain',
            }}
          />
        </div>

        <Card.Body className="flex-grow-1 d-flex flex-column">
          <Card.Title
            className="fs-6 text-truncate"
            title={product.title}
            style={{ lineHeight: '1.2em' }}
          >
            {product.title}
          </Card.Title>
          <Card.Text className="mt-auto">&#8358;{product.price}</Card.Text>
        </Card.Body>

        <Card.Footer className="bg-white">
          <Button
            variant="primary"
            className="w-100"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  ))}
</Row>

  );

  return (
    <Container className="my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* <h4 className="fw-bold">
          Products{' '}
          <Badge bg="secondary">{cartItems.length} in cart</Badge>
        </h4> */}
        <div className="d-flex gap-2">
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <Form.Select value={sortOption} onChange={handleSort}>
            <option value="">Sort</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="title-asc">Title: A → Z</option>
            <option value="title-desc">Title: Z → A</option>
          </Form.Select>
        </div>
      </div>

      {/* Product Grid */}
      {loading ? (
        renderSkeletonCards()
      ) : (
        <>
          <Row>
            {paginatedProducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} className="mb-4">
                <Card>
                  <div className="text-center pt-3">
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{
                        width: '100px',
                        height: '120px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>&#8358;{product.price}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white">
                    <Button
                      variant="primary"
                      className="w-100"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="justify-content-center">
              {[...Array(totalPages)].map((_, idx) => (
                <Pagination.Item
                  key={idx + 1}
                  active={idx + 1 === currentPage}
                  onClick={() => setCurrentPage(idx + 1)}
                >
                  {idx + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          )}
        </>
      )}
    </Container>
  );
};

export default Product;
