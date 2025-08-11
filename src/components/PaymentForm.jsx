// import React from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const PaymentForm = ({ onPaymentSuccess }) => {
//     const stripe = useStripe();
//     const elements = useElements();

//     const handlePayment = async (e) => {
//         e.preventDefault();
//         if (!stripe || !elements) return;

//         const cardElement = elements.getElement(CardElement);

//         const { error, paymentIntent } = await stripe.confirmCardPayment('<CLIENT_SECRET>', {
//             payment_method: {
//                 card: cardElement,
//                 billing_details: {
//                     name: 'Customer Name',
//                 },
//             },
//         });

//         if (error) {
//             console.error(error.message);
//             alert('Payment failed!');
//         } else {
//             alert('Payment successful!');
//             onPaymentSuccess();
//         }
//     };

//     return (
//         <form onSubmit={handlePayment}>
//             <h2>Payment Information</h2>
//             <CardElement />
//             <button type="submit" disabled={!stripe}>
//                 Pay Now
//             </button>
//         </form>
//     );
// };

// export default PaymentForm;
