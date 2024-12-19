import React from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import { ImPower } from "react-icons/im";
import { FaFlag } from "react-icons/fa6";
import passport from "../assets/passport.png";
import document from "../assets/document.png";
import globe from "../assets/globe.png";
import multi from "../assets/multi.png";
import exp from "../assets/exp.png";
import comm from "../assets/comm.png";
import health from "../assets/health.svg";
import callCenter from "../assets/callCenter.svg";
import education from "../assets/education.svg";
import finance from "../assets/finance.svg";
import justice from "../assets/justice.webp";
import { MdArrowRightAlt } from "react-icons/md";

const Services = () => {
  const values1 = [
    {
      icon: health,
      Title: "Health Care",
      description:
        "We specialize in guiding healthcare professionals through complex immigration processes, ensuring compliance, securing opportunities, and providing tailored legal solutions to help them achieve their goals with trust and expertise.",
      color: "text-green-500", // Blue color for this icon
    },
    {
      icon: callCenter,
      Title: "IT Consulting",
      description:
        "We provide expert legal support for immigration needs in the IT consulting sector, delivering tailored solutions, ensuring compliance, and guiding professionals toward successful outcomes with dedication and precision.",
      color: "text-blue-500", // Green color for this icon
    },
    {
      icon: finance,
      Title: "Financial Solutions",
      description:
        "We deliver expert guidance and tailored legal support for immigration needs within the financial sector, ensuring compliance, seamless solutions, and dedicated attention to address the unique requirements of our clients",
      color: "text-yellow-500", // Red color for this icon
    },
    {
      icon: education,
      Title: "Education Sector",
      description:
        "We assist higher education institutions with expert legal support, offering tailored solutions to navigate complex immigration processes, ensure compliance, and empower institutions and individuals to achieve their academic and professional goals.",
      color: "text-teal-500", // Yellow color for this icon
    },
  ];

  return (
    <>
      <SecNavbar />

      <div className="lg:pt-28 pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
                  <div className="space-y-4 flex flex-col lg:justify-start justify-center">
                    <div className="flex items-center lg:text-start text-center justify-center lg:justify-start lg:ml-[5px]">
                      <div className="h-4 w-1 bg-mainColor"></div>

                      <p className="ml-2 lg:text-lg font-semibold text-mainColor">
                        Why Mannam Associates?
                      </p>
                    </div>
                    <div>
                      <h1 className="lg:text-5xl lg:text-start text-center text-2xl text-headingColor font-bold lg:leading-snug">
                        Reliable Expertise for Your Legal Success
                      </h1>
                    </div>
                    <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal">
                      <p>
                        At Mannam & Associates, we prioritize your success by
                        offering expert legal guidance uniquely tailored to your
                        needs. Our dedicated attorneys combine integrity,
                        professionalism, and results-driven strategies to
                        safeguard your rights and help you achieve your
                        objectives. Trust us to be your steadfast legal partner
                        in navigating complex legal challenges.
                      </p>
                    </div>

                    <div className="flex lg:justify-start justify-center items-center pb-4 pt-2">
                      <a
                        href="/contact"
                        class="relative flex h-[50px] md:w-60 w-3/4 items-center justify-center overflow-hidden bg-headingColor border border-headingColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor hover:border-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                      >
                        <span class="relative z-10">
                          Request a consultation
                        </span>
                      </a>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-4 lg:px-0 px-2">
                      <div class="flex lg:justify-start justify-center">
                        <div class="space-y-2">
                          <div class="flex justify-center lg:justify-start items-center">
                            <h4 class="lg:text-5xl text-4xl ml-2 text-headingColor font-semibold text-start">
                              100%
                            </h4>
                          </div>

                          <div class="flex justify-center lg:justify-start items-center lg:text-base text-sm text-gray-600">
                            <p className="lg:text-start text-center ">
                              Excellence in Legal Solutions
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="flex lg:justify-start justify-center">
                        <div class="space-y-2">
                          <div class="flex justify-center lg:justify-start items-center">
                            <h4 class="lg:text-5xl text-4xl ml-2 text-headingColor font-semibold text-start">
                              2X
                            </h4>
                          </div>

                          <div class="flex justify-center lg:justify-start items-center lg:text-base text-sm text-gray-600">
                            <p className="lg:text-start text-center">
                              Accelerated Resolution of Cases
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-[100%]">
                    <div className="lg:block hidden">
                      <img
                        src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="support_one"
                        // width="612"
                        // height="512"
                        className="rounded h-auto w-auto"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="support_two"
                        className="rounded lg:hidden block w-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:pt-20 md:px-0 px-2 pt-12">
                  <div className="bg-[#f8f9fa] rounded p-8 shadow">
                    <div className="space-y-2 md:text-start text-center md:mx-4">
                      <div className="flex items-center md:justify-start justify-center ">
                        {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                        <ImPower className="text-headingColor" />
                        <h1 className="ml-2 text-lg font-bold text-headingColor ">
                          Our Mission
                        </h1>
                      </div>
                      <div className="text-gray-600">
                        <h1>
                          We are dedicated to providing client-oriented,
                          results-driven representation, focusing exclusively on
                          the complex and challenging area of Immigration &
                          Naturalization Law
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] rounded p-8 shadow">
                    <div className="space-y-2 md:text-start text-center md:mx-4">
                      <div className="flex items-center md:justify-start justify-center ">
                        {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                        <FaFlag className="text-headingColor" />
                        <h1 className="ml-2 text-lg font-bold text-headingColor ">
                          Our Vision
                        </h1>
                      </div>
                      <div className="text-gray-600">
                        <h1>
                          Delivering exceptional legal services with a
                          commitment to quality, affordability, and personalized
                          solutions, ensuring client satisfaction and success in
                          every case we handle.
                        </h1>
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
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <div className="flex items-center text-center justify-center ">
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-semibold text-mainColor">
                    Our Offered Services
                  </h1>
                </div>

                <div className="mx-auto max-w-[1000px] text-center mt-4">
                  <h1 className="lg:text-4xl text-2xl font-bold text-headingColor">
                    Expert advocacy in these areas
                  </h1>
                </div>

                <div className="text-center mt-4">
                  <h1 className="text-base text-center text-gray-600 lg:leading-normal">
                    We are dedicated to helping corporate and individual clients
                    navigate through the ever-changing landscape of U.S.
                    Immigration Law. The scope of our services are:
                  </h1>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                  {values1.map((value, index) => (
                    <div
                      key={index}
                      className="flex md:justify-start justify-center"
                    >
                      <div className="w-full bg-white border border-gray-200 rounded p-6">
                        <div className="space-y-3">
                          <div className="flex justify-center items-center">
                            <img
                              src={value.icon}
                              alt=""
                              className="w-20 h-20"
                            />
                          </div>

                          <div className="flex justify-center items-center">
                            <h1 className="text-2xl text-headingColor font-semibold text-center">
                              {value.Title}
                            </h1>
                          </div>
                          <div className="flex justify-center items-center text-gray-600 text-center lg:leading-normal">
                            <p>{value.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop />

      <Footer />
    </>
  );
};

export default Services;
