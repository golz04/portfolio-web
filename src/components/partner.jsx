import React from "react";

function Partner() {
    return (
        <div className="bg-gradient-to-r from-blue-500/[.90] to-cyan-500/[.90]">
            <div className="container mx-auto py-16">
                <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
                    <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-white font-extrabold mb-5 pt-4">Have Contributed On</h1>
                    <p className="text-base md:text-lg lg:text-xl text-center text-white font-normal xl:w-10/12 xl:mx-auto">For about 2 years I have contributed in the IT world, I have worked in various companies and organizations.</p>
                </div>
                <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                        <img src="assets/company/bsi.png" alt="logo-company" className="drop-shadow-lg grayscale hover:filter-none" />
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                        <img src="assets/company/retgoo.png" alt="logo-company" className="drop-shadow-lg grayscale hover:filter-none" />
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                        <img src="assets/company/noto.png" alt="logo-company" className="drop-shadow-lg grayscale hover:filter-none" />
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                        <img src="assets/company/theskills.png" alt="logo-company" className="drop-shadow-lg grayscale hover:filter-none" />
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                        <img src="assets/company/lightsoft.png" alt="logo-company" className="drop-shadow-lg grayscale hover:filter-none" />
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                        <img src="assets/company/hmif.png" alt="logo-company" className="drop-shadow-lg grayscale hover:filter-none" />
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                        <img src="assets/company/investa.png" alt="logo-company" className="drop-shadow-lg grayscale hover:filter-none" />
                    </div>
                    <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                        <img src="assets/company/infish.png" alt="logo-company" className="drop-shadow-lg grayscale hover:filter-none" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partner;
