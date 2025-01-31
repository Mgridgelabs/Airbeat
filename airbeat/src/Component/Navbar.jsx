
import React from 'react';
import airbeat from '../assets/airbeat.png'

function Navbar() {
    return (
        <nav className="navbar bg-white  p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="w-[72px] h-[72px]">
                    <img src={airbeat} alt="Logo" className="w-full h-full object-cover"/>
                </div>
                <div className="flex items-center gap-8">
                    <a href="#" className="text-primary-black hover:text">Home</a>
                    <a href="#" className="text-primary-black hover:text">Bio</a>
                    <a href="#" className="text-primary-black hover:text">Portfolio</a>
                    <a href="#" className="text-primary-black hover:text">History</a>
                    <a href="#" className="text-primary-black hover:text">AirBeat Foundation</a>
                    <a href="#" className="btn bg-black justify-center text-white hover:bg-gray-700 px-4 py-2 rounded-md">Explore Events</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
