import React from "react";
import passport from "../assets/passport.png";
import document from "../assets/document.png";
import email from "../assets/email.png";
import board from "../assets/board.png";
import investment from "../assets/investment.png";
import students from "../assets/students.png";
import { MdArrowRightAlt } from "react-icons/md";

const HomeServices = () => {
  const values1 = [
    {
      icon: passport,
      Title: "Employment Based Visas",
      description:
        "Getting started, Begin your journey with simple, clear steps forward",
      color: "text-green-500", // Blue color for this icon
    },
    {
      icon: document,
      Title: "Naturalization Process",
      description:
        "Manage personal information, security & specific configurations.",
      color: "text-blue-500", // Green color for this icon
    },
    {
      icon: email,
      Title: "Re-entry Permit",
      description:
        "Ensures platform integrity & compliance against harmful activities.",
      color: "text-yellow-500", // Red color for this icon
    },
    {
      icon: investment,
      Title: "Investment Based Visas",
      description:
        "Spam Free, Ensuring clean, secure, & reliable digital communication.",
      color: "text-teal-500", // Yellow color for this icon
    },
    {
      icon: students,
      Title: "Students & Scholars",
      description:
        "Deliver reliable, customer-focused solutions with innovation.",
      color: "text-pink-500", // Purple color for this icon
    },
    {
      icon: board,
      Title: "Family based Visas",
      description:
        "Discover our location with an interactive map offering geographic insights & navigation guidance.",
      color: "text-violet-500", // Pink color for this icon
    },
  ];

  return (
    <div className="pt-12 pb-12">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px]">
            <div className="p-4">
              <div className="space-y-3">
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
                          <img src={value.icon} alt="" className="w-20 h-20" />
                        </div>

                        <div className="flex justify-center items-center">
                          <h1 className="text-2xl text-headingColor font-semibold text-center">
                            {value.Title}
                          </h1>
                        </div>
                        <div className="flex justify-center  items-center text-gray-600 text-center">
                          <p>{value.description}</p>
                        </div>

                        <div class="px-6 flex justify-center">
                          <a
                            href="/our-practices"
                            className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 hover:-translate-y-1"
                          >
                            <span class="relative z-10 ">Know More</span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </a>
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
  );
};

export default HomeServices;
