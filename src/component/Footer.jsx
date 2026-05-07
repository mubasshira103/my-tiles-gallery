import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content border-t border-gray-200/20 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start justify-center">
            <span className="font-extrabold text-4xl sm:text-5xl leading-normal py-2">
              Tiles<span className="text-blue-500">Gallery</span>
            </span>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto sm:mx-0">
              {/* Add description here if needed */}
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h6 className="footer-title text-gray-800 dark:text-white font-bold opacity-100 mb-3 md:mb-4">
              Quick Links
            </h6>
            <div className="flex text-slate-700 flex-col gap-2">
              <Link href="/" className=" transition-colors">
                Home
              </Link>

              <Link href="/all-tiles" className="">
                All Tiles
              </Link>
              <Link href="/my-profile">My Profile</Link>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start sm:col-span-2 md:col-span-1">
            <h6 className="footer-title text-gray-800 dark:text-white font-bold opacity-100 mb-3 md:mb-4">
              Contact Us
            </h6>
            <div className="text-sm text-gray-600 dark:text-gray-400 flex flex-col gap-2">
              <p>Email: support@tilesgallery.com</p>
              <p>Phone: +880 1634-567890</p>
              <p>Location: Dhaka, Bangladesh</p>
              <div className="flex gap-4 ">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn rounded-full border"
                >
                  <FaFacebookF size={18} />
                </Link>
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn rounded-[50%] transition-colors "
                >
                  <FaLinkedinIn size={18} />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn rounded-full"
                >
                  <FaInstagram size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400/20 pt-4  flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left text-sm text-gray-500">
          <p className="order-2 md:order-1">
            © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
          </p>

          <div className="flex flex-col items-center md:items-end gap-4 order-1 md:order-2 w-full md:w-auto">
            <div className="text-black flex gap-6 justify-center md:justify-end">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
