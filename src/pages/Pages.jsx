import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Jobs from './Jobs.jsx';
import { Login, SignUp, ApplicationForm } from '../components';

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/apply/:id" element={<ApplicationForm />} />
      </Routes>
    </div>
  )
}

export default Pages
