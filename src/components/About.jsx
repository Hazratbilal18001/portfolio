import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { TfiDownload } from "react-icons/tfi";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style


const About = () => {
    return (
        <div id="about" className="flex font-Poppins w-full gap-6 pt-30 px-20 bg-[#ECF3F1]">
            {/* Left Side - Card */}
            < div className="w-[30%] h-[37rem] bg-white shadow-lg rounded-xl flex flex-col items-center p-6" >
                {/* Profile Image */}
                <div className="pt-4">
                    < div className=" rounded-full border-2  border-dashed border-[#448C74] overflow-hidden" >
                        <img src="./images/CEO1.jpeg" alt="Profile" className="w-64 object-cover" />
                    </div >
                </div>
                {/* Name & Description */}
                < h2 className="text-xl font-bold mt-16 text-[30px]" > Muhammad Awais</h2 >
                <p className="text-gray-600 text-center mt-2">I am a Web Designer based in san francisco.</p>
                {/* Social Icons */}
                <div className="flex gap-3 mt-11 text-xl">
                    <a href="#" className="border border-[#EEEEEE] h-13 w-12  flex items-center justify-center rounded-lg p-2 text-[#444444] hover:text-[#448C74] ">
                        <FaFacebook />
                    </a>
                    <a href="#" className="border border-[#EEEEEE] h-13 w-12  flex items-center justify-center rounded-lg p-2 text-[#444444]  hover:text-[#448C74]">
                        <FaTwitter />
                    </a>
                    <a href="#" className="border border-[#EEEEEE] h-13 w-12  flex items-center justify-center rounded-lg p-2 text-[#444444]  hover:text-[#448C74]">
                        <FaLinkedin />
                    </a>
                    <a href="#" className="border border-[#EEEEEE] h-13 w-12  flex items-center justify-center rounded-lg p-2 text-[#444444]  hover:text-[#448C74]">
                        <FaGithub />
                    </a>

                </div>
            </div >

            {/* Right Side - Content */}
            < div className="w-[70%] h-screen flex flex-col gap-6" >
                {/* Top Section */}
                < div className="bg-white shadow-lg rounded-xl p-8  h-[70vh] flex flex-col justify-between" >
                    <h4 className="text-gray-500">Hello There!</h4>
                    <h1 className="text-5xl font-bold w-[75%]">
                        I’M <span className="text-gray-400">DORBESH BABA</span>, A PRODUCT DESIGNER CRAFTING <span className="text-gray-400">USER-CENTRIC DESIGN</span> WITH PIXEL-PERFECT PRECISION.
                    </h1>
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <p>Available for Freelancing</p>
                    </div>
                    <button className="flex items-center bg-green-600 w-44 text-white py-3 px-5 rounded-lg   space-x-2">
                        <span>Download CV</span>
                        <TfiDownload />
                        <i className="ri-download-2-line"></i>
                    </button>
                </div >

                {/* Scrolling Text */}
                < div className="bg-white flex items-center rounded-2xl w-full h-32 overflow-hidden whitespace-nowrap text-3xl font-semibold " >
                    <marquee behavior="scroll" direction="left">Welcome to my portfolio! I love building amazing web applications.</marquee>
                </div >
            </div >
        </div >
    );
};

export default About;
