import React from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import worker from "../assets/Worker.png";
import passport from "../assets/passport.png";
import document from "../assets/document.png";
import email from "../assets/email.png";
import { MdArrowRightAlt } from "react-icons/md";

const Employment = () => {
  const values1 = [
    {
      icon: passport,
      Title: "H-1B Professionals",
      description:
        "A K-1 visa allows a foreign fiancé(e) to enter the U.S. to marry a citizen.",
      link: "",
    },
    {
      icon: document,
      Title: "L-1 Intra-Company Transferees",
      description:
        "The K-3 visa allows foreign spouses of U.S. citizens to enter the United States temporarily. ",
      link: "",
    },
    {
      icon: email,
      Title: "TN/NAFTA for Citizens of Canada & Mexico",
      description:
        "The I-130 visa petition establishes a qualifying family relationship for U.S. permanent residency sponsorship.",
      link: "",
    },
    {
      icon: passport,
      Title: "E1 - E2 – Treaty Traders/Investors",
      description:
        "A K-1 visa allows a foreign fiancé(e) to enter the U.S. to marry a citizen.",
      link: "",
    },
    {
      icon: document,
      Title: "K-1",
      description:
        "The K-3 visa allows foreign spouses of U.S. citizens to enter the United States temporarily. ",
      link: "",
    },
    {
      icon: email,
      Title: "B-1",
      description:
        "The I-130 visa petition establishes a qualifying family relationship for U.S. permanent residency sponsorship.",
      link: "",
    },
  ];

  const values2 = [
    {
      icon: passport,
      Title: "PERM (Labor Certification Process)",
      description:
        "A K-1 visa allows a foreign fiancé(e) to enter the U.S. to marry a citizen.",
      link: "",
    },
    {
      icon: document,
      Title: "EB-1 : Extraordinary Ability & Multinational Executives/Managers",
      description:
        "The K-3 visa allows foreign spouses of U.S. citizens to enter the United States temporarily. ",
      link: "",
    },
    {
      icon: passport,
      Title: "EB-2 : Advanced Degrees/Exceptional Ability",
      description:
        "A K-1 visa allows a foreign fiancé(e) to enter the U.S. to marry a citizen.",
      link: "",
    },
    {
      icon: document,
      Title: "EB-3 : Professional, Skilled Workers & Others",
      description:
        "The K-3 visa allows foreign spouses of U.S. citizens to enter the United States temporarily. ",
      link: "",
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
                        Employment Based Visas
                      </p>
                    </div>
                    <div>
                      <h1 className="lg:text-4xl lg:text-start text-center text-2xl text-headingColor font-bold lg:leading-snug">
                        Visa options for employers and foreign workers
                      </h1>
                    </div>
                    <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal">
                      <p>
                        We counsel corporate clients and provide them with
                        essential support to address their global migration
                        needs. In today’s economy, companies constantly face the
                        challenges of timely engaging and transferring key
                        foreign national employees to the right locations, both
                        within, and outside the U.S. However, these business
                        needs are often frustrated by various administrative
                        hurdles, such as excessive background checks and onerous
                        Audits & Requests for Evidence (RFEs) by various
                        government agencies.
                      </p>
                    </div>

                    <div className="flex lg:justify-start justify-center items-center pb-4 pt-4">
                      <a
                        href="/contact"
                        className="relative flex h-[50px] md:w-60 w-3/4 items-center justify-center overflow-hidden bg-headingColor border border-headingColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor hover:border-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                      >
                        <span className="relative z-10">Explore more</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-[100%]">
                    <div className="lg:block hidden">
                      <img
                        src={worker}
                        alt="support_one"
                        // width="612"
                        // height="512"
                        className="rounded h-auto w-auto object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src={worker}
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

      <div className="pt-8 pb-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    Visa Options for Employers & Foreign Workers
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="lg:list-disc list-none xl:ml-8 ml-4 space-y-2">
                      <li>
                        We counsel corporate clients and provide them with
                        essential support to address their global migration
                        needs. In today’s economy, companies constantly face the
                        challenges of timely engaging and transferring key
                        foreign national employees to the right locations, both
                        within, and outside the U.S. However, these business
                        needs are often frustrated by various administrative
                        hurdles, such as excessive background checks and onerous
                        Audits & Requests for Evidence (RFEs) by various
                        government agencies. At Mannam & Associates, we
                        specialize in developing and implementing comprehensive
                        strategies for your company’s global human capital
                        management. We deliver clear solutions to a myriad of
                        legal issues arising from the short-term assignment and
                        permanent relocation of foreign employees,and: ensuring
                        the duration of their stays, work authorization for both
                        the workers and their dependents, and a path to legal
                        permanent residence.
                      </li>
                      <li>
                        Our attorneys and staff have extensive experience with
                        employment-related immigration process including the
                        following:
                      </li>
                    </ul>
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
                                <span className="relative z-10 ">
                                  Know More
                                </span>
                                <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-2">
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
                                className="w-20 h-20"
                              />
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
                                <span className="relative z-10 ">
                                  Know More
                                </span>
                                <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div id="k1Visa" className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    H-1B Visas
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        The H-1B visa is the most commonly used U.S. work visa
                        for highly skilled foreign-born workers in specialty
                        occupations that requires, at minimum, a Bachelor’s
                        Degree or foreign equivalent in a closely-related field
                        of study. For many years, U.S. employers have applied
                        for H-1B classification on behalf of professionals such
                        as , IT consultants and developers, medical
                        professionals, engineers, financial analysts , public
                        school teachers, researchers, etc. Employers may seek
                        H-1B status for foreign nationals on either full-time or
                        part-time basis.
                      </li>
                    </ul>
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

export default Employment;
