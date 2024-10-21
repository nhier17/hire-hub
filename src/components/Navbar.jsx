import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logo } from '../assets';
import { CiMenuBurger } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { useStateContext } from '../contexts/ContextProvider';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userInfo } = useStateContext();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const userMenuRef = useRef();
  const mobileMenuRef = useRef();

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('#mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  const userMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-[#F4F2EE] fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="w-12 h-12 rounded-md object-cover" src={logo} alt="HireHub Logo" />
            </Link>
          </div>

          <ul className="hidden md:flex space-x-4">
            <NavLink to="/" text="Home" />
            <NavLink to="/my-network" text="My Network" />
            <NavLink to="/jobs" text="Jobs" />
            <NavLink to="/post-job" text="Post Job" />
          </ul>

          <div className="flex items-center space-x-4">
            <Link to="/notifications" className="text-gray-300 hover:text-black focus:outline-none" aria-label="Notifications">
              <IoIosNotificationsOutline size={24} className="text-black" />
            </Link>
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center text-sm rounded-full focus:outline-none"
                id="user-menu-button"
                aria-expanded={isUserMenuOpen}
                aria-haspopup="true"
              >
                {userInfo?.profile_picture ? (
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={userInfo.profile_picture}
                    alt="User Avatar"
                  />
                ) : (
                  <FaUser className="size-5 text-black" />
                )}
              </button>

              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={userMenuVariants}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                  >
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      View Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={logout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              id="mobile-menu-button"
              className="md:hidden text-gray-500 hover:text-black focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <CiMenuBurger size={24} />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLinkMobile to="/" text="Home" setIsMenuOpen={setIsMenuOpen} />
              <NavLinkMobile to="/my-network" text="My Network" setIsMenuOpen={setIsMenuOpen} />
              <NavLinkMobile to="/jobs" text="Jobs" setIsMenuOpen={setIsMenuOpen} />
              <NavLinkMobile to="/post-job" text="Post Job" setIsMenuOpen={setIsMenuOpen} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ to, text }) => {
  const { pathname } = useLocation();
  return (
    <li className="relative px-10">
      <Link to={to} className="text-gray-600 hover:text-gray-900">
        {text}
        <motion.div
          className="h-1 bg-black w-0 absolute bottom-[-80%] left-1/2 transform -translate-x-1/2 transition-all duration-750"
          transition={{ duration: 0.75 }}
          initial={{ width: '0%' }}
          animate={{ width: pathname === to ? '50%' : '0%' }}
        />
      </Link>
    </li>
  );
};

const NavLinkMobile = ({ to, text, setIsMenuOpen }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        pathname === to ? 'text-black' : 'text-gray-600 hover:text-black'
      }`}
      onClick={() => setIsMenuOpen(false)}
    >
      {text}
    </Link>
  );
};

export default Navbar;
