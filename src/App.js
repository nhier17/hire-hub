import React, { useEffect } from 'react';
import Pages from './pages/Pages';
import Navbar from './components/Navbar';
import { Toaster } from "react-hot-toast";
import { useStateContext } from './contexts/ContextProvider';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const { setUserInfo } = useStateContext();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUserInfo(JSON.parse(user));
    }
  }, [setUserInfo]);

  return (
    <motion.div className="App">
      <AnimatePresence motion="wait">
      <Toaster position="top-center" /> 
      <Navbar />
      <Pages />
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
