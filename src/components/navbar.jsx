import React, { useEffect, useState } from "react";
import { GitHub, Linkedin, Instagram, Facebook, Menu } from 'react-feather';

function Navbar() {
    const [scrollY, setScrollY] = useState(0);
    
    function trackScroll() {
        setScrollY(window.pageYOffset);
    }

    function addBg() {
        const nav = document.getElementById('custom-nav');
        const scrollBorder = document.getElementById('custom-scroll-border');
        nav.classList.remove('bg-transparent');
        nav.classList.add('bg-white');
        nav.classList.add('text-black');
        nav.classList.remove('text-white');
        nav.style.transition = '.5s';

        scrollBorder.classList.add('border-cyan-500');
    };

    function removeBg() {
        const nav = document.getElementById('custom-nav');
        const scrollBorder = document.getElementById('custom-scroll-border');
        nav.classList.add('bg-transparent');
        nav.classList.remove('bg-white');
        nav.classList.remove('text-black');
        nav.classList.add('text-white');
        nav.style.transition = '.5s';

        scrollBorder.classList.remove('border-cyan-500');
    };

    function showMenuMobile() {
        const navMobile = document.getElementById('custom-nav-mobile');
        navMobile.classList.add('block')
        navMobile.classList.remove('hidden')
    }

    function hiddenMenuMobile() {
        const navMobile = document.getElementById('custom-nav-mobile');
        navMobile.classList.remove('block')
        navMobile.classList.add('hidden')
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", trackScroll);
        }
        watchScroll();

        if (scrollY > 100) {
            return (
                addBg()
            );
        } else {
            return (
                removeBg()
            );
        }
    });

    return(
        <div>
            <section id="custom-nav" className="fixed w-full px-8 bg-transparent body-font shadow-md" style={{zIndex: 10}}>
                <div className="container m-auto">
                    <nav className="flex justify-between p-6 px-4">
                        <div className="flex justify-between items-center w-full">
                            <div className="xl:w-1/3">
                                <a href="#_" className="relative z-10 md:pl-10 flex items-center w-auto text-2xl font-extrabold leading-none select-none">mHaidar.</a>
                            </div>
                            <div className="hidden xl:block xl:w-1/3">
                                <ul className="flex justify-center">
                                    <li className="mr-12"><a className="text-coolGray-500 hover:text-coolGray-900 font-medium" href="#">Home</a></li>
                                    <li className="mr-12"><a className="text-coolGray-500 hover:text-coolGray-900 font-medium" href="#">Project</a></li>
                                    <li className="mr-12"><a className="text-coolGray-500 hover:text-coolGray-900 font-medium" href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div className="hidden xl:block xl:w-1/3 h-16">
                                <div className="relative">
                                    <div id="custom-scroll-border" className="z-10 absolute top-0 right-0 inline-flex w-3/4 text-center items-center space-x-3 lg:justify-end md:block border-2 px-10 py-2 rounded-full">
                                        <a href="https://github.com/golz04" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 whitespace-no-wrap focus:outline-none focus:shadow-none">
                                            <GitHub />
                                        </a>
                                        <a href="https://www.linkedin.com/in/muhammad-haidar-43b368152/" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 whitespace-no-wrap focus:outline-none focus:shadow-none">
                                            <Linkedin />
                                        </a>
                                        <a href="https://www.instagram.com/muhammadhaidar862/" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 whitespace-no-wrap focus:outline-none focus:shadow-none">
                                            <Instagram />
                                        </a>
                                        <a href="https://www.facebook.com/" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 whitespace-no-wrap focus:outline-none focus:shadow-none">
                                            <Facebook />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={showMenuMobile} className="navbar-burger self-center xl:hidden">
                            <Menu />
                        </button>
                    </nav>
                    <div id="custom-nav-mobile" className="navbar-menu hidden md:hidden text-black fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
                        <div className="fixed top-0 left-0 bottom-0 w-full bg-white">
                            <nav className="relative p-6 h-full overflow-y-auto">
                                <div className="flex flex-col justify-between h-full">
                                    <a href="#_" className="inline-block z-10 md:pl-10 flex items-center w-auto text-2xl font-extrabold leading-none select-none">mHaidar.</a>
                                    <ul className="py-6">
                                        <li><a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#">Home</a></li>
                                        <li><a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#">Project</a></li>
                                        <li><a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="#">Contact</a></li>
                                    </ul>
                                    <div className="relative z-10 inline-flex items-center space-x-20 md:ml-5 lg:justify-end text-center md:block border-2 px-14 py-2 rounded-full">
                                        <a href="https://github.com/golz04" className="py-2 text-base font-medium leading-6 whitespace-no-wrap focus:outline-none focus:shadow-none">
                                            <GitHub />
                                        </a>
                                        <a href="https://www.linkedin.com/in/muhammad-haidar-43b368152/" className="py-2 text-base font-medium leading-6 whitespace-no-wrap focus:outline-none focus:shadow-none">
                                            <Linkedin />
                                        </a>
                                        <a href="https://www.instagram.com/muhammadhaidar862/" className="py-2 text-base font-medium leading-6 whitespace-no-wrap focus:outline-none focus:shadow-none">
                                            <Instagram />
                                        </a>
                                        <a href="https://www.facebook.com/" className="py-2 text-base font-medium leading-6 whitespace-no-wrap focus:outline-none focus:shadow-none">
                                            <Facebook />
                                        </a>
                                    </div>
                                </div>
                            </nav>
                            <button className="navbar-close z-10 absolute top-5 p-4 right-3 border" onClick={hiddenMenuMobile}>
                                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={hiddenMenuMobile}>
                                    <path d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z" fill="#556987" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Navbar;