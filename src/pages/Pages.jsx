import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import { Jobs, PostJob, MyNetwork, Notifications, SettingsPage, Profile, Messaging } from '.';
import { Login, SignUp, ApplicationForm } from '../components';
import { motion, AnimatePresence } from 'framer-motion';

const Pages = () => {
  const location = useLocation();
  return (
    <motion.div>
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/apply/:id" element={<ApplicationForm />} />
        <Route path="/my-network" element={<MyNetwork />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messaging />} />
      </Routes>
      </AnimatePresence>
    </motion.div>
  )
}

export default Pages
