import { useState } from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import USA from "../assets/USA.png";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import linkedin from "../assets/social.png";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import axios from "axios";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [legalIssue, setLegalIssue] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/registerUser",
        {
          fullName,
          legalIssue,
          email,
          phoneNumber,
          message,
        }
      );

      if (response.status === 201) {
        alert("Form Submitted Successfully");
        console.log("Form Submitted Successfully!!!");
      }
    } catch (error) {
      console.error(
        "Error submitting form",
        error.response ? error.response.data : error
      );
    }
  };

  return (
    <>
      <SecNavbar />

      <div className="lg:pt-28 pt-24 pb-16">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
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
                      Contact Us
                    </p>
                  </div>

                  <div className="text-center mt-4">
                    <h3 className="lg:text-4xl text-2xl font-bold text-headingColor">
                      Connect with our experts
                    </h3>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Don't hesitate to get in touch – we're here to help, share
                      ideas, or collaborate anytime. Let's connect and chat!"
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-2 pt-8 max-w-full"
                >
                  <a
                    href="https://maps.app.goo.gl/3thoVg6gfrFoSwY4A"
                    className="flex md:justify-start justify-center"
                  >
                    <div className="w-full bg-white rounded p-6 transition-transform duration-300 lg:hover:-translate-y-2">
                      <div className="space-y-3">
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
                          <p>
                            Phone Number:{" "}
                            <span className="underline text-blue-600 font-medium">
                              (678) 392-3170
                            </span>
                          </p>
                        </div>

                        <div className="px-6 pb-4 flex justify-center">
                          <button className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 ">
                            <span className="relative z-10 ">
                              View Location
                            </span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/oGgn5UJCpWmAXT2HA"
                    className="flex md:justify-start justify-center"
                  >
                    <div className="w-full bg-white rounded p-6 transition-transform duration-300 lg:hover:-translate-y-2">
                      <div className="space-y-3">
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
                          <p>
                            Phone Number:{" "}
                            <span className="underline text-blue-600 font-medium">
                              (678) 392-3170
                            </span>
                          </p>
                        </div>

                        <div className="px-6 pb-4 flex justify-center">
                          <button className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 ">
                            <span className="relative z-10 ">
                              View Location
                            </span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/3thoVg6gfrFoSwY4A"
                    className="flex md:justify-start justify-center"
                  >
                    <div className="w-full bg-white rounded p-6 transition-transform duration-300 lg:hover:-translate-y-2">
                      <div className="space-y-3">
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
                          <p>
                            Phone Number:{" "}
                            <span className="underline text-blue-600 font-medium">
                              (678) 392-3170
                            </span>
                          </p>
                        </div>

                        <div className="px-6 pb-4 flex justify-center">
                          <button className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 ">
                            <span className="relative z-10 ">
                              View Location
                            </span>
                            <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>

                <div id="location_map" className="pt-20 md:px-0 px-2">
                  <div>
                    <div
                      // href="https://maps.app.goo.gl/MVjv2DyeQkwUS8Wr5"
                      className="max-w-[1200px] mx-auto pt-4 flex justify-center items-center"
                    >
                      <img
                        // src={world}
                        src={USA}
                        alt="about_two"
                        className="md:w-[80%] w-[100%]"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full mx-auto max-w-[1400px] pt-16">
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <div className="flex flex-col space-y-4 mt-8">
                        <div className="flex items-center lg:justify-start justify-center lg:text-start text-center">
                          <div className="h-4 w-1 bg-mainColor"></div>
                          <h2 className="ml-2 lg:text-lg font-semibold text-mainColor">
                            Collaborate with us
                          </h2>
                        </div>
                        <div className="lg:text-start text-center">
                          <p className="lg:text-4xl text-2xl font-bold text-headingColor">
                            Prompting America's Prosperity through our legal
                            experts
                          </p>
                        </div>
                        <div className="lg:text-start text-center">
                          <p className=" text-base text-gray-600 md:text-start text-center">
                            Empowering America's growth with trusted legal
                            expertise, we navigate complexities, protect rights,
                            and drive success. Our dedicated professionals
                            deliver innovative solutions, ensuring prosperity,
                            stability, and progress
                          </p>
                        </div>

                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-6 ">
                          <a
                            href="mailto:info@mannamlaw.com"
                            className="flex md:justify-start justify-center"
                          >
                            <div className="w-full p-4 bg-white border border-gray-200 rounded shadow">
                              <div className="space-y-2">
                                <div className="flex justify-center items-center">
                                  <img
                                    src={email}
                                    alt="contact_three"
                                    className="w-20 h-20"
                                  />
                                </div>
                                <div className="flex justify-center items-center">
                                  <h4 className="text-xl text-headingColor font-semibold text-center">
                                    Email Address
                                  </h4>
                                </div>

                                <div className="flex flex-col justify-center items-center text-sideHeading text-center font-medium">
                                  <p>info@mannamlaw.com</p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="mailto:info@mannamlaw.com"
                            className="flex md:justify-start justify-center"
                          >
                            <div className="w-full p-4 bg-white border border-gray-200 rounded shadow">
                              <div className="space-y-2">
                                <div className="flex justify-center items-center">
                                  <img
                                    src={linkedin}
                                    alt="contact_four"
                                    className="w-20 h-20"
                                  />
                                </div>
                                <div className="flex justify-center items-center">
                                  <h4 className="text-xl text-headingColor font-semibold text-center">
                                    Social Media Links
                                  </h4>
                                </div>

                                <div className="grid grid-cols-3 pt-2">
                                  <a
                                    href="https://www.linkedin.com/in/ravi-mannam-7930531a"
                                    className="flex justify-center items-center"
                                  >
                                    <FaLinkedin className="text-headingColor w-6 h-6" />
                                  </a>
                                  <a
                                    href="https://www.linkedin.com/in/ravi-mannam-7930531a"
                                    className="flex justify-center items-center"
                                  >
                                    <FaXTwitter className="text-headingColor w-6 h-6" />
                                  </a>
                                  <a
                                    href="https://www.linkedin.com/in/ravi-mannam-7930531a"
                                    className="flex justify-center items-center"
                                  >
                                    <FaInstagram className="text-headingColor w-6 h-6" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <form
                        onSubmit={handleSubmit}
                        className="mt-8 lg:p-6 lg:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded"
                      >
                        <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-4">
                          <div className="mb-3 w-full">
                            <label
                              htmlFor="fullname"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="fullname"
                              id="fullname"
                              onChange={(e) => setFullName(e.target.value)}
                              placeholder="Your Full Name"
                              className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                            />
                          </div>

                          <div className="mb-3 w-full">
                            <label
                              htmlFor="jobtitle"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Legal Issue
                            </label>
                            <input
                              type="text"
                              name="legalIssue"
                              id="legalIssue"
                              onChange={(e) => setLegalIssue(e.target.value)}
                              placeholder="Your Legal Issue"
                              className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                            />
                          </div>
                        </div>

                        <div className="mb-5 w-full">
                          <label
                            htmlFor="email"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email"
                            className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                          />
                        </div>

                        <div className="mb-5 w-full">
                          <label
                            htmlFor="phoneNumber"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Your Phone Number"
                            className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                          />
                        </div>

                        <div className="mb-3 w-full">
                          <label
                            htmlFor="message"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Message
                          </label>
                          <textarea
                            rows="4"
                            name="message"
                            id="message"
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Let us know if you’d like to schedule a meeting, discuss opportunities, or have any questions. We're here to help!"
                            className="w-full resize-none rounded border bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                          ></textarea>
                        </div>
                        {/* 
                        <div className="w-[100%] flex py-4 text-start justify-center">
                          <ReCAPTCHA
                            sitekey="6LchMmUqAAAAANKg1dNzYDXJnCMf-L6TjRsUVAfG"
                            onChange={handleCaptcha}
                          />
                        </div> */}

                        <button
                          type="submit"
                          className="relative flex h-[50px] w-full items-center justify-center overflow-hidden bg-headingColor border border-headingColor text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-white hover:text-headingColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded font-medium"
                        >
                          <span className="relative z-10">Submit</span>
                        </button>
                      </form>
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

export default Contact;
