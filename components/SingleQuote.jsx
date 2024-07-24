import React from 'react';
import { FaHackerNews, FaTimes } from 'react-icons/fa';
import {Hachi_Maru_Pop} from 'next/font/google';

const hachiMaruPop = Hachi_Maru_Pop({weight: '400', subsets: ['latin']})
const SingleQuote = ({ quote, author, onClose }) => {
    
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[80%] mt-10 relative">
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <FaTimes size={24} />
                </button>

                <p className="text-[2rem] font-semibold text-gray-800" style={hachiMaruPop.style}>
                    {quote}
                </p>
                <p className="mt-4 text-right text-gray-600">- {author}</p>
            </div>
        </div>
  );
};

export default SingleQuote;
