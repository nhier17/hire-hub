import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Jobs from './Jobs.jsx';

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </div>
  )
}

export default Pages
