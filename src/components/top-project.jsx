import React from 'react'
import Slider from "react-slick";

function TopProjects() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <div className="relative"  style={{zIndex:'5'}}>
            <section className="container mx-auto sm:px-4 my-10 mb-10">
                <h1 className="mb-10 xl:text-5xl md:text-2xl text-xl text-center font-extrabold pt-4">Projects</h1>
                <div className="flex flex-wrap gx-lg-5">
                </div>
                <Slider {...settings}>
                    <div className="lg:w-1/3 pr-4 pl-4 md:w-full pr-4 pl-4 mb-4 lg:mb-10">
                        <div className="relative flex flex-col min-w-0 rounded break-words bg-white shadow-lg">
                            <div className="bg-image hover-overlay relative">
                                <img src="assets/project/noto.png" className="w-full object-cover object-top" style={{height: '450px'}} alt="project.png" />
                                <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                                    <path fill="rgb(243 244 246)" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                                </svg>
                            </div>
                            <div className="flex-auto p-6 bg-gray-100">
                                <h5 className="text-center mb-1 font-bold text-2xl">notosportswear.com</h5>
                                <h6 className="text-center text-blue-600 font-semibold mb-3">Website Development</h6>
                                <p className="mb-0 text-justify">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium accusamus voluptatum deleniti atque corrupti.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 pr-4 pl-4 mb-4 lg:mb-10">
                        <div className="relative flex flex-col min-w-0 rounded break-words bg-white shadow-lg">
                            <div className="bg-image hover-overlay relative">
                                <img src="assets/project/hmif.png" className="w-full object-cover object-top" style={{height: '450px'}} alt="project.png" />
                                <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                                    <path fill="rgb(243 244 246)" d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                                </svg>
                            </div>
                            <div className="flex-auto p-6 bg-gray-100">
                                <h5 className="text-center mb-1 font-bold text-2xl">hmifunej.id</h5>
                                <h6 className="text-center text-blue-600 font-semibold mb-3">Web Development (team)</h6>
                                <p className="mb-0 text-justify">Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 pr-4 pl-4 mb-4 lg:mb-10">
                        <div className="relative flex flex-col min-w-0 rounded break-words bg-white shadow-lg">
                            <div className="bg-image hover-overlay relative">
                                <img src="assets/project/lightsoft.png" className="w-full object-cover object-top" style={{height: '450px'}} alt="project.png" />
                                <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                                    <path fill="rgb(243 244 246)" d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                                </svg>
                            </div>
                            <div className="flex-auto p-6 bg-gray-100">
                                <h5 className="text-center mb-1 font-bold text-2xl">lightsoft-tech.netlify.app</h5>
                                <h6 className="text-center text-blue-600 font-semibold mb-3">Website Development (team)</h6>
                                <p className="mb-0 text-justify">Enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi quis nostrum minima.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:w-1/3 pr-4 pl-4 md:w-full pr-4 pl-4 mb-4 lg:mb-10">
                        <div className="relative flex flex-col min-w-0 rounded break-words bg-white shadow-lg">
                            <div className="bg-image hover-overlay relative">
                                <img src="assets/project/kolabordik-orantua.png" className="w-full object-cover object-top" style={{height: '450px'}} alt="project.png" />
                                <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                                    <path fill="rgb(243 244 246)" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                                </svg>
                            </div>
                            <div className="flex-auto p-6 bg-gray-100">
                                <h5 className="text-center mb-1 font-bold text-2xl">Kolabordik by The Skills (Parent App)</h5>
                                <h6 className="text-center text-blue-600 font-semibold mb-3">Mobile Development</h6>
                                <p className="mb-0 text-justify">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium accusamus voluptatum deleniti atque corrupti.</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        </div>
    );
    
}
export default TopProjects;