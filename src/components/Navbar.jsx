import React, { useState } from "react";
import { Link } from "react-scroll";
import "@fontsource/poppins";

// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { IoLocationSharp } from "react-icons/io5";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>


            {/* Bottom Section */}
            <nav className={`bg-[#ECF3F1] font-poppins px-20   fixed top-0 left-0 w-full shadow-md z-50 transition-all duration-300 ${menuOpen ? "p-8" : "p-6"}`}>
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-semibold">Dorbesh</h1>

                    {/* Hamburger Menu for Small Screens */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {/* {menuOpen ? <FaTimes className="w-7 h-7" /> : <FaBars className="w-7 h-7" />} */}
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <ul className={`md:flex font-sans font-semibold space-x-6 ${menuOpen ? "block" : "hidden"} md:block absolute md:static top-20 left-0 w-full  md:w-auto shadow-md md:shadow-none p-4 md:p-0 z-50`}>
                        <li className="border-b hover:text-[#448C74] md:border-none py-2">
                            <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li className="border-b hover:text-[#448C74] md:border-none py-2">
                            <Link to="services" smooth={true} duration={500}>Services</Link>
                        </li>
                        <li className="border-b hover:text-[#448C74] md:border-none py-2">
                            <Link to="works" smooth={true} duration={500}>Works</Link>
                        </li>
                        <li className="border-b hover:text-[#448C74] md:border-none py-2">
                            <Link to="pricing" smooth={true} duration={500}>Pricing</Link>
                        </li>
                        <li className="border-b hover:text-[#448C74] md:border-none py-2">
                            <Link to="blog" smooth={true} duration={500}>Blog</Link>
                        </li>
                        <li className="border-b hover:text-[#448C74] md:border-none py-2">
                            <Link to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                    </ul>




                    {/* Contact Info */}
                    <div className="hidden md:flex items-center gap-5">
                        {/* <FaPhoneAlt className="w-10 h-10 " /> */}
                        <p className="flex flex-col">
                            <button className="border border-black rounded-xl px-8 py-3 hover:bg-[#448C74] duration-[0.51s] hover:border-hidden ">Hire me</button>
                        </p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;


