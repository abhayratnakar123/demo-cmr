import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState <any>({});
  const navigate = useNavigate();
  const validateForm = () => {
    const newErrors:any = {};

    // Validate mobile number
    if (!mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(mobileNumber)) {
      newErrors.mobileNumber = 'Enter a valid 10-digit mobile number';
    }

    // Validate password
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', { mobileNumber, password });
      // Perform login logic here
    }
  };

  return (
    <div className="">
      <div className="lg:mr-14 lg:ml-3 lg:flex lg:p-0 lg:flex-row sm:flex-col lg:justify-between sm:justify-center p-10">
        <div className="mb-6 mt-5 ml-5 flex">
          <div className="mr-2 bg-gradient-to-r from-blue-500 to-purple-500 w-8 h-8"></div>
          <h1 className="text-xl font-bold">Kozyclan</h1>
        </div>
        <div className="w-full max-w-lg bg-gray-200 rounded-lg p-8 shadow-md h-[44rem] mt-14">
          <h2 className="text-2xl font-semibold mb-4">Login Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-10">
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-semibold text-gray-700"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="mobileNumber"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 text-gray-400"
                >
                  👁️
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="text-sm text-blue-500 font-semibold underline"
              >
                Forgot Password?
              </a>
            </div>

            <div className="mb-4 flex justify-between font-semibold items-center flex-col">
              <a href="#" className="text-sm text-blue-500 underline">
                Login with OTP
              </a>
            </div>
            <button
              type="submit"
              className="w-full mt-5 bg-black text-white py-2 rounded-md hover:bg-gray-900"
            >
              Log in
            </button>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-sm text-gray-600 font-bold">OR</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <a
              href="#"
              onClick={() => navigate('/signup')}
              className="block text-center text-blue-500 underline text-sm font-semibold mt-10"
            >
              Don’t have an account? Click here
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;