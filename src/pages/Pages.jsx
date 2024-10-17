import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Jobs from './Jobs';
import PostJob from './PostJob';
import { Login, SignUp, ApplicationForm } from '../components';

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/apply/:id" element={<ApplicationForm />} />
      </Routes>
    </div>
  )
}

export default Pages
