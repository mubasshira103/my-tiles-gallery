import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 font-sans">
      <div className="flex flex-col items-center text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-black text-gray-200 tracking-tighter relative">
          404
          {/* <span className="text-2xl md:text-4xl font-bold text-gray-800 absolute inset-0 flex items-center justify-center mt-4">
            Oops!
          </span> */}
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-4 mb-10 max-w-sm mx-auto leading-relaxed">
          The gallery page you are looking for might have been moved, deleted, or never existed.
        </p>

        {/* Action Button */}
        <Link
          href={'/'}
          className="group relative inline-flex items-center justify-center px-8 py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          Back to Gallery
          <svg
            className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

      {/* Subtle Background Pattern (Optional) */}
      <div className="absolute top-0 left-0 -z-10 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[grid-size:40px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
    </div>
  );
};

export default NotFound;
