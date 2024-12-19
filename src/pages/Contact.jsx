import React, { useState } from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import USA from "../assets/USA.png";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import LawOne from "../assets/lawOne.png";
import LawTwo from "../assets/lawTwo.png";
import LawThree from "../assets/lawThree.png";
import LawFour from "../assets/lawFour.png";
import linkedin from "../assets/social.png";
import email from "../assets/email.png";
import badge from "../assets/badge.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    jobtitle: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    lookingFor: "",
    message: "",
    // termsAccepted: false,
  });

  console.log("data : ", formData);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCaptcha = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please verify the reCAPTCHA.");
      return;
    }

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    try {
      // https://axseva-backend.onrender.com
      // http://localhost:3010/api/register
      const response = await axios.post(
        "https://axseva-backend.onrender.com/api/register",
        formData
      );
      // Swal.fire({
      //   title: "Success",
      //   text: "Form submitted successfully!",
      // });
      setFormData({
        fullname: "",
        jobtitle: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        lookingFor: "",
        message: "",
        termsAccepted: false,
      });
      setCaptchaVerified(false);
    } catch (error) {
      console.error(
        "Error submitting form",
        error.response ? error.response.data : error
      );
      // Swal.fire({
      //   title: "Error",
      //   text: error.response
      //     ? error.response.data.message
      //     : "Server error or internal error!",
      // });
    }
  };

  return (
    <>
      <SecNavbar />

      <div className="lg:pt-28 pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-16">
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
                      Talk to our team
                    </h3>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Don't hesitate to get in touch – we're here to help, share
                      ideas, or collaborate anytime. Let's connect and chat!"
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 pt-8 max-w-full">
                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white border border-gray-200 rounded p-6 transition-transform duration-300 hover:-translate-y-2">
                      <div className="space-y-3">
                        <div className="flex justify-center items-center">
                          <img
                            src={LawThree}
                            alt="services_five"
                            className="w-20 h-20"
                          />
                        </div>
                        <div className="flex justify-center items-center">
                          <h1 className="text-xl text-headingColor font-bold text-center">
                            Office Location
                          </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center text-gray-600 text-center">
                          <p>Mannam & Associates, LLC 6160</p>
                          <p>Peachtree Dunwoody Rd Suite B-230</p>
                          <p>Atlanta, GA 30328, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white border border-gray-200 rounded p-6 transition-transform duration-300 hover:-translate-y-2">
                      <div className="space-y-3">
                        <div className="flex justify-center items-center">
                          <img
                            src={LawTwo}
                            alt="services_five"
                            className="w-20 h-20"
                          />
                        </div>
                        <div className="flex justify-center items-center">
                          <h1 className="text-xl text-headingColor font-bold text-center">
                            Document Mailing Address
                          </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center text-gray-600 text-center">
                          <p>Mannam & Associates, LLC 3651</p>
                          <p>Peachtree Pkwy Suite E-360</p>
                          <p>Atlanta, GA 30024, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white border border-gray-200 rounded p-6 transition-transform duration-300 hover:-translate-y-2">
                      <div className="space-y-3">
                        <div className="flex justify-center items-center">
                          <img
                            src={LawOne}
                            alt="services_five"
                            className="w-20 h-20"
                          />
                        </div>
                        <div className="flex justify-center items-center">
                          <h1 className="text-xl text-headingColor font-bold text-center">
                            Corporate Address
                          </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center text-gray-600 text-center">
                          <p>Mannam & Associates, LLC 2288</p>
                          <p>Gunbarrel Road, Suite 154-300</p>
                          <p>Chattanooga, TN 37421, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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

                <div className="w-full px-4 mx-auto max-w-[1400px] pt-16">
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
                          <p className=" text-base text-gray-600 md:text-start text-center px-2 md:px-0">
                            Empowering America's growth with trusted legal
                            expertise, we navigate complexities, protect rights,
                            and drive success. Our dedicated professionals
                            deliver innovative solutions, ensuring prosperity,
                            stability, and progress
                          </p>
                        </div>

                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-6 md:px-0 px-2">
                          <a
                            href="mailto:info@mannamlaw.com"
                            class="flex md:justify-start justify-center"
                          >
                            <div class="w-full p-4 bg-white border border-gray-200 rounded shadow">
                              <div class="space-y-2">
                                <div className="flex justify-center items-center">
                                  <img
                                    src={email}
                                    alt="contact_three"
                                    className="w-20 h-20"
                                  />
                                </div>
                                <div class="flex justify-center items-center">
                                  <h4 class="text-xl text-headingColor font-semibold text-center">
                                    Email Address
                                  </h4>
                                </div>

                                <div class="flex flex-col justify-center items-center text-sideHeading text-center font-medium">
                                  <p>info@mannamlaw.com</p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="mailto:info@mannamlaw.com"
                            class="flex md:justify-start justify-center"
                          >
                            <div class="w-full p-4 bg-white border border-gray-200 rounded shadow">
                              <div class="space-y-2">
                                <div className="flex justify-center items-center">
                                  <img
                                    src={linkedin}
                                    alt="contact_four"
                                    className="w-20 h-20"
                                  />
                                </div>
                                <div class="flex justify-center items-center">
                                  <h4 class="text-xl text-headingColor font-semibold text-center">
                                    Social Media Links
                                  </h4>
                                </div>

                                <div class="grid grid-cols-3 pt-2">
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
                        // onSubmit={handleSubmit}
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
                              value={formData.fullname}
                              onChange={handleChange}
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
                              name="jobtitle"
                              id="jobtitle"
                              value={formData.jobtitle}
                              onChange={handleChange}
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
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.phoneNumber}
                            onChange={handleChange}
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
                            value={formData.message}
                            onChange={handleChange}
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

                        <div className="flex items-center justify-center mb-5">
                          <input
                            type="checkbox"
                            id="termsAccepted"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            className="w-4 h-4"
                          />
                          <label
                            htmlFor="termsAccepted"
                            className="ml-3 text-sm"
                          >
                            I accept the{" "}
                            <a
                              href="/terms-and-conditions"
                              className="font-medium text-primary-600 hover:underline"
                            >
                              Terms and Conditions
                            </a>{" "}
                            &{" "}
                            <a
                              href="/privacy-policy"
                              className="font-medium text-primary-600 hover:underline"
                            >
                              Privacy Policy
                            </a>{" "}
                            of the company.
                          </label>
                        </div>

                        <button
                          type="submit"
                          class="relative flex h-[50px] w-full items-center justify-center overflow-hidden bg-mainColor border border-mainColor text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-white hover:text-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded font-medium"
                        >
                          <span class="relative z-10">Submit</span>
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
