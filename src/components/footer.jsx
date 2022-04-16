import React from "react";
import { GitHub, Linkedin, Instagram, Facebook } from 'react-feather';

function Footer(){
    return(
        <footer className="text-center bg-gradient-to-r from-blue-500/[.90] to-cyan-500/[.90] text-white">
            <div className="container m-auto px-6 pt-6">
                <div className="flex justify-center text-center mb-6">
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
            <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                &copy; Copyright 2022 | Made With &hearts; "mHaidar"
            </div>
        </footer>
    );
}

export default Footer;