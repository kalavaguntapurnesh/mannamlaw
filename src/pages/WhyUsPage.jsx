import React from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import { FaHandshake } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import { BiSolidNavigation } from "react-icons/bi";
import { FaInbox } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { RiEmotionHappyFill } from "react-icons/ri";
import { ImPower } from "react-icons/im";
import { FaFlag } from "react-icons/fa6";

const WhyUsPage = () => {
  const values1 = [
    {
      icon: <FaHandshake />,
      Title: "Best in class partner experience",
      description:
        "We have a value-driven partnerships philosophy which relies on trust & collaboration, a joint focus on our customers backed up by ownership and accountability, and constant learning and growth.",
      color: "text-green-500", // Blue color for this icon
    },
    {
      icon: <FaInbox />,
      Title: "Diverse product and ecosystem",
      description:
        "We are leaders in the emerging Headless CMS category, MACH Alliance Certified and we have a strong ecosystem and marketplace of native integrations.",
      color: "text-blue-500", // Green color for this icon
    },
    {
      icon: <BiSolidNavigation />,
      Title: "Revenue potential",
      description:
        "We offer diverse opportunities for growth and revenue - our partners can benefit from cost efficiencies and 10% revenue share, active demand generation and practice opportunities with services revenue potential.",
      color: "text-yellow-400", // Red color for this icon
    },
    {
      icon: <FaMessage />,
      Title: "Perks",
      description:
        "As a token of our appreciation for our partnership, you will receive practical or limited edition Hygraph swag, invitations to workshops, conferences & events, as well as a lifetime license for company website.",
      color: "text-teal-500", // Yellow color for this icon
    },
    {
      icon: <MdAutoGraph />,
      Title: "Collaboration",
      description:
        "We develop mutual business plans with our partners, focusing on co-marketing and co-selling, ensuring both parties align goals, resources, and strategies effectively. We track progress in joint quarterly reviews.",
      color: "text-pink-500", // Purple color for this icon
    },
    {
      icon: <RiEmotionHappyFill />,
      Title: "Enablement and support",
      description:
        "Our partners have priority admittance to technical & commercial trainings, they gain insider access to new product features, and they benefit from community support for swift issue resolution.",
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
                        We are best
                      </p>
                    </div>
                    <div>
                      <h1 className="lg:text-5xl lg:text-start text-center text-2xl text-headingColor font-bold lg:leading-loose">
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
                        class="relative flex h-[50px] md:w-60 w-3/4 items-center justify-center overflow-hidden bg-headingColor border border-headingColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor hover:border-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded-full"
                      >
                        <span class="relative z-10">Request a Demo</span>
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

                  <div
                    // variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    // initial="hidden"
                    // whileInView="show"
                    // viewport={{ once: true, amount: 0.5 }}
                    className="flex justify-center items-center w-[100%]"
                  >
                    <div>
                      <img
                        src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="support_one"
                        // width="612"
                        height="512"
                        className="rounded lg:block hidden"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="support_two"
                        className="rounded lg:hidden block w-[90%]"
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

                <div className="flex flex-col space-y-4">
                  {/* Heading */}

                  {/* <div className="flex items-center justify-center">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor ">
                      We empower you
                    </h1>
                  </div> */}
                  {/* <div className="lg:text-4xl text-2xl text-headingColor font-bold text-center">
                    Why collaborate with AXSeva?
                  </div> */}

                  {/* Description */}
                  {/* <div>
                    <p className="text-gray-700 lg:leading-normal text-center md:text-lg">
                      Collaborating with us unlocks an opportunity to elevate
                      your offerings and maximize growth opportunities together.
                    </p>
                  </div> */}
                  {/* Cards Grid */}
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
