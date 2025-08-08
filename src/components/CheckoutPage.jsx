import { useState } from 'react';
import OrderSummary from './OrderSummary';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
// import { useSelector, useDispatch } from 'react-redux';

// Temporary mock cart items (replace with Redux or API later)
const initialCartItems = [
  { id: 1, name: 'Product A', price: 50, quantity: 2 },
  { id: 2, name: 'Product B', price: 30, quantity: 1 },
];

const calculateTotalPrice = (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0);

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [shippingDetails, setShippingDetails] = useState(null);

  // const cartItems = useSelector((state) => state.cart);
  // const dispatch = useDispatch();

  const totalPrice = calculateTotalPrice(cartItems);

  const handleShippingSubmit = (details) => {
    setShippingDetails(details);
  };

  const handlePaymentSuccess = () => {
    alert('Order placed successfully!');
    // TODO: Clear cart, store order, navigate to confirmation page
  };

  return (
    <div className="checkout-page">
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>

      {/* Order Summary */}
      <OrderSummary cartItems={cartItems} totalPrice={totalPrice} />

      {/* Shipping Details */}
      <ShippingForm onShippingSubmit={handleShippingSubmit} />

      {/* Payment Form (only shown after shipping is complete) */}
      {shippingDetails && (
        <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
      )}
    </div>
  );
};

export default CheckoutPage;
