import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from "@clerk/clerk-react";
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const publishableKey="pk_test_cmVsZXZhbnQtdW5pY29ybi01MS5jbGVyay5hY2NvdW50cy5kZXYk"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
    <App />
    </ClerkProvider>
   
  </React.StrictMode>,
)
