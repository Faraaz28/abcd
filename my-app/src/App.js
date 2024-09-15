import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import ForgotPassword from './ForgotPassword';  // Import ForgotPassword component
import ThankYou from './ThankYou'; // Import the ThankYou component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />  {/* New route for Forgot Password */}
        <Route path="/thank-you" element={<ThankYou />} /> {/* Thank You page route */}

      </Routes>
    </Router>
  );
}

export default App;
