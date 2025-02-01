import React from 'react';
import logo from '../assets/airbeat.png';
import Bio from './Bio';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-black text-white py-12 mt-20">
            {/* Top Row: Logo and Explore Events Button */}
            <div className="w-[80%] mx-auto flex justify-between items-center mb-12">
                {/* Logo on the Left */}
                <div className="flex items-center">
                    <img src={logo} alt="Airbeat Logo" className="w-20 h-auto" />
                </div>
                {/* Explore Events Button on the Right */}
                <div>
                    <a
                        href="#ue"
                        className="bg-white text-black hover:bg-gray-700 px-6 py-3 rounded-md transition duration-300 ease-in-out"
                    >
                        Explore Events
                    </a>
                </div>
            </div>

            {/* New Middle Section: Headers & Their Content */}
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {/* Address Column */}
                <div>
                    <h1 className="text-sm font-bold mb-2">Address</h1>
                    <p className="text-sm text-gray-400">Nairobi, KENYA</p>
                </div>
                {/* Info Column */}
                <div>
                    <h1 className="text-sm font-bold mb-2">Info</h1>
                    <ul className="space-y-1">
                        <li>
                            <Link to="/" className="text-gray-400 hover:text-white text-sm font-medium transition duration-300 ease-in-out">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/bio" className="text-gray-400 hover:text-white text-sm font-medium transition duration-300 ease-in-out">
                                Bio
                            </Link>
                        </li>
                        <li>
                        <a href="#summertides" className="text-gray-400 hover:text-white text-sm font-medium transition duration-300 ease-in-out">
                                Portfolio
                            </a>
                        </li>
                        <li>
                        <a href="#History" className="text-gray-400 hover:text-white text-sm font-medium transition duration-300 ease-in-out">
                                History
                            </a>
                        </li>
                        <li>
                        <a href="#foundation" className="text-gray-400 hover:text-white text-sm font-medium transition duration-300 ease-in-out">
                                Airbeat Foundation
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Contact Us Column */}
                <div>
                    <h1 className="text-sm font-bold mb-2">Contact Us</h1>
                    <p className="text-sm text-gray-400">Phone: +254 712345678</p>
                    <p className="text-sm text-gray-400">Email: info@airbeat.com</p>
                </div>
                {/* Social Column */}
                <div>
                    <div className="flex space-x-2">
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaFacebookF className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaTwitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaInstagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Row: Copyright, Certificate, & Scroll Up Button */}
            <div className="w-[80%] mx-auto mt-8 text-gray-400 pt-4 grid grid-cols-3 items-center">
                {/* Left Column: All Rights */}
                <div className="text-left text-sm">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </div>
                {/* Center Column: Certificate Text */}
                <div className="text-center text-sm">
                    Certificate Text
                </div>
                {/* Right Column: Scroll Up Button */}
                <div className="text-right">
                    <button
                        onClick={scrollToTop}
                        className="bg-white text-black hover:bg-gray-400 p-2 rounded-full transition duration-300 ease-in-out"
                    >
                        <FaArrowUp className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
