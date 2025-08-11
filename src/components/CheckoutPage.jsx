// import { useState } from 'react';
// import OrderSummary from './OrderSummary';
// import ShippingForm from './ShippingForm';
// import PaymentForm from './PaymentForm';

// const initialCartItems = [
//   { id: 1, name: 'Product A', price: 50, quantity: 2 },
//   { id: 2, name: 'Product B', price: 30, quantity: 1 },
// ];

// const calculateTotalPrice = (items) =>
//   items.reduce((total, item) => total + item.price * item.quantity, 0);

// const CheckoutPage = () => {
//   const [cartItems, setCartItems] = useState(initialCartItems);
//   const [shippingDetails, setShippingDetails] = useState(null);



//   const totalPrice = calculateTotalPrice(cartItems);

//   const handleShippingSubmit = (details) => {
//     setShippingDetails(details);
//   };

//   const handlePaymentSuccess = () => {
//     alert('Order placed successfully!');
  
//   };

//   return (
//     <div className="checkout-page">
//       <h2 className="text-xl font-semibold mb-4">Checkout</h2>

    
//       <OrderSummary cartItems={cartItems} totalPrice={totalPrice} />

    
//       <ShippingForm onShippingSubmit={handleShippingSubmit} />

     
//       {shippingDetails && (
//         <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;
