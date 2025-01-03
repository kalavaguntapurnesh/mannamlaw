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
import justice from "../assets/justice.webp";
import Investor from "../assets/Investor.jpg";
import { MdArrowRightAlt } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const OurDifference = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const values1 = [
    {
      icon: DiffFive,
      Title: "Equipped with knowledge",
      description:
        "Mannam & Associates is also distinguished by its expertise in helping clients navigate the ever-changing face of the U.S. immigration system,i.e.,what it means and how it could impact a client’s family and/or business. We stay ahead of the changes to keep our clients informed",
      link: "/our-difference#four",
    },
    {
      icon: DiffOne,
      Title: "Aggressive Representation",
      description:
        "The successful resolution of your immigration matters holds the keys to the future of your family and/or the growth of your business.  Throughout our years of immigration practice, we are proud to have become the voice for thousands of clients before the USCIS. ",
      link: "/our-difference#five",
    },
  ];

  const values2 = [
    {
      icon: DiffTwo,
      Title: "Accessibility for Clients",
      description:
        "We consider accessibility to be the cornerstone of our service ethic. We can achieve satisfying results for clients if we keep them actively engaged throughout the process. Therefore, we make every effort to afford our clients timely access to legal counsel.",
      link: "/our-difference#one",
    },
    {
      icon: DiffThree,
      Title: "Client-Focused Care",
      description:
        "We are a multinational group with well-rounded global expertise. Many of our team members have first-hand knowledge of the immigration process and its challenges. We understand the stake you have in the successful outcome of this journey.",
      link: "/our-difference#two",
    },
    {
      icon: DiffFour,
      Title: "Attention to Details",
      description:
        "At Mannam & Associates, we have implemented a triple-verification system to ensure that each case receives thorough analysis and consideration.  First, an experienced attorney devises a strategy that serves both, the long-term and short-term.",
      link: "/our-difference#three",
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

                          <div className="px-6 flex justify-center">
                            <a
                              href={value.link}
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

                          <div className="px-6 flex justify-center">
                            <a
                              href={value.link}
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

      <div id="one" className="pt-8 pb-4">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] rounded">
              <div className="lg:px-4 lg:py-12 px-4 py-8">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-6">
                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col space-y-6 w-full"
                  >
                    <div className="flex items-center lg:justify-start justify-center lg:ml-[5px]">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h1 className="ml-2 text-lg font-bold text-mainColor ">
                        Reliability for clients
                      </h1>
                    </div>
                    <div className="lg:text-4xl text-2xl lg:text-start text-center font-bold text-headingColor">
                      <h1>Accessibility clients can count on</h1>
                    </div>

                    <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal">
                      <p>
                        We consider accessibility to be the cornerstone of our
                        service ethic. We can achieve satisfying results for our
                        clients only if we keep them actively engaged throughout
                        the process. Therefore, we make every effort to afford
                        our clients timely access to legal counsel. Whether you
                        are placed into deferred inspection at a U.S. port of
                        entry, are subject to an overly-burdensome USCIS
                        Request(s) for Evidence, or experience unreasonable
                        delay in renewing your driver’s license due to problems
                        with verification of your status, our staff will ensure
                        that you get the prompt assistance your matter demands.
                        We believe that our easy accessibility will be a
                        refreshing change from the disinterestedness you may
                        have encountered elsewhere.
                      </p>
                    </div>

                    <div className="flex lg:justify-start justify-center items-center pb-4 pt-2">
                      <a
                        href="/contact"
                        className="relative flex h-[50px] md:w-60 w-3/4 items-center justify-center overflow-hidden border border-headingColor text-headingColor transition-all before:absolute before:h-0 before:w-0  before:bg-headingColor hover:text-white hover:border-headingColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                      >
                        <span className="relative z-10">Contact our team</span>
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex justify-center items-center w-[100%]"
                  >
                    <div className="lg:block hidden">
                      <img
                        src={justice}
                        alt="support_one"
                        // width="612"
                        // height="512"
                        className="rounded w-auto h-auto object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src={justice}
                        alt="support_two"
                        className="rounded lg:hidden block w-auto object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="two" className="pt-8 pb-4">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] rounded">
              <div className="lg:px-4 lg:py-12 px-4 py-8">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-6">
                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex justify-center items-center w-[100%]"
                  >
                    <div className="lg:block hidden">
                      <img
                        src="https://images.pexels.com/photos/4427624/pexels-photo-4427624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="support_one"
                        // width="612"
                        // height="512"
                        className="rounded w-auto h-auto object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://images.pexels.com/photos/4427624/pexels-photo-4427624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="support_two"
                        className="rounded lg:hidden block w-auto object-cover"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col space-y-6 w-full"
                  >
                    <div className="flex items-center lg:justify-start justify-center lg:ml-[5px]">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h1 className="ml-2 text-lg font-bold text-mainColor ">
                        Client-Focused Care
                      </h1>
                    </div>
                    <div className="lg:text-4xl text-2xl lg:text-start text-center font-bold text-headingColor">
                      <h1>Attentiveness to Client Needs</h1>
                    </div>

                    <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal">
                      <p>
                        We are a multinational group with well-rounded global
                        expertise. Many of our team members have first-hand
                        knowledge of the immigration process and its challenges.
                        We understand the stake you have in the successful
                        outcome of this journey: your relationship, your job,
                        and your business. Our clients’ questions, concerns and
                        special needs add the personal component to each case,
                        which we must attend to adequately. We listen, we
                        strategize and we deliver the solutions to your American
                        dream.
                      </p>
                    </div>

                    <div className="flex lg:justify-start justify-center items-center pb-4 pt-2">
                      <a
                        href="/contact"
                        className="relative flex h-[50px] md:w-60 w-3/4 items-center justify-center overflow-hidden border border-headingColor text-headingColor transition-all before:absolute before:h-0 before:w-0  before:bg-headingColor hover:text-white hover:border-headingColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                      >
                        <span className="relative z-10">Contact our team</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="three" className="pt-8 pb-4">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] rounded">
              <div className="lg:px-4 lg:py-12 px-4 py-8">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-6">
                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col space-y-6 w-full"
                  >
                    <div className="flex items-center lg:justify-start justify-center lg:ml-[5px]">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h1 className="ml-2 text-lg font-bold text-mainColor ">
                        Attention to Details
                      </h1>
                    </div>
                    <div className="lg:text-4xl text-2xl lg:text-start text-center font-bold text-headingColor">
                      <h1>Meticulous Focus on Every Single Detai</h1>
                    </div>

                    <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal space-y-2">
                      <p>
                        The system of immigration laws and procedures is highly
                        intricate and complex. As the old saying goes, the devil
                        is in the details. An innocent oversight could cost a
                        person his right to visit or stay in the U.S.
                      </p>
                      <p>
                        At Mannam & Associates, we have implemented a
                        triple-verification system to ensure that each case
                        receives thorough analysis and consideration. First, an
                        experienced attorney devises a strategy that serves
                        both, the long-term and short-term, plans for our
                        client’s immigration situation. Second, the attorney and
                        the paralegal conduct an initial review of the petition
                        to ensure that all information has been accurately
                        represented. Subsequently, the petition is sent for the
                        client’s review, approval and signatures.. Finally,
                        after the client returns the signed documents, the
                        petition is separately reviewed by another attorney and
                        paralegal before it is filed with the appropriate
                        government agency. This meticulous review process is our
                        key to devising innovative strategies and maintaining a
                        high approval rate for clients with various immigration
                        complications.
                      </p>
                    </div>

                    <div className="flex lg:justify-start justify-center items-center pb-4 pt-2">
                      <a
                        href="/contact"
                        className="relative flex h-[50px] md:w-60 w-3/4 items-center justify-center overflow-hidden border border-headingColor text-headingColor transition-all before:absolute before:h-0 before:w-0  before:bg-headingColor hover:text-white hover:border-headingColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                      >
                        <span className="relative z-10">Contact our team</span>
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex justify-center items-center w-[100%]"
                  >
                    <div className="lg:block hidden">
                      <img
                        src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="support_one"
                        // width="612"
                        // height="512"
                        className="rounded w-auto h-auto object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="support_two"
                        className="rounded lg:hidden block w-auto object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="four" className="pt-8 pb-4">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] rounded">
              <div className="lg:px-4 lg:py-12 px-4 py-8">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-6">
                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex justify-center items-center w-[100%]"
                  >
                    <div className="lg:block hidden">
                      <img
                        src="https://images.pexels.com/photos/17630959/pexels-photo-17630959/free-photo-of-courtroom-with-american-flags-in-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="support_one"
                        // width="612"
                        // height="512"
                        className="rounded w-auto h-auto object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://images.pexels.com/photos/17630959/pexels-photo-17630959/free-photo-of-courtroom-with-american-flags-in-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="support_two"
                        className="rounded lg:hidden block w-auto object-cover"
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col space-y-6 w-full"
                  >
                    <div className="flex items-center lg:justify-start justify-center lg:ml-[5px]">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h1 className="ml-2 text-lg font-bold text-mainColor ">
                        Equipped with knowledge
                      </h1>
                    </div>
                    <div className="lg:text-4xl text-2xl lg:text-start text-center font-bold text-headingColor">
                      <h1>Empowered by Expertise and Informed Decisions</h1>
                    </div>

                    <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal space-y-2">
                      <p>
                        Mannam & Associates is also distinguished by its
                        expertise in helping clients navigate the ever-changing
                        face of the U.S. immigration system,i.e.,what it means
                        and how it could impact a client’s family and/or
                        business. We stay ahead of the changes to keep our
                        clients informed on all emerging immigration issues,
                        such as F-1 OPT/CPT regulations, H-1B RFEs targeting
                        employers in the IT Industry, current trends in U.S.
                        Department of Labor PERM Audits, as well as the latest
                        USDHS pronouncements on I-9 compliance. By taking the
                        guess work and ambiguity out of the process, we ensure
                        that our clients are well-positioned to address their
                        immigration needs.
                      </p>
                      <p>
                        We firmly believe in the practice of preventive law. At
                        Mannam & Associates, our success is accomplished when we
                        protect clients from becoming targets of onerous USCIS
                        Requests for Evidence, U.S. Department of Labor Audits,
                        and ICE Investigations. As Benjamin Franklin said (and
                        our clients realize sooner or later), "An ounce of
                        prevention is worth a pound of cure." We take pride in
                        our creative, proactive thinking that helps our clients
                        identify the most practical options and avoid both,
                        common and less known, immigration pitfalls.
                      </p>
                    </div>

                    <div className="flex lg:justify-start justify-center items-center pb-4 pt-2">
                      <a
                        href="/contact"
                        className="relative flex h-[50px] md:w-60 w-3/4 items-center justify-center overflow-hidden border border-headingColor text-headingColor transition-all before:absolute before:h-0 before:w-0  before:bg-headingColor hover:text-white hover:border-headingColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                      >
                        <span className="relative z-10">Contact our team</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="five" className="pt-8 pb-4">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] rounded">
              <div className="lg:px-4 lg:py-12 px-4 py-8">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-6">
                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col space-y-6 w-full"
                  >
                    <div className="flex items-center lg:justify-start justify-center lg:ml-[5px]">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h1 className="ml-2 text-lg font-bold text-mainColor ">
                        Aggressive Representation
                      </h1>
                    </div>
                    <div className="lg:text-4xl text-2xl lg:text-start text-center font-bold text-headingColor">
                      <h1>Fierce Advocacy for Your Legal Rights</h1>
                    </div>

                    <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal space-y-2">
                      <p>
                        The successful resolution of your immigration matters
                        holds the keys to the future of your family and/or the
                        growth of your business. Throughout our years of
                        immigration practice, we are proud to have become the
                        voice for thousands of clients before the USCIS, the
                        Department of State, and other government agencies. Our
                        clients retain us not only for our immigration
                        expertise, but also for our zealous advocacy of their
                        interests.
                      </p>
                      <p>
                        We remember that our firm’s reputation is defined by how
                        well we serve our clients with individual attention and
                        customized solutions. No two immigration cases are the
                        same, and neither should their resolutions be generic.
                        In our practice, our filings are not the average
                        cookie-cutter compilation of forms and documents, but
                        carefully crafted petitions that represent each
                        client&apos;s unique situation and best interests. Our
                        commitment to excellence is evidenced by the time and
                        care we take to learn about your business and family. We
                        achieve our record of high approvals by providing
                        sophisticated and innovative counseling to your unique
                        immigration challenges. We stand behind our clients and
                        our work, by aggressively defending your rights before
                        the Government. By working with Mannam & Associates, our
                        clients can count on us to deliver the advocacy and
                        aggressive representation their cases deserve.
                      </p>
                    </div>

                    <div className="flex lg:justify-start justify-center items-center pb-4 pt-2">
                      <a
                        href="/contact"
                        className="relative flex h-[50px] md:w-60 w-3/4 items-center justify-center overflow-hidden border border-headingColor text-headingColor transition-all before:absolute before:h-0 before:w-0  before:bg-headingColor hover:text-white hover:border-headingColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                      >
                        <span className="relative z-10">Contact our team</span>
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex justify-center items-center w-[100%]"
                  >
                    <div className="lg:block hidden">
                      <img
                        src={Investor}
                        alt="support_one"
                        // width="612"
                        // height="512"
                        className="rounded w-auto h-auto object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src={Investor}
                        alt="support_two"
                        className="rounded lg:hidden block w-auto object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
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
