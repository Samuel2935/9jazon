
// import { InterswitchPay } from "react-interswitch";


// export default function Pay() {
//   const props = {
//     merchantCode: "MX189550",
//     payItemID: "Default_Payable_MX189550",
//     customerEmail: "samuelblessed38@gmail.com",
//     redirectURL: "https://www.google.com",
//     text: "Pay Now",
//     mode: "TEST",
//     transactionReference: Date.now().toString(),
//     amount: "10000",
//     style: {
//       width: "200px",
//       height: "40px",
//       border: "none",
//       borderRadius:"4px",
//       color: "#fff",
//       backgroundColor: "#ff0000"
//     },
//     callback: (response) => {
//       console.log("response: ", response);
//     }
//   };

//   return (
//     <div className="mt-36">
//         <p>kindly make your payment!</p>
//         <p>kindly make your payment!</p>
//         <p>kindly make your payment!</p>
//         <p>kindly make your payment!</p>
//         <p>kindly make your payment!</p>
//         <p>hello hamster</p>
//       <InterswitchPay {...props} />
//    <p>   <span className="text-green-500">Make sure you select payment channel!</span></p>
//     </div>
//   );
// }