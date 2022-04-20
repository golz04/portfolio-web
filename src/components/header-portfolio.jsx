import React from 'react';

// import { Container } from './styles';

function HeaderPortfolio() {
    return (
        <div className="relative mx-auto" style={{zIndex:'5'}}>
            <section className="pt-24 text-gray-800 background-radial-gradient">
                <div className="px-6 py-12 md:px-12 text-center lg:text-left">
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                            <div className="mt-12 lg:mt-0">
                                <h1 className="text-5xl md:text-6xl xl:text-7xl font-semi tracking-tight mb-10" style={{color: 'hsl(218, 81%, 95%)'}}>
                                    Welcome To My Galleries.
                                    <br />
                                    <span className="text-blue-900">It's Nice To Meet You.</span>
                                </h1>
                                <p className="text-lg" style={{color: 'hsl(218, 81%, 95%)'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur adipisci tenetur repudiandae rerum quos.</p>
                            </div>
                            <div className="mb-12 lg:mb-0">
                                <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg" style={{paddingTop: '56.25%'}}>
                                    <iframe title="video-player" className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full" src="https://www.youtube.com/embed/u4m13jdBi-o" allowFullScreen data-gtm-yt-inspected-2340190_699="true" id={240632615} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HeaderPortfolio;