import React, { useEffect } from 'react';
import Pages from './pages/Pages';
import Navbar from './components/Navbar';
import { Toaster } from "react-hot-toast";
import { useStateContext } from './contexts/ContextProvider';


function App() {
  const { setUserInfo } = useStateContext();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUserInfo(JSON.parse(user));
    }
  }, [setUserInfo]);

  return (
    <div className="App">
      <Toaster position="top-center" /> 
      <Navbar />
      <Pages />
    </div>
  );
}

export default App;
