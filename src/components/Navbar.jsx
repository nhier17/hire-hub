import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logo } from '../assets';
import { CiMenuBurger } from 'react-icons/ci';
import { motion, AnimatePresence } from 'framer-motion';
import { useStateContext } from '../contexts/ContextProvider';
import { avatar } from '../assets';
import Search from './Search';
import { navbarLinks } from '../constants';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setUserInfo, userInfo } = useStateContext();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

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
    localStorage.removeItem('user');
    setUserInfo(null);
    navigate('/login');
  };

  return (
    <nav className="bg-[#F4F2EE] w-full inset-x-0 top-0 z-50 sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="w-12 h-12 rounded-md object-cover" src={logo} alt="HireHub Logo" />
            </Link>
          </div>
          <Search />
          </div>

          <ul className="hidden md:flex">
            {navbarLinks.map((link) => (
              <NavLink key={link.id} to={link.route} text={link.title} icon={link.icon} />
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center text-sm rounded-full focus:outline-none"
              >
                {userInfo?.profile_picture ? (
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={userInfo.profile_picture}
                    alt="User Avatar"
                  />
                ) : (
                  <img
                  className="h-9 w-9 rounded-full object-cover"
                  src={avatar}
                  alt="User Avatar"
                />
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
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <Link
                      to={`/profile/${userInfo.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      View Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Settings
                    </Link>
                    <Link
                      to="/post-job"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                    Post job
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
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navbarLinks.map((link) => (
              <div key={link.id} onClick={() => setIsMenuOpen(false)}>
              <NavLink 
              to={link.route} 
              text={link.title} 
              />
              </div>
            ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ to, text, icon }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <li className="relative px-4 list-none">
      <Link 
        to={to} 
        className="text-gray-600 hover:text-gray-900 flex items-center flex-col mb-1">
        {icon}
        <span>{text}</span>
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-black-1"
          initial={false}
          animate={{ width: isActive ? '100%' : '0%' }}
          transition={{ duration: 0.75 }}
        />
      </Link>
    </li>
  );
};




export default Navbar;
