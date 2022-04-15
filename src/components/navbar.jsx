import React from "react";
import { GitHub, Linkedin, Instagram, Facebook } from 'react-feather';

function Navbar() {
    return(
        <div>
            <section className="relative w-full px-8 text-gray-700 bg-white body-font shadow-md">
                <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <a href="#_" className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">Portfolio.</a>
                    <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
                        <a href="#_" className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900 custom-hover-nav">
                            <span className="block">Works</span>
                        </a>
                        <a href="#_" className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900 custom-hover-nav">
                            <span className="block">Contact</span>
                        </a>
                    </nav>
                    <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end hidden md:block">
                        <a href="https://github.com/golz04" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                            <GitHub />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-haidar-43b368152/" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                            <Linkedin />
                        </a>
                        <a href="https://www.instagram.com/muhammadhaidar862/" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                            <Instagram />
                        </a>
                        <a href="https://www.facebook.com/" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                            <Facebook />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Navbar;