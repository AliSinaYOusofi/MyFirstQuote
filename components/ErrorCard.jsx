import React from 'react';
import { FaExclamationCircle, FaRedo } from 'react-icons/fa';

const ErrorCard = ({ retryFunction }) => {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-4">
      <div className="w-80 h-64 p-6 bg-white rounded-lg shadow-md flex flex-col justify-between items-center">
        <div className="flex items-center justify-center w-full h-full">
          <FaExclamationCircle className="text-red-500 text-6xl" />
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold text-gray-800">Could not load quotes</p>
          <p className="text-sm text-gray-500 mt-2">Please check your connection or try again later.</p>
        </div>
        <div className="mt-4">
          <button 
            onClick={retryFunction} 
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            <FaRedo className="mr-2" />
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
