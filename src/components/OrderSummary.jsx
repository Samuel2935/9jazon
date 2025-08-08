// eslint-disable-next-line react/prop-types
const OrderSummary = ({ cartItems, totalPrice }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Order Summary</h2>
            <ul className="space-y-3">
                {cartItems.map(item => (
                    <li
                        key={item.id}
                        className="flex justify-between items-center text-gray-700"
                    >
                        <span>{item.name} x {item.quantity}</span>
                        <span className="font-medium">
                            ${item.price * item.quantity}
                        </span>
                    </li>
                ))}
            </ul>
            <div className="mt-6 border-t pt-4 flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span>${totalPrice}</span>
            </div>
        </div>
    );
};

export default OrderSummary;
