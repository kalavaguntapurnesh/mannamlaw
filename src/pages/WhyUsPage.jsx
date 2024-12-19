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

const WhyUsPage = () => {
  const values1 = [
    {
      icon: passport,
      Title: "Strong Advocacy",
      description:
        " Provides robust legal advocacy to safeguard client rights and interests throughout the immigration process.",
      color: "text-green-500", // Blue color for this icon
    },
    {
      icon: document,
      Title: "Proven Track Record",
      description:
        "Demonstrates a high success rate, showcasing their ability to deliver favorable outcomes for clients.",
      color: "text-blue-500", // Green color for this icon
    },
    {
      icon: globe,
      Title: "Global Client Reach",
      description:
        "Offers support to clients worldwide, accommodating varying linguistic needs and cultural backgrounds.",
      color: "text-yellow-500", // Red color for this icon
    },
    {
      icon: multi,
      Title: "Multilingual Support",
      description:
        "Provides services in multiple languages to cater to a diverse clientele, ensuring clear communication and understanding.",
      color: "text-teal-500", // Yellow color for this icon
    },
    {
      icon: exp,
      Title: "Diverse Experience",
      description:
        "Handles a wide range of immigration cases, from work visas to permanent residency and citizenship applications.",
      color: "text-pink-500", // Purple color for this icon
    },
    {
      icon: comm,
      Title: "Transparent Communication",
      description:
        "Offers clear and straightforward guidance throughout the legal process, keeping clients well-informed.",
      color: "text-violet-500", // Pink color for this icon
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
                        Why Mannam Law?
                      </p>
                    </div>
                    <div>
                      <h1 className="lg:text-5xl lg:text-start text-center text-2xl text-headingColor font-bold lg:leading-snug">
                        Reliable Expertise for Your Legal Success
                      </h1>
                    </div>
                    <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal">
                      <p>
                        At Mannam Law, we prioritize your success by offering
                        expert legal guidance uniquely tailored to your needs.
                        Our dedicated attorneys combine integrity,
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

                {/* <div className="flex flex-col space-y-4">
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-6 max-w-full">
                    {values1.map((value, index) => (
                      <div
                        key={index}
                        className="flex lg:justify-start justify-center"
                      >
                        <div className="w-full p-6">
                          <div className="space-y-3">
                            <div
                              className={`text-4xl flex lg:justify-start justify-center lg:items-start items-center ${value.color}`}
                            >
                              {value.icon}
                            </div>

                            <div className="flex lg:justify-start justify-center md:items-start items-center">
                              <h1 className="lg:text-2xl text-xl text-headingColor font-semibold lg:text-start text-center">
                                {value.Title}
                              </h1>
                            </div>
                            <div className="flex text-gray-700 lg:leading-normal lg:justify-start justify-center lg:items-start items-center">
                              <p className="lg:text-start text-center">
                                {value.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
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
                    We are best
                  </h1>
                </div>

                <div className="mx-auto max-w-[1000px] text-center mt-4">
                  <h1 className="lg:text-4xl text-2xl font-bold text-headingColor">
                    Why Mannam & Law Associates?
                  </h1>
                </div>

                <div className="text-center mt-4">
                  <h1 className="text-base text-center text-gray-600 lg:leading-normal">
                    Mannam & Associates focuses exclusively on U.S. immigration
                    law, offering client-oriented, results-driven
                    representation.
                  </h1>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
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

      <div className="pt-16 pb-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] bg-[#f8f9fa] rounded">
              <div className="lg:px-4 lg:py-12 px-4 py-8">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-6">
                  <div className="flex flex-col space-y-6 w-full">
                    <div className="flex items-center lg:justify-start justify-center lg:ml-[5px]">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h1 className="ml-2 text-lg font-bold text-mainColor ">
                        Streamline your operations
                      </h1>
                    </div>
                    <div className="lg:text-4xl text-2xl lg:text-start text-center font-bold text-headingColor">
                      <h1>
                        Promoting America’s Prosperity, One Business, One
                        Immigrant at a Time.
                      </h1>
                    </div>

                    <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal">
                      <p>
                        For more than a decade, Mannam & Associates, LLC has
                        been fulfilling our clients’ needs in all areas of
                        Business and Family Immigration Law. As we grew to a
                        national presence, we stayed true to our roots as a
                        boutique law firm and continued to remain committed to
                        maintaining : collegial, close client relationships,
                        with aggressive, diligent,and highly expert
                        representation of all clients, large and small.
                      </p>
                    </div>

                    <div className="flex lg:justify-start justify-center items-center pb-4 pt-2">
                      <a
                        href="/contact"
                        class="relative flex h-[50px] md:w-60 w-3/4 items-center justify-center overflow-hidden border border-headingColor text-headingColor transition-all before:absolute before:h-0 before:w-0  before:bg-headingColor hover:text-white hover:border-headingColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                      >
                        <span class="relative z-10">Contact our team</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-[100%]">
                    <div className="lg:block hidden">
                      <img
                        src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="support_one"
                        // width="612"
                        // height="512"
                        className="rounded w-auto h-auto"
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
                <div className="space-y-3">
                  <div className="flex items-center text-center justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>

                    <p className="ml-2 lg:text-lg font-semibold text-mainColor">
                      Contact Us
                    </p>
                  </div>

                  <div className="text-center mt-4">
                    <h3 className="lg:text-4xl text-2xl font-bold text-headingColor">
                      Our Prime Locations
                    </h3>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Discover our presence at these convenient locations,
                      offering easy access to our services and welcoming
                      environments designed for you.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-2 pt-8 max-w-full">
                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6 transition-transform duration-300 lg:hover:-translate-y-2">
                      <div className="space-y-4">
                        <div className="flex justify-center items-center">
                          <img
                            src="https://images.pexels.com/photos/134643/pexels-photo-134643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="services_five"
                            className="w-full h-60"
                          />
                        </div>

                        <div className="flex justify-center items-center">
                          <h1 className="text-2xl text-headingColor font-bold text-center">
                            Atlanta, Georgia
                          </h1>
                        </div>

                        <div className="flex flex-col text-gray-600 justify-center items-center">
                          <p>Mannam & Associates, LLC 6160</p>
                          <p>Peachtree Dunwoody Rd Suite B-230</p>
                          <p>Atlanta, GA 30328, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6 transition-transform duration-300 lg:hover:-translate-y-2">
                      <div className="space-y-4">
                        <div className="flex justify-center items-center">
                          <img
                            src="https://images.pexels.com/photos/2874064/pexels-photo-2874064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="services_five"
                            className="w-full h-60"
                          />
                        </div>

                        <div className="flex justify-center items-center">
                          <h1 className="text-2xl text-headingColor font-bold text-center">
                            Chattanooga, Tennessee
                          </h1>
                        </div>

                        <div className="flex flex-col text-gray-600 justify-center items-center">
                          <p>Mannam & Associates, LLC 2288</p>
                          <p>Gunbarrel Road, Suite 154-300</p>
                          <p>Chattanooga, TN 37421, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6 transition-transform duration-300 lg:hover:-translate-y-2">
                      <div className="space-y-4">
                        <div className="flex justify-center items-center">
                          <img
                            src="https://images.pexels.com/photos/2815184/pexels-photo-2815184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="services_five"
                            className="w-full h-60"
                          />
                        </div>

                        <div className="flex justify-center items-center">
                          <h1 className="text-2xl text-headingColor font-bold text-center">
                            Suwanee, Georgia
                          </h1>
                        </div>

                        <div className="flex flex-col text-gray-600 justify-center items-center">
                          <p>Mannam & Associates, LLC 3651</p>
                          <p>Peachtree Pkwy Suite E-360</p>
                          <p>Atlanta, GA 30024, USA</p>
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

export default WhyUsPage;
