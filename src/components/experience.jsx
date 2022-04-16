import React from "react";
import { Calendar, User } from 'react-feather';

function Experience() {
    return(
        <section draggable="false" className="overflow-hidden pt-0">
            <section className="relative">
            <svg data-name="Layer 1" transform={'scale(-1)'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="svg absolute h-full lg:block" style={{zIndex: 0,}}>
                <defs>
                    <linearGradient id="sw-gradient-0" x1={0} x2={1} y1={0} y2={0}>
                        <stop stopColor="hsl(186.79,100.00%,41.57%)" offset="0%" />
                        <stop stopColor="hsl(206.57,89.74%,54.12%)" offset="100%" />
                    </linearGradient>
                </defs>
                <path fill="url(#sw-gradient-0)" d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z">
                </path>
            </svg>
            <div className="px-4 py-5 md:px-12 text-center text-lg-start">
                <div className="container mx-auto sm:px-4">
                    <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
                        <h1 className=" xl:text-5xl md:text-3xl text-xl text-center font-extrabold mb-5 pt-4">Resume</h1>
                        <p className="text-base md:text-lg lg:text-xl text-center font-normal xl:w-10/12 xl:mx-auto">Summary and Experience.</p>
                    </div>
                    <br />
                    <div className="flex flex-wrap gx-lg-5 items-start">
                        <div className="lg:w-1/3 pr-4 pl-4 mb-5 lg:mb-0" style={{zIndex: 1}}>
                            <ol className="relative border-l border-gray-200">
                                <li className="mb-10 ml-6 text-left">
                                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
                                        <User className="w-3 text-blue-600" />
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900">MUHAMMAD HAIDAR</h3>
                                    <time className="block mb-2 text-sm font-semibold leading-none text-gray-400">Fullstack Developer</time>
                                    <p className="mb-4 text-base font-normal text-gray-500">I am a Fullstack Developer with more than 2 years of experience. I use programming language like PHP, Java, .NET, JS, Python and Dart.</p>
                                </li>
                                <li className="mb-10 ml-6 text-left">
                                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
                                        <Calendar className="w-3 text-blue-600" />
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900">BACHELOR IN INFORMATICS</h3>
                                    <time className="block mb-2 text-sm font-semibold leading-none text-gray-400">2019 - 2023 (Expected)</time>
                                    <p className="mb-4 text-base font-normal text-gray-500">
                                        <span className="italic">University of Jember, Jember, ID</span><br />
                                        Course: Algorithms; Web Development; Object-Oriented Programming; Software Analysis and Design;
                                    </p>
                                </li>
                            </ol>
                            <br /><br />
                        </div>
                        <div className="lg:w-1/3 pr-4 pl-4 mb-5 lg:mb-0" style={{zIndex: 1}}>
                            <ol className="relative border-l border-gray-200">
                                <li className="mb-10 ml-6 text-left">
                                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
                                        <User className="w-3 text-blue-600" />
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900">PT. BANK SYARIAH INDONESIA</h3>
                                    <time className="block mb-2 text-sm font-semibold leading-none text-gray-400">August 2021 - January 2022</time>
                                    <p className="mb-4 text-base font-normal text-gray-500">IT Infrastructure and Security</p>
                                </li>
                                <li className="mb-10 ml-6 text-left">
                                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
                                        <Calendar className="w-3 text-blue-600" />
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900">PT. PENGGERAK SADAR PONDASI BERINOVASI</h3>
                                    <time className="block mb-2 text-sm font-semibold leading-none text-gray-400">June 2021 - November 2021</time>
                                    <p className="mb-4 text-base font-normal text-gray-500">Mobile App Developer</p>
                                </li>
                                <li className="mb-10 ml-6 text-left">
                                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
                                        <Calendar className="w-3 text-blue-600" />
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900">LIMA DIGITAL ID</h3>
                                    <time className="block mb-2 text-sm font-semibold leading-none text-gray-400">July 2021</time>
                                    <p className="mb-4 text-base font-normal text-gray-500">Mobile App Developer</p>
                                </li>
                                <li className="mb-10 ml-6 text-left">
                                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
                                        <Calendar className="w-3 text-blue-600" />
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900">PT. RETGOO SENTRIS INFORMA</h3>
                                    <time className="block mb-2 text-sm font-semibold leading-none text-gray-400">October 2017 - March 2018</time>
                                    <p className="mb-4 text-base font-normal text-gray-500">Backend Software Developer</p>
                                </li>
                            </ol>
                            <br /><br />
                        </div>
                        <div className="lg:w-1/3 pr-4 pl-4 mb-5 lg:mb-0" style={{zIndex: 1}}>
                            <ol className="relative border-l border-gray-200">
                                <li className="mb-10 ml-6 text-left">
                                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
                                        <Calendar className="w-3 text-blue-600" />
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900">INFORMATICS STUDENT ASSOCIATION</h3>
                                    <time className="block mb-2 text-sm font-semibold leading-none text-gray-400">December 2021 - December 2022</time>
                                    <p className="mb-4 text-base font-normal text-gray-500">Head Departement Division Media and Technology</p>
                                </li>
                                <li className="mb-10 ml-6 text-left">
                                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
                                        <Calendar className="w-3 text-blue-600" />
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900">INFORMATICS STUDENT ASSOCIATION</h3>
                                    <time className="block mb-2 text-sm font-semibold leading-none text-gray-400">December 2020 - December 2021</time>
                                    <p className="mb-4 text-base font-normal text-gray-500">Staff Division Media and Technology</p>
                                </li>
                                <li className="mb-10 ml-6 text-left">
                                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
                                        <User className="w-3 text-blue-600" />
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900">INFORMATICS STUDENT ASSOCIATION</h3>
                                    <time className="block mb-2 text-sm font-semibold leading-none text-gray-400">December 2019 - December 2020</time>
                                    <p className="mb-4 text-base font-normal text-gray-500">Staff Division Media and Technology</p>
                                </li>
                            </ol>
                            <br /><br />
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </section>
    );
}

export default Experience;