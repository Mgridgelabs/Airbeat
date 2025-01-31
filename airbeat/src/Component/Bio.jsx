import React from 'react';
import playIcon from '../assets/playicon.png'; 
import yourImage from '../assets/bioimage.png';
// Importing the sponsor logos
import sponsor1 from '../assets/sponsor1.png';
import sponsor2 from '../assets/sponsor2.png';
import sponsor3 from '../assets/sponsor3.png';
import sponsor4 from '../assets/sponsor4.png';

function Bio() {
    return (
        <div className="bg-white w-full flex flex-col items-center">
            {/* Full-width Top Border */}
            <div className="w-full border-t border-black mb-12"></div>

            {/* Content Section - Split into Left & Right */}
            <div className="w-[80%] flex justify-between items-start">
                
                {/* Left Section - Title & Heading */}
                <div className="w-[45%] flex flex-col items-start pr-8"> {/* Added padding-right */}
                    {/* Short Line and Bold Heading */}
                    <div className="flex items-center mb-4">
                        <div className="w-[100px] border-t border-black mr-4"></div>
                        <h2 className="font-bold text-black text-xl tracking-wide uppercase">
                            Know About Us
                        </h2>
                    </div>

                    {/* Large Heading (Font Size Increased) */}
                    <h3 className="text-black text-[40px] font-semibold leading-tight mb-4">
                        A successful event starts with the guest experience, 
                        that’s where we can help.
                    </h3>
                </div>

                {/* Right Section - Paragraph */}
                <div className="w-[50%]">
                    <p className="text-black text-[20px] leading-[32px]">
                        Airbeat Global Entertainment Ltd, also known as Airbeat LLC, is an SME organization that was founded in late 2017 by CEO & Founder, Kasey Omwanda. The idea behind Airbeat started in 2016 when we held our first event under the alias ‘ku5’. We saw a space in the industry, and the formation of Airbeat LLC commenced.
                        The drive was to create a seat for other young entertainment moguls at the table, which had proven hard to penetrate for years. In 2017, after the Afterglow event, we discovered a passion and drive that we didn’t know was there – to make people connect and feel happy through an experience curated by us. Later on in the year, Airbeat LLC was launched.
                    </p>
                </div>
            </div>

            {/* Image with Play Icon Below Text */}
            <div className="w-full flex justify-center mt-12 relative">
                <img
                    src={yourImage} 
                    alt="Video Thumbnail"
                    className="w-[80%] max-w-[800px] rounded-lg"
                />
                {/* Play Icon */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <img
                        src={playIcon} 
                        alt="Play Icon"
                        className="w-[60px] h-[60px] cursor-pointer"
                    />
                </div>
            </div>

            {/* Bottom Black Section with Mission, Vision, and Values */}
            <div className="w-full h-full bg-black text-white py-12 mt-[-50px]">
                <div className="w-[80%] mx-auto flex justify-between items-start">

                    {/* Mission - Left Aligned */}
                    <div className="w-[30%] text-left mt-10">
                        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-lg">
                            To continue creating unforgettable experiences to the masses in the entertainment scene in Kenya and beyond.
                        </p>
                    </div>

                    {/* Vision - Center Aligned */}
                    <div className="w-[30%] text-center mt-10">
                        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
                        <p className="text-lg">
                            To renovate the African entertainment scene as a whole.
                        </p>
                    </div>

                    {/* Values - Right Aligned */}
                    <div className="w-[30%] text-center mt-15">
                        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
                        <ul className="list-none text-lg space-y-2">
                            <li>Integrity</li>
                            <li>Respect</li>
                            <li>Unity</li>
                            <li>Love</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Sponsors Section */}
            <div className="w-full bg-black py-12">
                <div className="w-[80%] mx-auto text-left">
                    <h2 className="text-3xl font-semibold mb-7">Our Sponsors</h2>
                    <div className="flex justify-left gap-8">
                        {/* Sponsor 1 */}
                        <img src={sponsor1} alt="Sponsor 1" className="w-[150px] h-[50px] mr-10 object-contain" />
                        {/* Sponsor 2 */}
                        <img src={sponsor2} alt="Sponsor 2" className="w-[150px] h-[50px] mr-10 object-contain" />
                        {/* Sponsor 3 */}
                        <img src={sponsor3} alt="Sponsor 3" className="w-[150px] h-[50px]  mr-10 object-contain" />
                        {/* Sponsor 4 */}
                        <img src={sponsor4} alt="Sponsor 3" className="w-[150px] h-[50px]  object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bio;
