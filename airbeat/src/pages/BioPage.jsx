import React from 'react';
import Navbar from '../Component/Navbar';
import Bio from '../Component/Bio'; // Ensure correct import

function BioPage() {
    return (
        <>
            <Navbar />
            <div className="bg-white min-h-screen p-8">
                <Bio /> {/* Render the Bio content */}
            </div>
        </>
    );
}

export default BioPage;
