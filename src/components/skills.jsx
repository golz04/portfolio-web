import React from "react";
import { CheckCircle } from 'react-feather';

function Skills(){
    return(
        <div className="container md:my-24 px-6 mx-auto">
            <section className="mb-32">
                <style dangerouslySetInnerHTML={{__html: "\n      @media (min-width: 992px) {\n        #cta-img-nml-50 {\n          margin-left: 50px;\n        }\n      }\n    " }} />
                <div className="flex flex-wrap">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0" style={{zIndex: 2 }}>
                        <div className="lg:py-12">
                            <img src={process.env.PUBLIC_URL + '/assets/image/skills.svg'} className="w-full custom-z-index bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg" id="cta-img-nml-50" style={{zIndex: 2 }} alt="" />
                        </div>
                    </div>
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12" style={{zIndex: 1 }}>
                        <div className="bg-blue-500 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left" style={{zIndex: 1 }}>
                            <div className="lg:px-12">
                                <h2 className="text-3xl font-bold mb-5">A Little Biography</h2>
                                <p className="mb-6 pb-2 lg:pb-0"> Work for money and code for love ! Hello everyone, I'm Haidar, an Fullstack Developer based in Indonesia.</p>
                                <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
                                    <div className="grid md:grid-cols-3 gap-x-6 m-auto">
                                        <div className="mb-12 md:mb-0 text-center">
                                            <CheckCircle className="mb-4 m-auto" />
                                            <h5 className="text-lg font-medium mb-0">Good Worker</h5>
                                        </div>

                                        <div className="mb-12 md:mb-0 text-center">
                                            <CheckCircle className="mb-4 m-auto" />
                                            <h5 className="text-lg font-medium mb-0">Good Attitude</h5>
                                        </div>

                                        <div className="text-center">
                                            <CheckCircle className="mb-4 m-auto" />
                                            <h5 className="text-lg font-medium mb-0">50+ Project Done</h5>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold my-5">A Little Biography</h2>
                                <div className="px-10 flex flex-col space-y-2">
                                    <div>
                                        <div className="flex justify-between pr-2">
                                            <span>HTML + CSS (Bootstrap / Tails)</span>
                                            <span>90%</span>
                                        </div>
                                        <div className="relative w-full bg-gray-200 rounded">
                                            <div className="absolute top-0 h-4 rounded shim-blue border w-11/12" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between pr-2">
                                            <span>PHP (Blade + Laravel / CI)</span>
                                            <span>90%</span>
                                        </div>
                                        <div className="relative w-full bg-gray-200 rounded">
                                            <div className="absolute top-0 h-4 rounded shim-blue border w-11/12" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between pr-2">
                                            <span>Dart (Flutter) / Java</span>
                                            <span>70%</span>
                                        </div>
                                        <div className="relative w-full bg-gray-200 rounded">
                                            <div className="absolute top-0 h-4 rounded shim-blue border w-9/12" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between pr-2">
                                            <span>.NET (VB.NET) / C#</span>
                                            <span>50%</span>
                                        </div>
                                        <div className="relative w-full bg-gray-200 rounded">
                                            <div className="absolute top-0 h-4 rounded shim-blue border w-6/12" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between pr-2">
                                            <span>Python</span>
                                            <span>50%</span>
                                        </div>
                                        <div className="relative w-full bg-gray-200 rounded">
                                            <div className="absolute top-0 h-4 rounded shim-blue border w-6/12" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between pr-2">
                                            <span>VueJS (NuxtJS) / ReactJS</span>
                                            <span>25%</span>
                                        </div>
                                        <div className="relative w-full bg-gray-200 rounded">
                                            <div className="absolute top-0 h-4 rounded shim-blue border w-3/12" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;