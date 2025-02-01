import React, { useState } from 'react';

const DropdownSection = () => {
    // State for dropdowns
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedEventType, setSelectedEventType] = useState('');

    return (
        <div className="flex space-x-4">
            {/* Date Dropdown */}
            <div className="w-[150px]">
                <select
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full py-2 px-3 text-sm bg-[#67676733] border border-gray-300 rounded-[50px]"
                >
                    <option value="" disabled>Yearly</option>
                    <option value="today">Today</option>
                    <option value="this-week">This Week</option>
                    <option value="next-week">Next Week</option>
                    <option value="this-month">This Month</option>
                </select>
            </div>

            {/* Location Dropdown */}
            <div className="w-[150px]">
                <select
                    id="location"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full py-2 px-3 text-sm bg-[#67676733] border border-gray-300 rounded-[50px]"
                >
                    <option value="" disabled>Location</option>
                    <option value="nyc">New York City</option>
                    <option value="la">Los Angeles</option>
                    <option value="sf">San Francisco</option>
                    <option value="chicago">Chicago</option>
                </select>
            </div>

            {/* Event Type Dropdown */}
            <div className="w-[150px]">
                <select
                    id="event-type"
                    value={selectedEventType}
                    onChange={(e) => setSelectedEventType(e.target.value)}
                    className="w-full py-2 px-3 text-sm bg-[#6767672f] border border-gray-300 rounded-[50px]"
                >
                    <option value="" disabled>Event Type</option>
                    <option value="music">Music</option>
                    <option value="comedy">Comedy</option>
                    <option value="theater">Theater</option>
                    <option value="conference">Conference</option>
                </select>
            </div>
        </div>
    );
};

export default DropdownSection;
