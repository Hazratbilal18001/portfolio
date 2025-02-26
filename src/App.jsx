import React from "react";
import Navbar from "./components/Navbar"; // Ensure this path is correct
import Top from "./components/About"
import About from "./components/About";
import Services from "./components/Services";


// Date 26 feb 2025


const Home = () => {
  return (
    <div>
      <Navbar /> {/* Your Navigation Bar */}
      <About />
      <Services />

      {/* Sections for Smooth Scrolling */}
      <section className='h-screen bg-amber-300' id="about">About </section>
      <section className='h-screen bg-blue-300' id="services">Services </section>
      <section className='h-screen bg-green-300' id="works">Works </section>
      <section className='h-screen bg-yellow-300' id="pricing">Pricing </section>
      <section className='h-screen bg-red-300' id="blog">Blog </section>
      <section className='h-screen bg-black' id="contact">Contact </section>
    </div >
  );
};

export default Home;



