import React from "react";
import image1 from '../assets/image1.png';

const Hero = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center bg-white">
            <div className="w-[1512px] h-[860px] relative">
                <img
                    src={image1}
                    alt="Center image"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                
                {/* Left-Aligned Text */}
                <div className="absolute inset-0 flex flex-col justify-center items-start pl-20">
                    <h1 className="w-[775px] text-white text-7xl font-black leading-[72px] text-left">
                        Unforgettable Experiences, Beautifully Delivered Across Africa
                    </h1>
                    <p className="w-[657px] text-lg text-white font-semibold leading-7 mt-6 text-justify">
                        At Airbeat, we are dedicated to delivering exceptional entertainment
                        experiences that leave lasting memories. Join us as we celebrate the
                        vibrant culture and artistry of Africa through our stunning events.
                    </p>
                </div>

                {/* Centered Button at Bottom */}
                <div className="absolute bottom-[-7px] left-1/2 -translate-x-1/2 ">
                    <a href="#" className="bg-black text-white hover:bg-gray-700 px-6 py-6 w-64 h-12 rounded-md transition duration-300 ease-in-out">
                        Explore Events
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;