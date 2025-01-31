import React from 'react';
import image3 from '../assets/image3.png';
import image2 from '../assets/image2.png';
import Navbar from "../Component/Navbar";
import Hero from '../Component/Hero';
import eventImage1 from '../assets/eventImage1.png'; 
import eventImage2 from '../assets/eventImage2.png'; 
import eventImage3 from '../assets/eventImage3.png'; 
import eventImage4 from '../assets/eventImage4.png'; 
import eventImage5 from '../assets/eventImage5.png'; 
import eventImage6 from '../assets/eventImage6.png';

function Home() {
    return (
        <div className='bg-white text-black'>
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
                    <div className="flex items-center mb-6">
                        <div className="w-[100px] border-t border-black mr-2"></div> {/* Shortened line */}
                        <h2 className="font-bold text-black text-xl">Know About Us</h2>
                    </div>

                    {/* Event Experience Description (Increased Font Size to 32px) */}
                    <h3 className="text-bold-black text-[32px] font-semibold mb-6 mr-10"> 
                        A successful event starts with
                        <br />
                        the guest experience, that’s 
                        <br />
                        where we can help.
                    </h3>

                    {/* Paragraph Text */}
                    <p className='text-black text-lg leading-7 w-[599px]'>
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
                <div className="absolute bottom-[532px] left-[40px] w-[650px] h-[580px] z-5">
                    <img src={image3} alt="image" className='absolute w-[650px] h-[700px] bottom-[-532px] left-[40px] mt-3 rounded-lg'/>
                </div>
            </div>

            {/* Upcoming Events Section */}
            <div className="w-full bg-gray-100 py-12 mt-12">
                <div className="w-[80%] mx-auto">
                    {/* Align "Upcoming Events" to the left */}
                    <h2 className="text-3xl font-semibold mb-6 text-left">Upcoming Events</h2>

                    {/* Dropdown Menus Section - Align them to the left */}
                    <div className="flex space-x-4 mb-8">
                        {/* Date Dropdown */}
                        <div className="w-full md:w-[30%]">
                            <label htmlFor="date" className="block text-lg mb-2">Date</label>
                            <select id="date" className="w-full py-3 px-4 bg-white border border-gray-300 rounded-md">
                                <option value="today">Today</option>
                                <option value="this-week">This Week</option>
                                <option value="next-week">Next Week</option>
                                <option value="this-month">This Month</option>
                            </select>
                        </div>

                        {/* Location Dropdown */}
                        <div className="w-full md:w-[30%]">
                            <label htmlFor="location" className="block text-lg mb-2">Location</label>
                            <select id="location" className="w-full py-3 px-4 bg-white border border-gray-300 rounded-md">
                                <option value="nyc">New York City</option>
                                <option value="la">Los Angeles</option>
                                <option value="sf">San Francisco</option>
                                <option value="chicago">Chicago</option>
                            </select>
                        </div>

                        {/* Event Type Dropdown */}
                        <div className="w-full md:w-[30%]">
                            <label htmlFor="event-type" className="block text-lg mb-2">Event Type</label>
                            <select id="event-type" className="w-full py-3 px-4 bg-white border border-gray-300 rounded-md">
                                <option value="music">Music</option>
                                <option value="comedy">Comedy</option>
                                <option value="theater">Theater</option>
                                <option value="conference">Conference</option>
                            </select>
                        </div>
                    </div>

                    {/* Flexbox for Event Cards */}
                    <div className="flex flex-wrap justify-between gap-8">

                        {/* Event 1 */}
                        <div className="w-full md:w-[30%] bg-white p-6 rounded-lg shadow-lg mb-6">
                            <img src={eventImage1} alt="Event 1" className="w-full h-[200px] object-cover rounded-lg mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Event Title 1</h3>
                            <p className="text-lg mb-4">Date: January 25, 2025</p>
                            <p className="text-sm text-gray-700">Join us for an unforgettable experience at this exciting event. Enjoy live music, performances, and great vibes.</p>
                            <a href="#" className="mt-4 text-black font-semibold hover:text-gray-700">Learn More</a>
                        </div>

                        {/* Event 2 */}
                        <div className="w-full md:w-[30%] bg-white p-6 rounded-lg shadow-lg mb-6">
                            <img src={eventImage2} alt="Event 2" className="w-full h-[200px] object-cover rounded-lg mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Event Title 2</h3>
                            <p className="text-lg mb-4">Date: February 14, 2025</p>
                            <p className="text-sm text-gray-700">This is an event you won't want to miss. Experience thrilling performances, networking, and more.</p>
                            <a href="#" className="mt-4 text-black font-semibold hover:text-gray-700">Learn More</a>
                        </div>

                        {/* Event 3 */}
                        <div className="w-full md:w-[30%] bg-white p-6 rounded-lg shadow-lg mb-6">
                            <img src={eventImage3} alt="Event 3" className="w-full h-[200px] object-cover rounded-lg mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Event Title 3</h3>
                            <p className="text-lg mb-4">Date: March 12, 2025</p>
                            <p className="text-sm text-gray-700">Get ready for another exciting event full of surprises and unforgettable moments.</p>
                            <a href="#" className="mt-4 text-black font-semibold hover:text-gray-700">Learn More</a>
                        </div>

                        {/* Event 4 */}
                        <div className="w-full md:w-[30%] bg-white p-6 rounded-lg shadow-lg mb-6">
                            <img src={eventImage4} alt="Event 4" className="w-full h-[200px] object-cover rounded-lg mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Event Title 4</h3>
                            <p className="text-lg mb-4">Date: April 5, 2025</p>
                            <p className="text-sm text-gray-700">Don't miss out on this one-of-a-kind event with amazing performances and guest speakers.</p>
                            <a href="#" className="mt-4 text-black font-semibold hover:text-gray-700">Learn More</a>
                        </div>

                        {/* Event 5 */}
                        <div className="w-full md:w-[30%] bg-white p-6 rounded-lg shadow-lg mb-6">
                            <img src={eventImage5} alt="Event 5" className="w-full h-[200px] object-cover rounded-lg mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Event Title 5</h3>
                            <p className="text-lg mb-4">Date: May 21, 2025</p>
                            <p className="text-sm text-gray-700">Experience the best of the entertainment world at this spectacular event!</p>
                            <a href="#" className="mt-4 text-black font-semibold hover:text-gray-700">Learn More</a>
                        </div>

                        {/* Event 6 */}
                        <div className="w-full md:w-[30%] bg-white p-6 rounded-lg shadow-lg mb-6">
                            <img src={eventImage6} alt="Event 6" className="w-full h-[200px] object-cover rounded-lg mb-4"/>
                            <h3 className="text-xl font-semibold mb-2">Event Title 6</h3>
                            <p className="text-lg mb-4">Date: June 10, 2025</p>
                            <p className="text-sm text-gray-700">An exclusive event for those who appreciate good music and great company.</p>
                            <a href="#" className="mt-4 text-black font-semibold hover:text-gray-700">Learn More</a>
                        </div>

                    </div>

                    {/* "View All" Button */}
                    <div className="text-center mt-6">
                        <a href="#" className="bg-black text-white hover:bg-gray-700 px-6 py-3 rounded-md transition duration-300 ease-in-out">
                            View All Events
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
