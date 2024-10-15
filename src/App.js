import React from 'react';
import Pages from './pages/Pages';
import Navbar from './components/Navbar';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" /> 
      <Navbar />
      <Pages />
    </div>
  );
}

export default App;
