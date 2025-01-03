import React from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import DiffOne from "../assets/DiffOne.svg";
import DiffTwo from "../assets/DiffTwo.svg";
import DiffThree from "../assets/DiffThree.svg";
import DiffFour from "../assets/DiffFour.svg";
import DiffFive from "../assets/DiffFive.svg";

const OurDifference = () => {
  const values1 = [
    {
      icon: DiffFive,
      Title: "Equipped with knowledge",
      description:
        "Mannam & Associates is also distinguished by its expertise in helping clients navigate the ever-changing face of the U.S. immigration system,i.e.,what it means and how it could impact a client’s family and/or business. We stay ahead of the changes to keep our clients informed",
    },
    {
      icon: DiffOne,
      Title: "Aggressive Representation",
      description:
        "The successful resolution of your immigration matters holds the keys to the future of your family and/or the growth of your business.  Throughout our years of immigration practice, we are proud to have become the voice for thousands of clients before the USCIS. ",
    },
  ];

  const values2 = [
    {
      icon: DiffTwo,
      Title: "Accessibility for Clients",
      description:
        "We consider accessibility to be the cornerstone of our service ethic. We can achieve satisfying results for our clients only if we keep them actively engaged throughout the process. Therefore, we make every effort to afford our clients timely access to legal counsel.",
    },
    {
      icon: DiffThree,
      Title: "Client-Focused Care",
      description:
        "We are a multinational group with well-rounded global expertise. Many of our team members have first-hand knowledge of the immigration process and its challenges. We understand the stake you have in the successful outcome of this journey.",
    },
    {
      icon: DiffFour,
      Title: "Attention to Details",
      description:
        "At Mannam & Associates, we have implemented a triple-verification system to ensure that each case receives thorough analysis and consideration.  First, an experienced attorney devises a strategy that serves both, the long-term and short-term.",
    },
  ];

  return (
    <>
      <SecNavbar />

      <ScrollToTop />

      <div className="lg:pt-28 pt-24 pb-12">
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
                      Our Difference
                    </h1>
                  </div>

                  <div className="mx-auto max-w-[1000px] text-center mt-4">
                    <h1 className="lg:text-4xl text-2xl font-bold text-headingColor">
                      Why we stand out: Our approach
                    </h1>
                  </div>

                  <div className="text-center mt-4">
                    <h1 className="text-base text-center text-gray-600 lg:leading-normal">
                      For more than a decade, Mannam & Associates, LLC has been
                      fulfilling our clients’ needs in all areas of Business and
                      Family Immigration Law. As we grew to a national presence,
                      we stayed true to our roots as a boutique law firm and
                      continued to remain committed.
                    </h1>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid md:grid-cols-3 grid-cols-1 gap-4 pt-8"
                >
                  {values2.map((value, index) => (
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
                              className="w-16 h-16"
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

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-4"
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
                              className="w-16 h-16"
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

      <Footer />
    </>
  );
};

export default OurDifference;
