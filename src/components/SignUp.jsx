import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLock, FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import CustomInput from './CustomInput';  
import { post1, logo } from '../assets';
import { useStateContext } from '../contexts/ContextProvider';
import { base_url } from '../api';


const SignUp = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useStateContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    showPassword: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setFormData((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${base_url}/api/auth/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
    
      if (response.data) {
        const { access_token, user } = response.data;

        localStorage.setItem('token', access_token);

        setUserInfo(user);

        navigate('/');
        toast.success(`Welcome ${user.name} 👋`)
      }
    } catch (error) {
      console.error('Error signing in', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen max-h-screen">
      <section className="relative flex-1 overflow-y-auto px-[5%] my-auto">
        <div className="mx-auto flex size-full flex-col py-10 max-w-[496px]">
          <div className="flex gap-2 mb-6">
            <img
              src={logo}
              width={1000}
              height={1000}
              alt="success"
              className="h-10 w-fit"
            />
            <h2 className="text-center text-3xl font-semibold text-gray-500">HireHub</h2>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
          <section className="mb-12 space-y-4">
          <h1 className="text-2xl font-medium">Hi there 👋</h1>
          <p className="text-dark-700 text-xl">Find your dream job.</p>
        </section>

            <CustomInput
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              icon={<FaUser />}
              />

            <CustomInput
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              icon={<MdEmail />}
            />

            <CustomInput
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
              icon={<FaLock />}
              toggleIcon={{
                show: <FaEye />,
                hide: <FaEyeSlash />,
              }}
              onToggle={togglePasswordVisibility}
              showPassword={formData.showPassword}
            />

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 text-white bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg focus:outline-none ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              {isLoading ? 'Registering...' : 'Sign up'}
            </button>
            <p className="m-6 text-gray-700">
              Already have an account?
              <Link className="text-blue-500 mx-2" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>

      <img
        src={post1}
        width={1000}
        height={1000}
        alt="success"
        className="max-w-[50%] hidden md:block h-full object-cover"
      />
    </div>
  );
};

export default SignUp;
