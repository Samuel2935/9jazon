
import OrderSummary from './OrderSummary';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
// import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const CheckoutPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product A', price: 50, quantity: 2 },
        { id: 2, name: 'Product B', price: 30, quantity: 1 },
    ]);

    const [shippingInfo, setShippingInfo] = useState(null);

    // const cartItems = useSelector((state) => state.cart);
    // const dispatch = useDispatch();
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleShippingSubmit = (info) => setShippingInfo(info);

    const handlePaymentSuccess = () => {
        alert('Order placed successfully!');
        // Clear cart and navigate to confirmation page
    };

    return (
        <div>
            <h2>talk to me baby</h2>
            <OrderSummary cartItems={cartItems} totalPrice={totalPrice} />
            <ShippingForm onShippingSubmit={handleShippingSubmit} />
            {shippingInfo && <PaymentForm onPaymentSuccess={handlePaymentSuccess} />}
        </div>
    );
};

export default CheckoutPage;
