import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Layout from './components/Layout';
import About from './pages/About'; 
// import Animals from './pages/Animals'; 
import Contact  from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
// import Login from './pages/Login'; 
// import Register from './pages/Register'; 

const MyRoutes= () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        
        </Route>
        {/* <Route path="/about" element={<About />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
};

export default MyRoutes;
