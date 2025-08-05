

// eslint-disable-next-line react/prop-types
const OrderSummary = ({ cartItems, totalPrice }) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} x {item.quantity} - ${item.price * item.quantity}
                    </li>
                ))}
            </ul>
            <h3>Total: ${totalPrice}</h3>
        </div>
    );
};

export default OrderSummary;
