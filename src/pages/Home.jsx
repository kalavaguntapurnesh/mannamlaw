import React from "react";
import Footer from "../components/Footer";
import MainLayout from "./../components/MainLayout";
import Blogs from "../components/Blogs";
import ScrollToTop from "../components/ScrollToTop";
import HomeServices from "../components/HomeServices";
import law from "../assets/law.svg";
import guidance from "../assets/guidance.svg";
import cost from "../assets/cost.svg";
import group from "../assets/group.svg";

const Home = () => {
  return (
    <>
      <MainLayout />
      <HomeServices />

      <div className="lg:pt-16 pt-12 pb-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] mx-auto">
              <div className="p-4">
                <div className="flex flex-col space-y-4">
                  <div
                    // variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    // initial="hidden"
                    // whileInView="show"
                    // viewport={{ once: true, amount: 0.5 }}
                    className="flex items-center text-center justify-center "
                  >
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor">
                      How it works
                    </h1>
                  </div>
                  {/* Heading */}
                  <div
                    // variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    // initial="hidden"
                    // whileInView="show"
                    // viewport={{ once: true, amount: 0.3 }}
                    className="lg:text-4xl text-2xl text-headingColor font-bold text-center"
                  >
                    Where integrity meets advocacy
                  </div>

                  {/* Description */}
                  <div
                    // variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    // initial="hidden"
                    // whileInView="show"
                    // viewport={{ once: true, amount: 0.3 }}
                    className="text-base text-gray-600 text-center"
                  >
                    Delivering personalized legal solutions with honesty,
                    professionalism, and unwavering dedication to protect your
                    rights and achieve exceptional outcomes every time.
                  </div>

                  <div
                    // variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    // initial="hidden"
                    // whileInView="show"
                    // viewport={{ once: true, amount: 0.3 }}
                    className="pt-8"
                  >
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-3 gap-4 lg:h-[600px] h-[1000px]">
                      {/* First Card */}
                      <div className="lg:row-span-2 row-span-1 lg:col-span-1 relative rounded overflow-hidden">
                        {/* Background Image */}
                        <img
                          src="https://images.pexels.com/photos/8112197/pexels-photo-8112197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="Background"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Overlay Content */}
                        <div className="absolute flex space-y-2 flex-col inset-0 p-5 bg-opacity-40 bg-black items-start justify-start">
                          <h2 className="text-white text-2xl font-semibold">
                            Your rights, our priority.
                          </h2>
                          <p className="text-white">
                            Protecting your interests with dedication,
                            delivering personalized legal solutions, and
                            ensuring justice every step forward.
                          </p>
                        </div>
                      </div>

                      {/* Second Card */}
                      <div className="lg:row-span-1 lg:col-span-1 bg-[#f2f2f3] rounded relative overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="Background"
                          className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="inset-0 absolute flex flex-col space-y-2 p-5 bg-opacity-40 bg-black items-start justify-start">
                          <h1 className="text-white font-semibold text-2xl">
                            Advocacy with a personal touch
                          </h1>
                          <p className="text-white">
                            Providing compassionate legal representation,
                            tailored solutions, unwavering commitment, and
                            building lasting client relationships
                          </p>
                        </div>
                      </div>

                      {/* Third Card */}
                      <div className="lg:row-span-1 lg:col-span-1 bg-[#f2f2f3] rounded overflow-hidden relative">
                        <img
                          src="https://images.pexels.com/photos/4427624/pexels-photo-4427624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="Background"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col space-y-2 p-5 justify-start items-start">
                          <h1 className="text-2xl text-white font-semibold">
                            Your voice in the legal system
                          </h1>
                          <p className="text-white">
                            Advocating your rights with expertise, compassion,
                            and unwavering dedication to achieve the justice you
                            deserve.
                          </p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 pb-12">
        <div className="bg-white">
          <div className="w-full ">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <div className="justify-center w-full ">
                  <div className="w-full max-w-[14000px] mx-auto ">
                    <div className="items-center mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-16">
                      <div className="col-span-2 mb-8 space-y-4">
                        <div className="flex items-center lg:justify-start justify-center lg:ml-[5px]">
                          <div className="h-4 w-1 bg-mainColor"></div>
                          <p className="ml-2 text-lg font-bold text-mainColor ">
                            Expert Legal Solutions
                          </p>
                        </div>
                        <h3 className="lg:text-4xl text-2xl font-bold text-headingColor lg:text-start text-center">
                          Justice is our commitment, your success is our mission
                        </h3>

                        <div className="lg:text-start text-center mt-4 mb-1">
                          <p className="text-gray-600">
                            Justice is the foundation of our commitment, and
                            your success remains our ultimate mission. We
                            provide unwavering support, tailored legal
                            strategies, and compassionate guidance to ensure
                            fair outcomes, protect your rights, and achieve your
                            goals. Trust us to deliver excellence, integrity,
                            and dedication in every case we undertake for you.
                          </p>
                        </div>
                        <div className=" mt-6 space-y-4">
                          <div className="flex lg:justify-start justify-center items-center pb-4">
                            <a
                              href="/contact"
                              className="relative mt-8 flex h-[50px] w-56 items-center justify-center overflow-hidden bg-headingColor border border-headingColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-headingColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56 rounded"
                            >
                              <span className="relative z-10">
                                Contact our team
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                        <div className="flex flex-col lg:items-start items-center ">
                          <img
                            src={law}
                            alt="c_sixteen"
                            className="w-16 h-16 mb-2 text-mainColor"
                          />
                          <h4 className="mb-2 text-2xl lg:text-start text-center font-bold text-headingColor ">
                            Expert Guidance
                          </h4>
                          <p className="font-normal text-gray-600 lg:text-start text-center">
                            Providing clear advice with precision, expertise,
                            and personalized immigration solutions.
                          </p>
                        </div>
                        <div className="flex flex-col lg:items-start items-center">
                          <img
                            src={group}
                            alt="c_seventeen"
                            className="w-16 h-16 mb-2 text-mainColor"
                          />
                          <h4 className="mb-2 text-2xl font-bold lg:text-start text-center text-headingColor">
                            Ethical Practices
                          </h4>
                          <p className="font-normal text-gray-600 lg:text-start text-center">
                            Upholding integrity, fostering trust, and delivering
                            honest legal solutions for customers.
                          </p>
                        </div>

                        <div className="flex flex-col lg:items-start items-center">
                          <img
                            src={cost}
                            className="w-16 h-16 mb-2 text-mainColor"
                            alt="carousel_one"
                          />
                          <h4 className="mb-2 text-2xl font-bold lg:text-start text-center text-headingColor">
                            Cost Effective
                          </h4>
                          <p className="font-normal text-gray-600 lg:text-start text-center">
                            Delivering affordable immigration solutions without
                            compromising quality, efficiency, or results.
                          </p>
                        </div>

                        <div className="flex flex-col lg:items-start items-center">
                          <img
                            src={guidance}
                            className="w-16 h-16 mb-2 text-mainColor"
                            alt="carousel_two"
                          />
                          <h4 className="mb-2 text-2xl text-headingColor font-bold md:text-start text-center">
                            Innovative Solutions
                          </h4>
                          <p className="font-normal text-gray-600 md:text-start text-center">
                            Crafting creative strategies to resolve complex
                            legal challenges effectively for better results.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Blogs />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;
