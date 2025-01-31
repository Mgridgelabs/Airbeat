import React from 'react'
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import Navbar from "../Component/Navbar";


function Home() {
    return (
        <div className='bg-cover bg-center h-screen bg-white text-black'>
            <Navbar />
            <div className='flex flex-col items-center justify-center min-h-screen px-4'>
                <div className="w-[1272px] h-[758px]/* ">
                    <img src={image1} alt='center image' className='w-full rounded-lg shadow-lg' />
                </div>
                <div className="relative w-full flex justify-end mt-10 ">
                    <img src={image2} alt="right image" className='absolute w-[543px] h-[566px] bottom-[-700px] left-10 rounded-lg shadow-lg' />
                </div>
            </div>
        </div>
    )
}
export default Home;