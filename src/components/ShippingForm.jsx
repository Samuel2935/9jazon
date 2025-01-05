import { useState } from "react";


const ShippingForm = ({ onShippingSubmit }) => {
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        address: '',
        city: '',
        postalCode: '',
    });

    const handleChange = (e) => {
        setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onShippingSubmit(shippingInfo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Shipping Information</h2>
            <input name="name" placeholder="Name" onChange={handleChange} required />
            <input name="address" placeholder="Address" onChange={handleChange} required />
            <input name="city" placeholder="City" onChange={handleChange} required />
            <input name="postalCode" placeholder="Postal Code" onChange={handleChange} required />
            <button type="submit">Save Shipping Info</button>
        </form>
    );
};

export default ShippingForm;
