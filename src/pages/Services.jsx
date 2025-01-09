import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import health from "../assets/health.svg";
import callCenter from "../assets/callCenter.svg";
import education from "../assets/education.svg";
import finance from "../assets/finance.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Services = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

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
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="space-y-3"
                >
                  <div className="flex items-center text-center justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>

                    <p className="ml-2 lg:text-lg font-semibold text-mainColor">
                      We are professionals
                    </p>
                  </div>

                  <div className="text-center mt-4">
                    <h3 className="lg:text-4xl text-2xl font-bold text-headingColor">
                      Providing reliable and specialized services
                    </h3>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Offering dependable, customized, and focused services
                      crafted to address specific requirements with precision
                      and care.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid grid-cols-1 gap-6 lg:gap-4 pt-6"
                >
                  <div className="w-full ">
                    <img
                      src="https://images.pexels.com/photos/17630959/pexels-photo-17630959/free-photo-of-courtroom-with-american-flags-in-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                      className="lg:h-[520px] object-cover h-auto w-full rounded"
                    />
                  </div>
                </motion.div>
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
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col"
                >
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
                      We are dedicated to helping corporate and individual
                      clients navigate through the ever-changing landscape of
                      U.S. Immigration Law. The scope of our services are:
                    </h1>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-8"
                >
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
                            <h1 className="text-2xl text-headingColor font-bold text-center">
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
                </motion.div>
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
