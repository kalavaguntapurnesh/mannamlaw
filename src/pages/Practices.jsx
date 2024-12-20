import React from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import quality from "../assets/quality.svg";
import { MdArrowRightAlt } from "react-icons/md";

const Practices = () => {
  // const values1 = [
  //   {
  //     icon: passport,
  //     Title: "Employment Based Visas",
  //     description:
  //       " Provides robust legal advocacy to safeguard client rights and interests throughout the immigration process.",
  //     color: "text-green-500", // Blue color for this icon
  //   },
  //   {
  //     icon: document,
  //     Title: "Investor Based Visas",
  //     description:
  //       "Demonstrates a high success rate, showcasing their ability to deliver favorable outcomes for clients.",
  //     color: "text-blue-500", // Green color for this icon
  //   },
  //   {
  //     icon: globe,
  //     Title: "Family Based Visas",
  //     description:
  //       "Offers support to clients worldwide, accommodating varying linguistic needs and cultural backgrounds.",
  //     color: "text-yellow-500", // Red color for this icon
  //   },
  // ];

  // const values2 = [
  //   {
  //     icon: multi,
  //     Title: "Student & Scholars",
  //     description:
  //       "Provides services in multiple languages to cater to a diverse clientele, ensuring clear communication and understanding.",
  //     color: "text-teal-500", // Yellow color for this icon
  //   },
  //   {
  //     icon: exp,
  //     Title: "Naturalization",
  //     description:
  //       "Handles a wide range of immigration cases, from work visas to permanent residency and citizenship applications.",
  //     color: "text-pink-500", // Purple color for this icon
  //   },
  // ];

  return (
    <>
      <SecNavbar />

      <div className="lg:pt-28 pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center text-center justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>

                    <p className="ml-2 lg:text-lg font-semibold text-mainColor">
                      Our Approach
                    </p>
                  </div>

                  <div className="text-center mt-4">
                    <h3 className="lg:text-4xl text-2xl font-bold text-headingColor">
                      Areas of Our Legal Focus
                    </h3>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      These days, the practice of Immigration Law has become
                      ever more cross-disciplinary. Our team members bring
                      together a wide range of legal and industry experience.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:gap-4 pt-4">
                    <div className="lg:col-span-2 ">
                      <div className="w-full ">
                        <img
                          src="https://images.pexels.com/photos/4427624/pexels-photo-4427624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt=""
                          className="lg:h-[460px] object-cover h-auto w-full rounded"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-1 rounded bg-[#f8f9fa] border flex flex-col justify-between h-full">
                      <div className="p-6 text-2xl font-semibold">
                        <h1 className="lg:text-start font-bold text-center text-headingColor">
                          "Since 2000, we’ve been committed to delivering
                          excellence and ensuring quality every step of the
                          way."
                        </h1>
                      </div>

                      {/* Bottom Most Section */}
                      <div className="lg:p-6 px-6 text-gray-600">
                        <p className="lg:text-start text-center">
                          At the very core of our mission is a resolute
                          commitment to fostering growth, opportunity, and
                          success by empowering businesses and immigrants. We
                          strive to create pathways for innovation, inclusion,
                          and achievement, contributing to the building of a
                          stronger, more diverse, and enduringly prosperous
                          America for present and future generations.
                        </p>
                      </div>

                      <div class="p-6 pt-6 pb-4 flex lg:justify-start justify-center">
                        <a
                          className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 hover:-translate-y-1"
                          href="/contact"
                        >
                          <span class="relative z-10 ">Know More</span>
                          <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                        </a>
                      </div>

                      {/* <div className="p-6">
                        <div className="flex justify-center items-center">
                          <img src={quality} alt="" className="w-16 h-16" />
                        </div>
                      </div> */}
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
                          class="w-full h-60 object-cover"
                          src="https://images.pexels.com/photos/1038944/pexels-photo-1038944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="Sunset in the mountains"
                        />
                        <div class="px-6 pt-4">
                          <div class="font-bold lg:text-start text-center text-headingColor lg:text-2xl text-xl mb-2">
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
                          class="w-full h-60 object-cover"
                          src="https://images.pexels.com/photos/6590619/pexels-photo-6590619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="Sunset in the mountains"
                        />
                        <div class="px-6 pt-4">
                          <div class="font-bold lg:text-start text-center text-headingColor lg:text-2xl text-xl mb-2">
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
                          class="w-full h-60 object-cover"
                          src="https://images.pexels.com/photos/1682497/pexels-photo-1682497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="Sunset in the mountains"
                        />
                        <div class="px-6 pt-4">
                          <div class="font-bold lg:text-start text-center text-headingColor lg:text-2xl text-xl mb-2">
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
                          class="w-full h-60 lg:h-[320px] object-cover"
                          src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="Sunset in the mountains"
                        />
                        <div class="px-6 pt-4">
                          <div class="font-bold lg:text-start text-center text-headingColor lg:text-2xl text-xl mb-2">
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
                          class="w-full h-60 lg:h-[320px] object-cover"
                          src="https://images.pexels.com/photos/10770457/pexels-photo-10770457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="Sunset in the mountains"
                        />
                        <div class="px-6 pt-4">
                          <div class="font-bold lg:text-start text-center text-headingColor lg:text-2xl text-xl mb-2">
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

      <div className="pt-16 pb-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="bg-[#f8f9fa] h-[200px] lg:h-[180px] shadow rounded">
                  <div className=" h-[100%]">
                    <div className="flex lg:flex-row flex-col gap-4 h-[100%] p-6">
                      <div className="h-[100%] lg:w-[50%] ">
                        <div className="space-y-2 flex flex-col justify-center  h-full">
                          <h1 className="lg:text-4xl text-2xl font-bold text-headingColor lg:text-start text-center">
                            Expertise Delivered, Trust Earned
                          </h1>
                          <p className="text-gray-700 text-base lg:text-start text-center lg:hidden block">
                            Let's run complexity into clarity together.
                          </p>
                          <p className="text-gray-700 text-base lg:text-start text-center lg:block hidden">
                            Transforming complexity into clarity with trusted
                            legal expertise, personalized guidance, and
                            unwavering commitment to justice.
                          </p>
                        </div>
                      </div>

                      <div className="lg:w-[50%] w-[100%] lg:h-[100%] flex lg:justify-end justify-center items-center">
                        <div className="flex lg:justify-end justify-center items-center w-[100%]">
                          <a
                            href="/contact"
                            class="relative flex h-[50px] md:w-60 w-3/4 items-center justify-center overflow-hidden bg-headingColor border border-headingColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor hover:border-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                          >
                            <span class="relative z-10">
                              Request a consultation
                            </span>
                          </a>
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
