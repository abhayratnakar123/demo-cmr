import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPModal from "../otp/otp";
const SignupPage = () => {
  const [userType, setUserType] = useState("Merchant");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const navigate = useNavigate();

  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [otp, setOtp] = useState(Array(4).fill('')); // Four OTP input fields

  const openOtpModal = () => setIsOtpModalOpen(true);
  const closeOtpModal = () => setIsOtpModalOpen(false);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };
  
  const handleResendOtp = () => {
    alert('Resend OTP triggered');
  };

  const handleSubmitOtp = () => {
    alert(`OTP Submitted: ${otp.join('')}`);
    closeOtpModal();
  };
  const validateForm = () => {
    const newErrors : any = {};

    if (!firstName) newErrors.firstName = "First Name is required";
    if (!lastName) newErrors.lastName = "Last Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!mobileNumber) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(mobileNumber)) {
      newErrors.mobileNumber = "Enter a valid 10-digit mobile number";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", {
        userType,
        firstName,
        lastName,
        email,
        mobileNumber,
        password,
      });
      navigate("/login");
    }
  };

  return (
    <div className="">
      <div className="lg:mr-14 lg:ml-3 lg:flex lg:p-0 lg:flex-row sm:flex-col lg:justify-between sm:justify-center p-10">
        <div className="mb-6 mt-5 ml-5 flex">
          <div className="mr-2 bg-gradient-to-r from-blue-500 to-purple-500 w-8 h-8"></div>
          <h1 className="text-xl font-bold">Kozyclan</h1>
        </div>
        <div className="w-full max-w-lg bg-gray-200 rounded-lg p-8 shadow-md h-auto mt-14">
          <h2 className="text-2xl font-semibold mb-4">Create a Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="userType"
                className="block text-sm font-semibold text-gray-700"
              >
                User Type *
              </label>
              <select
                id="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Merchant">Merchant</option>
                <option value="Customer">Customer</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-gray-700"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-gray-700"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-semibold text-gray-700"
              >
                Mobile number *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="mobileNumber"
                  placeholder="Enter your mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.mobileNumber ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <button
                  type="button"
                  onClick={openOtpModal}
                  className="absolute inset-y-0 right-3 text-blue-500 text-sm font-semibold"
                >
                  Send OTP to verify
                </button>
              </div>
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobileNumber}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Password*
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Confirm password*
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Enter your password again"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`mt-1 block w-full px-4 py-2 border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-5 bg-black text-white py-2 rounded-md hover:bg-gray-900"
            >
              Submit
            </button>
            {isOtpModalOpen && (
             <OTPModal
             isOpen={isOtpModalOpen}
             otp={otp}
             onClose={closeOtpModal}
             onChange={handleOtpChange}
             onResend={handleResendOtp}
             onSubmit={handleSubmitOtp}
           />
      )}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-sm text-gray-600 font-bold">OR</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <a
              href="#"
              onClick={() => navigate("/login")}
              className="block text-center text-blue-500 underline text-sm font-semibold mt-51"
            >
              Already have an account?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
