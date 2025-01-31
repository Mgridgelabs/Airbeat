import React from 'react';
import image3 from '../assets/image3.png';
import image2 from '../assets/image2.png';
import Navbar from "../Component/Navbar";
import Hero from '../Component/Hero';

function Home() {
    return (
        <div className='  bg-white text-black  items-center justify-center'>
            <Navbar />
            <Hero />
            

            {/* Section with Overlapping Image 2 and Image 3 */}
            <div className="relative flex justify-between items-center mt-12 w-full">

                {/* Image 2 on the Left (Increased Size) */}
                <div className="w-1/2 h-[700px] relative z-10">
                    <img src={image2} alt="image" className='absolute w-[650px] h-[700px] bottom-[-70px] left-[180px] rounded-lg'/>
                </div>
                {/* Text Content on the Right */}
                <div className="w-1/2 ml-[20px] z-20 relative flex flex-col items-start pl-8">
                    {/* Short Line and Bold Heading */}
                    <div className="flex items-center mb-6 h-19">
                        <div className="w-[100px] border-t border-black mr-2"></div> {/* Shortened line */}
                        <h2 className="font-bold text-black text-xl">Know About Us</h2>
                    </div>
                    {/* Event Experience Description (Increased Font Size to 32px) */}
                    <h3 className="text-bold-black text-[32px] font-semibold mb-6 mr-10"> {/* Increased text size to 32px */}
                        A successful event starts with
                        < br></br>
                        the guest experience, that’s 
                        <br></br>
                        where we can help.
                    </h3>
                    {/* Paragraph Text */}
                    <p className='text-black text-lg leading-7 size-18 w-[599px] h-[380px]'>
                        Airbeat Global Entertainment Ltd, also known as Airbeat LLC, is an SME organization that was founded in late 2017 by CEO G Founder, Kasey Omwanda. The idea behind Airbeat started in 2016 when we held our first event under the alias ‘ku5’. We saw a space in the industry, and the formation of Airbeat LLC commenced.
                        <br /><br />
                        The drive was to create a seat for other young entertainment moguls at the table, which had proven hard to penetrate for years. In 2017, after the Afterglow event, we discovered a passion and drive that we didn’t know was there – to make people connect and feel happy through an experience curated by us. Later on in the year, Airbeat LLC was launched.
                    </p>
                    {/* Button */}
                    <div className="mt-6">
                        <a href="#" className="bg-black text-white hover:bg-gray-700 px-6 py-3 rounded-md transition duration-300 ease-in-out">
                            Learn More
                        </a>
                    </div>
                </div>
                {/* Image 3 on Top of Image 2  */}
                <div className="absolute bottom-[532px] left-[40px] w-[6550px] h-[580x] z-5">
                    <img src={image3} alt="image" className='absolute w-[650px] h-[700px] bottom-[-532px] left-[40px] mt-3 rounded-lg'/>
                </div>
            </div>
        </div>
    );
}

export default Home;
