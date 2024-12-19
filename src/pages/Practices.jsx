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
import justice from "../assets/justice.webp";
import { MdArrowRightAlt } from "react-icons/md";

const Practices = () => {
  const values1 = [
    {
      icon: passport,
      Title: "Employment Based Visas",
      description:
        " Provides robust legal advocacy to safeguard client rights and interests throughout the immigration process.",
      color: "text-green-500", // Blue color for this icon
    },
    {
      icon: document,
      Title: "Investor Based Visas",
      description:
        "Demonstrates a high success rate, showcasing their ability to deliver favorable outcomes for clients.",
      color: "text-blue-500", // Green color for this icon
    },
    {
      icon: globe,
      Title: "Family Based Visas",
      description:
        "Offers support to clients worldwide, accommodating varying linguistic needs and cultural backgrounds.",
      color: "text-yellow-500", // Red color for this icon
    },
  ];

  const values2 = [
    {
      icon: multi,
      Title: "Student & Scholars",
      description:
        "Provides services in multiple languages to cater to a diverse clientele, ensuring clear communication and understanding.",
      color: "text-teal-500", // Yellow color for this icon
    },
    {
      icon: exp,
      Title: "Naturalization",
      description:
        "Handles a wide range of immigration cases, from work visas to permanent residency and citizenship applications.",
      color: "text-pink-500", // Purple color for this icon
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
                    Excellence Through Care
                  </h1>
                </div>

                <div className="mx-auto max-w-[1000px] text-center mt-4">
                  <h1 className="lg:text-4xl text-2xl font-bold text-headingColor">
                    Advancing Justice, Preserving Your Rights
                  </h1>
                </div>

                <div className="text-center mt-4">
                  <h1 className="text-base text-center text-gray-600 lg:leading-normal">
                    These days, the practice of Immigration Law has become ever
                    more cross-disciplinary. Our team members bring together a
                    wide range of legal and industry experience as you consider
                    the following immigration avenues:
                  </h1>
                </div>

                <div className="space-y-2">
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                    <div className="flex justify-center items-center">
                      <div class="rounded overflow-hidden shadow md:mx-0 mx-2 border">
                        <img
                          class="w-full h-60"
                          src="https://images.pexels.com/photos/1038944/pexels-photo-1038944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="Sunset in the mountains"
                        />
                        <div class="px-6 pt-4">
                          <div class="font-bold lg:text-start text-center text-headingColor text-xl mb-2">
                            Employment Based Visas
                          </div>
                          <p class="text-gray-700 text-base lg:text-start text-center ">
                            Navigating complex immigration laws, securing
                            opportunities for global talent, and ensuring
                            compliance with regulations to achieve successful
                            visa outcomes.
                          </p>
                        </div>
                        <div class="px-6 pt-6 pb-4 flex lg:justify-start justify-center">
                          <button
                            className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 hover:-translate-y-1"
                            onClick={() => {}}
                          >
                            <span class="relative z-10 ">Know More</span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center items-center">
                      <div class="rounded overflow-hidden shadow md:mx-0 mx-2 border">
                        <img
                          class="w-full h-60"
                          src="https://images.pexels.com/photos/6590619/pexels-photo-6590619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="Sunset in the mountains"
                        />
                        <div class="px-6 pt-4">
                          <div class="font-bold lg:text-start text-center text-headingColor text-xl mb-2">
                            Investor Based Visas
                          </div>
                          <p class="text-gray-700 text-base lg:text-start text-center ">
                            Unlock opportunities globally, navigate complex
                            immigration processes, secure investor-based visas,
                            and achieve your dreams with expert legal guidance.
                          </p>
                        </div>
                        <div class="px-6 pt-6 pb-4 flex lg:justify-start justify-center">
                          <button
                            className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 hover:-translate-y-1"
                            onClick={() => {}}
                          >
                            <span class="relative z-10 ">Know More</span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center items-center">
                      <div class=" rounded overflow-hidden shadow md:mx-0 mx-2 border">
                        <img
                          class="w-full h-60"
                          src="https://images.pexels.com/photos/1682497/pexels-photo-1682497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="Sunset in the mountains"
                        />
                        <div class="px-6 pt-4">
                          <div class="font-bold lg:text-start text-center text-headingColor text-xl mb-2">
                            Family Based Visas
                          </div>
                          <p class="text-gray-700 text-base lg:text-start text-center ">
                            Family-based visas provide pathways for loved ones
                            to reunite, ensuring legal support for applications,
                            documentation, eligibility, and interview
                            preparation.
                          </p>
                        </div>
                        <div class="px-6 pt-6 pb-4 flex lg:justify-start justify-center">
                          <button
                            className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 hover:-translate-y-1"
                            onClick={() => {}}
                          >
                            <span class="relative z-10 ">Know More</span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-4">
                    <div className="flex justify-center items-center">
                      <div class=" rounded overflow-hidden shadow md:mx-0 mx-2 border">
                        <img
                          class="w-full h-60 lg:h-[320px]"
                          src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="Sunset in the mountains"
                        />
                        <div class="px-6 pt-4">
                          <div class="font-bold lg:text-start text-center text-headingColor text-xl mb-2">
                            Students & Scholars
                          </div>
                          <p class="text-gray-700 text-base lg:text-start text-center ">
                            Empowering international students and esteemed
                            scholars with expert legal guidance, ensuring
                            compliance, protection, and success in academic and
                            professional pursuits through personalized support
                            and trusted representation.
                          </p>
                        </div>
                        <div class="px-6 pt-6 pb-4 flex lg:justify-start justify-center">
                          <button
                            className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 hover:-translate-y-1"
                            onClick={() => {}}
                          >
                            <span class="relative z-10 ">Know More</span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center items-center">
                      <div class=" rounded overflow-hidden shadow md:mx-0 mx-2 border">
                        <img
                          class="w-full h-60 lg:h-[320px]"
                          src="https://images.pexels.com/photos/134643/pexels-photo-134643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="Sunset in the mountains"
                        />
                        <div class="px-6 pt-4">
                          <div class="font-bold lg:text-start text-center text-headingColor text-xl mb-2">
                            Naturalization
                          </div>
                          <p class="text-gray-700 text-base lg:text-start text-center ">
                            Guiding individuals through complex immigration
                            processes, securing citizenship with personalized
                            legal expertise, ensuring compliance, fostering
                            trust, and building pathways toward achieving
                            permanent residency and national identity
                          </p>
                        </div>
                        <div class="px-6 pt-6 pb-4 flex lg:justify-start justify-center">
                          <button
                            className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 hover:-translate-y-1"
                            onClick={() => {}}
                          >
                            <span class="relative z-10 ">Know More</span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </button>
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

      <ScrollToTop />

      <Footer />
    </>
  );
};

export default Practices;
