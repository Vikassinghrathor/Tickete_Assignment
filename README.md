Project Overview

This project is a React-based web application designed for a checkout process. It utilizes various components to create a seamless user experience. The project follows a modular structure, organized into folders for better code management and readability.

Live Demo Link -: "https://tickete-assignment-vikas2809.vercel.app/"

Folder Structure

Header
Contains two files:
Header.jsx
HeaderTimer.jsx
Responsible for navigation and displaying ticket holding time.

InputForm
Contains sub-folder Payment:
PaymentButton.jsx
PaymentIcons.jsx
PaymentInput.jsx
InputForm.jsx
InfoBanner.jsx
DetailsInput.jsx
AdditionalDetails.jsx
Handles input forms and payment components.

Footer

ComingSoon
Features that will be available soon.

CheckoutPay
Payment summary information.

Technologies Used -:

1. React Router Dom: Used for handling routing within the application.
2. React Bootstrap: Utilized for pre-styled React components, aiding in a responsive design.
3. Tailwind CSS: Used for utility-first CSS to enhance styling capabilities.
4. Module Based CSS: Follows a modular approach for styling, enhancing maintainability.

Project Structure -: 

Entry Point
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


App Component -: 

// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;


Checkout Page

// pages/Checkout.jsx
import React from 'react';
import Header from '../components/Header/Header';
import InputForm from '../components/InputForm/InputForm';
import Footer from '../components/Footer/Footer';
import QuerySection from '../components/QuerySection/QuerySection';
import ComingSoon from '../components/ComingSoon/ComingSoon';

const Checkout = () => {
  return (
    <>
      <Header />
      <InputForm />
      <ComingSoon />
      <QuerySection />
      <Footer />
    </>
  );
}

export default Checkout;


Dependencies
1. react
2. react-dom
3. react-router-dom
4. react-bootstrap
5. tailwindcss

Usage
1. Clone the repository.
2. Install dependencies using npm install.
3. Run the application using npm start.

Feel free to explore the project and adapt it to your specific needs. If you encounter any issues or have questions, please refer to the documentation of the used technologies or reach out to the project contributors.

Thanks & Regards
vikas singh rathore




