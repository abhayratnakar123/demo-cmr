import React, { FC } from 'react';

interface OTPModalProps {
  isOpen: boolean;
  otp: string[];
  onClose: () => void;
  onChange: (value: string, index: number) => void;
  onResend: () => void;
  onSubmit: () => void;
}

const OTPModal: FC<OTPModalProps> = ({ isOpen, otp, onClose, onChange, onResend, onSubmit }) => {
  if (!isOpen) return null; // Don't render anything if the modal is closed

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 lg:w-[35rem] h-[41rem]">
        <h2 className="text-xl font-medium mb-2">Enter Verification Code</h2>
        <p className="text-sm text-gray-600 mb-6">
          We’ve sent you a verification code on your phone number
        </p>
        <div className="flex justify-start gap-8 space-x-2">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => onChange(e.target.value, index)}
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        <div className="mt-4">
          <button className="text-blue-500 underline text-sm mt-10 font-bold" onClick={onResend}>
            Didn’t get a code? Resend Code
          </button>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900"
            onClick={onSubmit}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPModal;
