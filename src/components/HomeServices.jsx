import React from "react";
import passport from "../assets/passport.png";
import document from "../assets/document.png";
import email from "../assets/email.png";
import board from "../assets/board.png";
import investment from "../assets/investment.png";
import students from "../assets/students.png";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const HomeServices = () => {
  const values1 = [
    {
      icon: passport,
      Title: "Employment Based Visas",
      description:
        "Professional legal services specializing in employment-based visas, guiding clients through complex immigration processes efficiently.",
    },
    {
      icon: document,
      Title: "Naturalization Process",
      description:
        "Expert legal guidance for navigating the naturalization process, ensuring a smooth path to U.S. citizenship success.",
    },
    {
      icon: email,
      Title: "Liaison Services",
      description:
        "Specialized legal support bridging communication gaps, ensuring seamless coordination and resolution in liaison matters.",
    },
    {
      icon: investment,
      Title: "Investment Based Visas",
      description:
        "Tailored legal expertise for investment-based visas, empowering entrepreneurs to achieve U.S. residency through investments.",
    },
    {
      icon: students,
      Title: "Students & Scholars",
      description:
        "Comprehensive legal services for student and scholar visas, facilitating academic and research opportunities in the U.S.",
    },
    {
      icon: board,
      Title: "Family based Visas",
      description:
        "Dedicated legal assistance for family-based visas, uniting loved ones and securing residency with personalized support.",
    },
  ];

  return (
    <div className="pt-8 pb-12">
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
                    Our Services
                  </p>
                </div>

                <div className="text-center mt-4">
                  <h3 className="lg:text-4xl text-2xl font-bold text-headingColor">
                    Services we offer
                  </h3>
                </div>

                <div className="text-gray-600 text-center">
                  <p>
                    Explore our complete range of services designed to meet your
                    needs—discover everything we offer in one convenient place
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8"
              >
                {values1.map((value, index) => (
                  <div
                    key={index}
                    className="flex md:justify-start justify-center"
                  >
                    <div className="w-full bg-white border border-gray-200 rounded p-6">
                      <div className="space-y-3">
                        <div className="flex justify-center items-center">
                          <img src={value.icon} alt="" className="w-20 h-20" />
                        </div>

                        <div className="flex justify-center items-center">
                          <h1 className="text-2xl text-headingColor font-bold text-center">
                            {value.Title}
                          </h1>
                        </div>
                        <div className="flex justify-center  items-center text-gray-600 text-center">
                          <p>{value.description}</p>
                        </div>

                        <div className="px-6 flex justify-center">
                          <a
                            href="/our-practices"
                            className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 hover:-translate-y-1"
                          >
                            <span className="relative z-10 ">Know More</span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </a>
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
  );
};

export default HomeServices;
