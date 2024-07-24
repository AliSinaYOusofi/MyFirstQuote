"use client"
import React, { useState } from 'react';
import { FaExpand, FaInfoCircle } from 'react-icons/fa';
import { FaClipboard } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa6";
import SingleQuote from './SingleQuote';
const QuoteCard = ({ quote, author, index }) => {

    const[ clipboard, setClipboard] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)

    const copyToClipboard = () => {
        
        navigator.clipboard.writeText(quote)
        
        setClipboard(true)
        
        setTimeout(() => {
            setClipboard(false)
        }, 2000)
    }

    return (
        <>
            {
                isFullscreen 
                ? 
                <SingleQuote quote={quote} author={author} onClose={() => setIsFullscreen(false)} />
                :
                <div className="flex items-center justify-center  bg-gray-100 p-4">
                <div className="w-80 h-64 p-6 bg-white rounded-lg shadow-md relative flex flex-col justify-between">
                    <div>
                        
                        <p className="text-sm text-gray-500">Quote #{index + 1}</p>
                        
                        <p className="text-lg font-semibold text-gray-800 mt-2 line-clamp-2">
                            {quote}
                        </p>
                    </div>

                    <div className="text-right text-gray-600">- {author}</div>
                    
                    <div className="absolute top-4 right-4 flex space-x-2">
                        
                        <FaExpand onClick={() => setIsFullscreen(true)} className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                        <FaInfoCircle className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                        <button onClick={copyToClipboard} className="text-gray-500 hover:text-gray-700 cursor-pointer">
                            {clipboard ? <FaClipboardCheck /> : <FaClipboard />}
                        </button>
                    </div>
                </div>
            </div> 
            }
        </>
        
  );
};

export default QuoteCard;
