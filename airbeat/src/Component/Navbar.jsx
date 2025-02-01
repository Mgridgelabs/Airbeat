import React from 'react';
import { Link } from 'react-router-dom';
import airbeat from '../assets/airbeat.png';

function Navbar() {
    return (
        <nav className="navbar bg-white p-4 mb-0 ">
            <div className="container mx-auto flex justify-between items-center">
                <div className="w-[72px] h-[72px]">
                    <img src={airbeat} alt="Logo" className="w-full h-full object-cover"/>
                </div>
                <div className="flex items-center gap-8">
                    <Link to="/" className="text-black hover:text">Home</Link>
                    <Link to="/bio" className="text-black hover:text">Bio</Link> 
                    <a href="#summertides" className="text-black  hover:text-white text-sm font-medium transition duration-300 ease-in-out">
                                Portfolio
                            </a>
                    <a href="#History" className="text-black hover:text-white text-sm font-medium transition duration-300 ease-in-out">
                                History
                            </a>
                    <a href="#foundation" className="text-black hover:text-white text-sm font-medium transition duration-300 ease-in-out">
                                Airbeat Foundation
                            </a>
                    <a href="#ue" className="btn bg-black justify-center text-white hover:bg-gray-700 px-4 py-2 rounded-md">Explore Events</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
