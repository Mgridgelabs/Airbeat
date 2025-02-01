import React from 'react';
import image3 from '../assets/image3.png';
import image2 from '../assets/image2.png';
import Navbar from "../Component/Navbar";
import Hero from '../Component/Hero';
import Footer from '../Component/Footer';
import eventImage1 from '../assets/eventImage1.png';
import eventImage2 from '../assets/eventImage2.png';
import eventImage3 from '../assets/eventImage3.png';
import eventImage4 from '../assets/eventImage4.png';
import eventImage5 from '../assets/eventImage5.png';
import eventImage6 from '../assets/eventImage6.png';
import partnerImage1 from '../assets/sponsor1.png';
import partnerImage2 from '../assets/sponsor2.png';
import partnerImage3 from '../assets/sponsor3.png';
import summertidesImage1 from '../assets/summertides1.png';
import summertidesImage2 from '../assets/summertides2.png';
import summertidesImage3 from '../assets/summertides3.png';
import summertidesImage4 from '../assets/summertides4.png';
import summertidesImage5 from '../assets/summertides5.png';
import summertidesImage6 from '../assets/summertides6.png';
import summertidesImage7 from '../assets/summertides7.png';
import summertidesImage8 from '../assets/summertides8.png';
import summertidesImage9 from '../assets/summertides9.png';
import foundationImage from '../assets/foundation.png';
import arrowIcon from '../assets/arrow.png';
import ksh from '../assets/money.png';
import loc from '../assets/location.png';
import dat from '../assets/date.png';






function Home() {

    return (
        <div className='bg-white text-black'>
            <Navbar />
            <Hero />

            {/* Section with Overlapping Image 2 and Image 3 */}
            <div id="History" className="relative flex justify-between items-center mt-12 mb-20 w-full">
                {/* Image 2 on the Left (Increased Size) */}
                <div className="w-1/2 h-[700px] relative z-10">
                    <img src={image2} alt="image" className='absolute w-[650px] h-[700px] bottom-[-70px] left-[180px] rounded-lg' />
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
                <div className="absolute bottom-[532px] left-[40px] w-[650px] h-[580px] z-5 ">
                    <img src={image3} alt="image" className='absolute w-[650px] h-[700px] bottom-[-532px] left-[40px] mt-3 rounded-lg' />
                </div>
            </div>
            {/* Upcoming Events Section */}
            <div id="ue" className="w-full  py-12 mt-15">
                <div className="w-[80%] mx-auto">
                    {/* Heading and Dropdown Menus in a Flex Container */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-semibold mb-6 text-left">Upcoming Events</h2>
                        {/* Dropdown Menus Section */}
                        <div className="flex space-x-4">
                            {/* Date Dropdown */}
                            <div className="w-[150px] ">
                                <select id="date" className="w-full py-2 px-3 text-sm bg-[#67676733]  border border-gray-300 rounded-[50px]">
                                    <option value="" disabled selected>Yearly</option>
                                    <option value="today">Today</option>
                                    <option value="this-week">This Week</option>
                                    <option value="next-week">Next Week</option>
                                    <option value="this-month">This Month</option>
                                </select>
                            </div>
                            {/* Location Dropdown */}
                            <div className="w-[150px]">
                                <select id="location" className="w-full py-2 px-3 text-sm bg-[#67676733] border border-gray-300 rounded-[50px]">
                                    <option value="" disabled selected>Location</option>
                                    <option value="nyc">New York City</option>
                                    <option value="la">Los Angeles</option>
                                    <option value="sf">San Francisco</option>
                                    <option value="chicago">Chicago</option>
                                </select>
                            </div>
                            {/* Event Type Dropdown */}
                            <div className="w-[150px]">
                                <select id="event-type" className="w-full py-2 px-3 text-sm bg-[#6767672f]  border border-gray-300 rounded-[50px]">
                                    <option value="" disabled selected>Event Type</option>
                                    <option value="music">Music</option>
                                    <option value="comedy">Comedy</option>
                                    <option value="theater">Theater</option>
                                    <option value="conference">Conference</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        {/* Flexbox for Event Cards */}
                        <div className="flex flex-wrap justify-between gap-8">
                            {/* Event 1 */}
                            <div className="w-full md:w-[30%] bg-black shadow-lg flex flex-col items-center justify-center text-center p-4 mb-6">
                                <img src={eventImage1} alt="Event 1" className="w-full h-[200px] object-cover  mb-4" />
                                <h3 className="text-xl text-gray-400 font-semibold mb-4">Soul Ultimate Tour</h3>
                                <p className="text-lg text-gray-400  mb-2 flex items-center">
                                    <img src={dat} alt="Ksh" className="w-[16px] h-[16px] mr-2" />
                                    January 25, 2025</p>
                                <p className="text-sm text-gray-400 mb-2 flex items-center">
                                    <img src={loc} alt="Ksh" className="w-[16px]  mr-2" />
                                    Afterglow, Nairobi, Kenya.</p>
                                <p className="text-sm text-gray-400 flex items-center">
                                    <img src={ksh} alt="Ksh" className="w-[16px] h-[16px] mr-2" />
                                    Ksh. 20000/-</p>
                                <div className="text-center  mt-6 mb-3">
                                    <a href="#" className="bg-white font-bold text-black hover:bg-amber-200 px-20 py-3  ">
                                        Get Tickets
                                    </a>
                                </div>
                            </div>
                            {/* Event 2 */}
                            <div className="w-full md:w-[30%] bg-black shadow-lg flex flex-col items-center justify-center text-center p-4 mb-6">
                                <img src={eventImage2} alt="Event 2" className="w-full h-[200px] object-cover  mb-4" />
                                <h3 className="text-xl text-gray-400 font-semibold mb-4">Soul Ultimate Tour</h3>
                                <p className="text-lg text-gray-400  mb-2 flex items-center">
                                    <img src={dat} alt="Ksh" className="w-[16px] h-[16px] mr-2" />
                                    January 25, 2025</p>
                                <p className="text-sm text-gray-400 mb-2 flex items-center">
                                    <img src={loc} alt="Ksh" className="w-[16px]  mr-2" />
                                    Afterglow, Nairobi, Kenya.</p>
                                <p className="text-sm text-gray-400 flex items-center">
                                    <img src={ksh} alt="Ksh" className="w-[16px] h-[16px] mr-2" />
                                    Ksh. 20000/-</p>
                                <div className="text-center  mt-6 mb-3">
                                    <a href="#" className="bg-white font-bold text-black hover:bg-amber-200 px-20 py-3  ">
                                        Get Tickets
                                    </a>
                                </div>
                            </div>
                            {/* Event 3 */}
                            <div className="w-full md:w-[30%] bg-black shadow-lg flex flex-col items-center justify-center text-center p-4 mb-6">
                                <img src={eventImage3} alt="Event 3" className="w-full h-[200px] object-cover  mb-4" />
                                <h3 className="text-xl text-gray-400 font-semibold mb-4">Soul Ultimate Tour</h3>
                                <p className="text-lg text-gray-400  mb-2 flex items-center">
                                    <img src={dat} alt="Ksh" className="w-[16px] h-[16px] mr-2" />
                                    January 25, 2025</p>
                                <p className="text-sm text-gray-400 mb-2 flex items-center">
                                    <img src={loc} alt="Ksh" className="w-[16px]  mr-2" />
                                    Afterglow, Nairobi, Kenya.</p>
                                <p className="text-sm text-gray-400 flex items-center">
                                    <img src={ksh} alt="Ksh" className="w-[16px] h-[16px] mr-2" />
                                    Ksh. 20000/-</p>
                                <div className="text-center  mt-6 mb-3">
                                    <a href="#" className="bg-white font-bold text-black hover:bg-amber-200 px-20 py-3  ">
                                        Get Tickets
                                    </a>
                                </div>
                            </div>
                            {/* Event 4 */}
                            <div className="w-full md:w-[30%] bg-black shadow-lg flex flex-col items-center justify-center text-center p-4 mb-6">
                                <img src={eventImage4} alt="Event 4" className="w-full h-[200px] object-cover  mb-4" />
                                <h3 className="text-xl text-gray-400 font-semibold mb-4">Soul Ultimate Tour</h3>
                                <p className="text-lg text-gray-400  mb-2 flex items-center">
                                    <img src={dat} alt="Ksh" className="w-[16px] h-[16px] mr-2" />
                                    January 25, 2025</p>
                                <p className="text-sm text-gray-400 mb-2 flex items-center">
                                    <img src={loc} alt="Ksh" className="w-[16px]  mr-2" />
                                    Afterglow, Nairobi, Kenya.</p>
                                <p className="text-sm text-gray-400 flex items-center">
                                    <img src={ksh} alt="Ksh" className="w-[16px] h-[16px] mr-2" />
                                    Ksh. 20000/-</p>
                                <div className="text-center  mt-6 mb-3">
                                    <a href="#" className="bg-white font-bold text-black hover:bg-amber-200 px-20 py-3  ">
                                        Get Tickets
                                    </a>
                                </div>
                            </div>
                            {/* Event 5 */}
                            <div className="w-full md:w-[30%] bg-black shadow-lg flex flex-col items-center justify-center text-center p-4 mb-6">
                                <img src={eventImage5} alt="Event 5" className="w-full h-[200px] object-cover  mb-4" />
                                <h3 className="text-xl text-gray-400 font-semibold mb-4">Soul Ultimate Tour</h3>
                                <p className="text-lg text-gray-400  mb-2 flex items-center">
                                    <img src={dat} alt="Ksh" className="w-[16px] h-[16px] mr-2" />
                                    January 25, 2025</p>
                                <p className="text-sm text-gray-400 mb-2 flex items-center">
                                    <img src={loc} alt="Ksh" className="w-[16px]  mr-2" />
                                    Afterglow, Nairobi, Kenya.</p>
                                <p className="text-sm text-gray-400 flex items-center">
                                    <img src={ksh} alt="Ksh" className="w-[16px] h-[16px] mr-2" />
                                    Ksh. 20000/-</p>
                                <div className="text-center  mt-6 mb-3">
                                    <a href="#" className="bg-white font-bold text-black hover:bg-amber-200 px-20 py-3  ">
                                        Get Tickets
                                    </a>
                                </div>
                            </div>
                            {/* Event 6 */}
                            <div className="w-full md:w-[30%] bg-black shadow-lg flex flex-col items-center justify-center text-center p-4 mb-6">
                                <img src={eventImage6} alt="Event 6" className="w-full h-[200px] object-cover  mb-4" />
                                <h3 className="text-xl text-gray-400 font-semibold mb-4">Soul Ultimate Tour</h3>
                                <p className="text-lg text-gray-400  mb-2 flex items-center">
                                    <img src={dat} alt="Ksh" className="w-[16px] h-[16px] mr-2" />
                                    January 25, 2025</p>
                                <p className="text-sm text-gray-400 mb-2 flex items-center">
                                    <img src={loc} alt="Ksh" className="w-[16px]  mr-2" />
                                    Afterglow, Nairobi, Kenya.</p>
                                <p className="text-sm text-gray-400 flex items-center">
                                    <img src={ksh} alt="Ksh" className="w-[16px] h-[16px] mr-2" />
                                    Ksh. 20000/-</p>
                                <div className="text-center  mt-6 mb-3">
                                    <a href="#" className="bg-white font-bold text-black hover:bg-amber-200 px-20 py-3  ">
                                        Get Tickets
                                    </a>
                                </div>
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
                {/* Our Partners Section */}
                <div className="w-full py-12  mt-12">
                    <div className="w-[80%] mx-auto text-center">
                        <h2 className="text-3xl font-semibold mb-8">Our Partners</h2>
                        <div className="flex justify-center gap-12">
                            <img src={partnerImage1} alt="Partner 1" className="w-[150px] h-[150px] object-contain" />
                            <img src={partnerImage2} alt="Partner 2" className="w-[150px] h-[150px] object-contain" />
                            <img src={partnerImage3} alt="Partner 3" className="w-[150px] h-[150px] object-contain" />
                        </div>
                    </div>
                </div>
                {/* Summertides Section */}
                {/* <section id="summertides" className="py-20"> */}
                <div id="summertides" className="w-full  py-12 px-12 flex flex-col items-center">
                    {/* Heading */}
                    <div className="text-center w-full mb-8">
                        <h2 className="text-4xl font-bold">Summertides</h2>
                    </div>
                    {/* Image Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 place-items-center w-full  max-w-5xl">
                        <img src={summertidesImage1} alt="Summertides" className="w-full h-auto rounded-lg shadow-lg" />
                        <img src={summertidesImage2} alt="Summertides" className="w-full h-auto rounded-lg shadow-lg" />
                        <img src={summertidesImage3} alt="Summertides" className="w-full h-auto rounded-lg shadow-lg" />
                        <img src={summertidesImage4} alt="Summertides" className="w-full h-auto rounded-lg shadow-lg" />
                        <img src={summertidesImage5} alt="Summertides" className="w-full h-auto rounded-lg shadow-lg" />
                        <img src={summertidesImage6} alt="Summertides" className="w-full h-auto rounded-lg shadow-lg" />
                        <img src={summertidesImage7} alt="Summertides" className="w-full h-auto rounded-lg shadow-lg" />
                        <img src={summertidesImage8} alt="Summertides" className="w-full h-auto rounded-lg shadow-lg" />
                        <img src={summertidesImage9} alt="Summertides" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                </div>
                {/* </section> */}
                {/* Airbeat Foundation Section */}
                <div id="foundation" className="w-full py-12 px-12 mt-15">
                    {/* Heading */}
                    <div className="text-center w-full mb-10">
                        <h2 className="text-4xl font-bold">Airbeat Foundation</h2>
                    </div>
                    <div className="w-[80%] mx-auto flex flex-col md:flex-row items-center">

                        {/* Left Side: Image with Overlapping Text Block */}
                        <div className="md:w-1/2 w-full relative mb-8 md:mb-0 mt-8">
                            {/* Main Foundation Image */}
                            <img
                                src={foundationImage}
                                alt="Airbeat Foundation"
                                className="w-full h-auto rounded-lg shadow"
                            />
                            {/* Overlapping Text Block */}
                            <div
                                className="absolute top-[350px]  left-[376px] w-[363px] h-[322px]  bg-white flex flex-col items-center justify-center rounded-lg shadow-md p-4 mr-5 "
                                style={{ borderColor: "rgba(0, 0, 0, 0.2)", borderWidth: "10px" }}
                            >
                                <ul className="list-disc size-10/12 text-gray-800 text-left space-y-1">
                                    <li>Together, we're going to make the future.</li>
                                    <li>We will fulfill all children's requirements to keep them safe.</li>
                                    <li>We will protect them from a withered world.</li>
                                    <li>We have already stepped out and started changing the world.</li>
                                    <li>We are committed to keeping them safe from war and inhumanity.</li>
                                </ul>
                            </div>
                        </div>
                        {/* Right Side: Text Content */}
                        <div className="w-1/2 ml-[150px] z-20 relative flex flex-col items-start pl-20 ">
                            {/* Short Line and Bold Heading */}
                            <div className="flex items-center mb-6">
                                <div className="w-[90px] border-t border-black mr-2"></div> {/* Shortened line */}
                                <h2 className="font-bold text-black text-xl  ">Welcome to Charity</h2>
                            </div>
                            <h3 className="text-bold-black text-[32px] font-semibold mb-2 mr-10">
                                Let Us Come Together To Make a Difference
                            </h3>
                            <p className="p-1 leading-7 text-gray-800 mb-6">
                                The AIRBEAT Foundation, in collaboration with The Way to Womanhood and Summer Tides, is proud to host a charity event at the Edmund Rice Center in Nairobi, located along Kolobot road. This event is dedicated to gathering resources and support for our community, with a focus on providing essential items and monetary contributions.
                                <br />
                                We are currently accepting donations of dry food items, school supplies, and toiletries (including sanitary products).
                                <br />
                                For those who wish to contribute financially, donations can be made via <strong>PayBill  542542</strong>, with the account number <strong>176200</strong> under the name E.R.C.N. If you are able to facilitate the drop-off of donations, please contact us at @thewaytowomanhood.
                                <br />
                                <br />
                                Join us in this compassionate cause and help us spread love and hope by making a donation today!
                            </p>

                            <a
                                href="#"
                                className="bg-black text-white hover:bg-gray-700 px-6 py-3 rounded-md transition duration-300 ease-in-out flex items-center"
                            >
                                Donate Now
                                <img className='ml-2 w-4 h-4 ' src={arrowIcon}></img>
                            </a>
                        </div>
                    </div>
                </div>
                
                <Footer />
            </div>
            );
}

            export default Home;
