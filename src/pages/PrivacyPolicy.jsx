import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import { ImPower } from "react-icons/im";
import { FaFlag } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const PrivacyPolicy = () => {
  const [activeHeading, setActiveHeading] = useState(null);

  // State to manage selected heading for mobile
  const [selectedHeading, setSelectedHeading] = useState(0);

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleSelectChange = (event) => {
    setSelectedHeading(parseInt(event.target.value));
  };

  const scrollToSection = (index) => {
    setActiveHeading(index); // Set the clicked heading as active
    const element = sectionRefs[index].current;
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <SecNavbar />

      <div className="lg:pt-[72px] pt-[80px]">
        <div className="relative">
          <div className="w-full">
            <div className="w-full">
              <div className="bg-black relative">
                <img
                  src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Justice law case hearing"
                  className="relative w-full lg:h-[480px] object-cover bg-opacity-10"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white bg-opacity-50">
                <h1 className=" lg:text-5xl lg:block hidden uppercase font-semibold text-center px-4 py-2 rounded">
                  Mannam Law & Associate's Privacy Policy
                </h1>

                <h1 className="text-4xl lg:hidden block uppercase font-semibold text-center px-4 py-2 rounded">
                  Our Privacy Policy
                </h1>
                <p className="lg:text-xl text-center">
                  Updated: December 18, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 pb-12 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] space-y-4">
              <div className="p-4 space-y-4">
                <div className="xl:text-start text-center ">
                  <p>
                    Thank you for visiting Mannam & Associates LLC website at{" "}
                    <a
                      href="https://mannamlaw.com"
                      className="underline text-blue-600"
                    >
                      www.mannamlaw.com
                    </a>
                    . At the Mannam & Associates LLC, keeping your information
                    safe has always been a priority. Although there have been no
                    changes in our procedures, we have updated our Privacy
                    Policy for clarity, in light of the recent requirements per
                    the 2018 EU General Data Protection Regulation. We never
                    share or sell our lists. You are sent only the information
                    you requested or to which you subscribed.
                  </p>
                </div>

                <div className="pt-8">
                  {/* Desktop View: Two Columns */}
                  <div className="hidden lg:grid grid-cols-3 gap-8">
                    {/* Left side: Headings */}
                    <div className="space-y-4 col-span-1 h-max sticky top-28">
                      {[
                        "Information We Collect From the User",
                        "How We Use The Collected Information",
                        "Data Sharing, Disclosure & Data Security",
                        "Your Choices, Rights & Changes to the policy",
                        "How to access and control your information",
                        "How do we collect user information?",
                        "Personal Information Disclosure by Company",
                      ].map((heading, index) => (
                        <div
                          key={index}
                          onClick={() => scrollToSection(index)}
                          className={`py-3 shadow flex items-center rounded ${
                            activeHeading === index
                              ? "bg-[#f8f9fa] text-mainColor" // Active heading styles
                              : "bg-[#f8f9fa] text-headingColor" // Default styles
                          }`}
                        >
                          <h2 className="pl-3 text-lg cursor-pointer font-medium ease-in-out duration-1000">
                            {heading}
                          </h2>
                        </div>
                      ))}
                    </div>

                    {/* Right side: Display all data */}
                    <div className="space-y-12 col-span-2 overflow-y-auto pl-3">
                      <div ref={sectionRefs[0]} className="space-y-4">
                        <h3 className="text-2xl font-bold text-headingColor">
                          Information We Collect From the User
                        </h3>

                        <div className="space-y-2 xl:text-start text-center ">
                          <p>
                            We may collect various types of information from
                            you, including:
                          </p>
                          <ul className="list-disc xl:ml-3 space-y-1">
                            <li>
                              Personal Information: This includes your name,
                              email address, contact details, and any other
                              information you provide voluntarily when
                              contacting us, subscribing to our newsletters, or
                              using our services.
                            </li>
                            <li>
                              Non-Personal Information: This includes technical
                              information such as IP addresses, browser type,
                              device information, and website usage data
                              collected through cookies and similar
                              technologies.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div ref={sectionRefs[1]} className="space-y-4">
                        <h3 className="text-2xl font-bold text-headingColor">
                          How We Use The Collected Information
                        </h3>

                        <div className="space-y-2 xl:text-start text-center ">
                          <p>
                            We use the collected information for the following
                            purposes:
                          </p>
                          <ul className="list-disc xl:ml-3 space-y-1">
                            <li>
                              Providing Services: To deliver the services you
                              request, including responding to inquiries,
                              processing transactions, and providing customer
                              support.
                            </li>
                            <li>
                              Website Improvement: To enhance our website’s
                              functionality, content, and user experience based
                              on user interactions and feedback.
                            </li>
                            <li>
                              Communication: To send you relevant updates,
                              newsletters, and promotional materials, subject to
                              your preferences.
                            </li>
                            <li>
                              Analytics: To analyze website usage patterns,
                              trends, and performance metrics for the purpose of
                              improving our website and services.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div ref={sectionRefs[2]} className="space-y-4">
                        <h3 className="text-2xl font-bold text-headingColor">
                          Data Sharing, Disclosure & Data Security
                        </h3>

                        <div className="space-y-2 xl:text-start text-center ">
                          <p>
                            We do not sell or rent your personal information to
                            third parties. However, we may share your
                            information in the following circumstances:
                          </p>
                          <ul className=" list-disc xl:ml-3 space-y-1">
                            <li>
                              Service Providers: We may share information with
                              trusted third-party service providers who assist
                              us in delivering our services and maintaining our
                              website.
                            </li>
                            <li>
                              Legal Obligations: We may disclose information
                              when required by law or to protect our rights,
                              privacy, safety, or property.
                            </li>
                          </ul>
                          <p>
                            We take reasonable measures to safeguard your
                            information against unauthorized access, disclosure,
                            alteration, or destruction. However, no data
                            transmission over the internet or electronic storage
                            method is completely secure.
                          </p>
                        </div>
                      </div>
                      <div ref={sectionRefs[3]} className="space-y-4">
                        <h3 className="text-2xl font-bold text-headingColor">
                          Your Choices, Rights & Changes to the policy
                        </h3>

                        <div className="space-y-2 xl:text-start text-center ">
                          <p>You have the right to:</p>
                          <ul className=" list-disc xl:ml-3 space-y-1">
                            <li>
                              Access and Correct Your Information: You can
                              access and update your personal information
                              through your account settings or by contacting us.
                            </li>
                            <li>
                              Opt-Out: You can opt out of receiving promotional
                              communications from us by following the
                              instructions in our emails or by contacting us.
                            </li>
                            <li>
                              Data Deletion: You can request the deletion of
                              your personal information, subject to legal
                              obligations and legitimate interests.
                            </li>
                          </ul>
                          <p>
                            We may update this Privacy Policy periodically to
                            reflect changes in our practices and legal
                            requirements. We will post the updated policy on our
                            website and indicate the effective date of the
                            changes.
                          </p>
                        </div>
                      </div>

                      <div
                        id="learn_more_privacy"
                        ref={sectionRefs[4]}
                        className="space-y-4"
                      >
                        <h3 className="text-2xl font-bold text-headingColor">
                          How to access and control your information
                        </h3>

                        <div className="space-y-2 xl:text-start text-center ">
                          <p>
                            ou have certain rights, choices, and means available
                            to you when it comes to your information, including
                            the use and disclosure of that data. Below is a
                            summary of those choices, how to exercise them and
                            any limitations. If you have any questions, contact
                            us at :
                            <a
                              href="mailTo:info@mannamlaw.com"
                              className="text-blue-500 underline"
                            >
                              info@mannamlaw.com
                            </a>
                          </p>

                          <p>
                            You may also have certain rights and choices
                            regarding our processing of your information,
                            including the right to:
                          </p>
                          <ul className=" list-disc xl:ml-3 space-y-1">
                            <li>
                              Know the categories and/or specific pieces of
                              information collected about you, including whether
                              your Information is sold or disclosed, and with
                              whom your Personal Information was shared
                            </li>
                            <li>
                              Access a copy of the Personal Information we
                              retain about you
                            </li>
                            <li>
                              Request deletion of your Personal Information
                            </li>
                            <li>Correct or amend your Personal Information</li>
                            <li>
                              Object to certain uses of your Personal
                              Information
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div ref={sectionRefs[5]} className="space-y-4">
                        <h3 className="text-2xl font-bold text-headingColor">
                          How do we collect user information?
                        </h3>

                        <div className="space-y-2 xl:text-start text-center ">
                          <p>
                            The Company only collects personal information about
                            an individual with the individual’s knowledge and
                            consent. Generally, this means that the Company
                            collects personal information directly from the
                            individual to whom it relates, whether via the
                            Company’s website, e-mail, telephone, fax, or in
                            person. Occasionally, the Company may collect
                            personal information from third party sources, but
                            only with the knowledge and consent of the
                            individual or where otherwise authorized by law.
                          </p>
                          <p>
                            Visitors to the Company’s website should also be
                            aware that anonymous technical information may be
                            collected by the Company as a result of a visit to
                            the Company’s website. For example, this information
                            may include the visitor’s IP address, browser type,
                            device type, operating system, domain name, access
                            times and referring website addresses. The Company
                            uses this anonymous technical information for
                            purposes such as diagnosing problems with the
                            Company’s servers, improving the operation and
                            content of the Company’s website and compiling
                            aggregate and statistical information.
                          </p>
                          <p>
                            In some cases, this anonymous technical information
                            may be combined with personal information you have
                            provided, including for example to help the Company
                            analyze statistical use patterns and demographic
                            data, and determine which website referred the
                            visitor to the Company’s website. The Company will
                            not otherwise attempt to link or match such
                            anonymous technical information with any
                            personally-identifiable information unless the
                            Company has an individual’s consent, the Company (or
                            its service providers) have detected or reasonably
                            suspect any unlawful use of the Company’s services
                            or a security breach, or the Company has a legal
                            duty or right to do so.
                          </p>
                          <p>
                            The Company may use “cookies” on its website.
                            “Cookies” are small text files placed on computers
                            that can collect and store a variety of information.
                            Persistent cookies are stored for a defined period
                            of time on a user’s hard drive unless manually
                            deleted, while temporary cookies are automatically
                            deleted from the user’s browser upon logging out of
                            a website.{" "}
                            <span className="text-[#1C1C1C] font-semibold">
                              Web browsers typically allow users to disable
                              persistent and/or temporary cookies.
                            </span>
                          </p>
                          <p>
                            Please note that the Company uses Google Analytics,
                            and Google Tag Manager. Both solutions are operated
                            by Google LLC, 1600 Amphitheatre Parkway, Mountain
                            View, CA 94043, USA (more information about how
                            Google collects, uses, and processes data can be
                            found{" "}
                            <a
                              href="https://policies.google.com/technologies/partner-sites"
                              className="text-red-400 font-medium underline"
                            >
                              here
                            </a>
                            ). Google Tag Manager allows marketed website tags
                            to be managed using an interface. The Tag Manager
                            tool itself (which implements the tags) is a
                            cookie-less domain and does not register personal
                            information. Rather, the tool causes other tags to
                            be activated which may, for their part, register
                            personal information under certain circumstances.
                            Google Tag Manager does not access this personal
                            information. If recording has been deactivated on a
                            domain or cookie level, this setting will remain in
                            place for all tracking tags implemented with Google
                            Tag Manager.
                          </p>
                        </div>
                      </div>

                      <div ref={sectionRefs[6]} className="space-y-4">
                        <h3 className="text-2xl font-bold text-headingColor">
                          Personal Infomation Disclosure by Company
                        </h3>

                        <div className="space-y-2 xl:text-start text-center ">
                          <p>
                            In some cases, the Company may share personal
                            information with third party service providers
                            performing functions on the Company’s behalf,
                            including, for example, vendors that provide
                            information technology services or provide analytics
                            or assessment services.
                          </p>
                          <p>
                            The Company does not otherwise use or disclose
                            personal information unless the Company has an
                            individual’s consent, the Company has a good faith
                            belief that disclosure of the information is
                            necessary to protect the rights or property of
                            Company, or the Company has a legal duty or right to
                            do so.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile View: Select Dropdown */}
                  <div className="lg:hidden">
                    <div className="relative">
                      <select
                        value={selectedHeading}
                        onChange={handleSelectChange}
                        className="w-full mb-4 p-3 border border-gray-300 rounded shadow bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none pr-8"
                      >
                        <option value="0" className="text-center">
                          {" "}
                          Information We Collect From the User
                        </option>
                        <option value="1" className="text-center">
                          How We Use The Collected Information
                        </option>
                        <option value="2" className="text-center">
                          Data Sharing, Disclosure & Data Security
                        </option>
                        <option value="3" className="text-center">
                          Your Choices, Rights & Changes to the policy
                        </option>
                        <option value="4" className="text-center">
                          How to access and control your information?
                        </option>
                        <option value="5" className="text-center">
                          How do we collect user information?
                        </option>
                        <option value="6" className="text-center">
                          Personal Infomation Disclosure by Company
                        </option>
                      </select>
                      <span className="absolute right-3 top-1/4  -translate-y-[20%] pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </span>
                    </div>

                    {/* Display only the selected content in mobile view */}
                    {selectedHeading === 0 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800 text-center">
                          Information We Collect From the User
                        </h3>

                        <div className="space-y-2 xl:text-start text-center ">
                          <p>
                            This Privacy Policy belongs to the Terms of Service
                            of{" "}
                            <a
                              className="underline text-blue-600"
                              href="https://mannamlaw.com/"
                            >
                              mannamlaw
                            </a>{" "}
                            and should be followed as a part of it. Your Privacy
                            is our priority and responsibility what we always
                            remain committed to. This Privacy Policy comprises
                            how we protect your data and what sort of measuring
                            tools we adopt just to ensure confidentiality and
                            integrity for all the personal or non-personal data
                            that you entrust to us. This Privacy Policy consists
                            of how we collect, use, and distribute your data
                            that imbibes your identity or personal information
                            as well as how we manage the security and protection
                            part of your confidential data.
                          </p>
                          <p>
                            <span className="font-semibold">
                              The Privacy Act of 1974, as amended to present (5
                              U.S.C. 552a)
                            </span>
                            , protects records about individuals retrieved by
                            personal identifiers such as a name, social security
                            number, or other identifying number or symbol.
                            Adhering to the USA's privacy policy act, we are
                            highly committed to protecting your data privacy.
                            Thereby, we remain careful and transparent about
                            what certain data we collect, process, and
                            distribute.
                          </p>

                          <p>
                            We may collect various types of information from
                            you, including:
                          </p>
                          <ul className=" list-disc xl:ml-6 mx-2 space-y-1">
                            <li>
                              Personal Information: This includes your name,
                              email address, contact details, and any other
                              information you provide voluntarily when
                              contacting us, subscribing to our newsletters, or
                              using our services.
                            </li>
                            <li>
                              Non-Personal Information: This includes technical
                              information such as IP addresses, browser type,
                              device information, and website usage data
                              collected through cookies and similar
                              technologies.
                            </li>
                          </ul>
                        </div>
                        {/* <button className="bg-mainColor text-white px-6 py-2 rounded-full">
                          Learn More
                        </button> */}
                      </div>
                    )}
                    {selectedHeading === 1 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800 text-center">
                          How We Use The Collected Information
                        </h3>

                        <div className="space-y-2 xl:text-start text-center ">
                          <p>
                            We use the collected information for the following
                            purposes:
                          </p>
                          <ul className=" list-disc xl:ml-6 mx-1 space-y-1">
                            <li>
                              Providing Services: To deliver the services you
                              request, including responding to inquiries,
                              processing transactions, and providing customer
                              support.
                            </li>
                            <li>
                              Website Improvement: To enhance our website’s
                              functionality, content, and user experience based
                              on user interactions and feedback.
                            </li>
                            <li>
                              Communication: To send you relevant updates,
                              newsletters, and promotional materials, subject to
                              your preferences.
                            </li>
                            <li>
                              Analytics: To analyze website usage patterns,
                              trends, and performance metrics for the purpose of
                              improving our website and services.
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {selectedHeading === 2 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800 text-center">
                          Data Sharing, Disclosure & Data Security
                        </h3>

                        <div className="space-y-2 xl:text-start text-center ">
                          <p>
                            We do not sell or rent your personal information to
                            third parties. However, we may share your
                            information in the following circumstances:
                          </p>
                          <ul className=" list-disc xl:ml-6 mx-1 space-y-1">
                            <li>
                              Service Providers: We may share information with
                              trusted third-party service providers who assist
                              us in delivering our services and maintaining our
                              website.
                            </li>
                            <li>
                              Legal Obligations: We may disclose information
                              when required by law or to protect our rights,
                              privacy, safety, or property.
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {selectedHeading === 3 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800 text-center">
                          Your Choices, Rights & Changes to the privacy policy
                        </h3>

                        <div className="space-y-2 xl:text-start text-center ">
                          <ul className="list-disc xl:ml-6 mx-1 space-y-1">
                            <li>
                              Access and Correct Your Information: You can
                              access and update your personal information
                              through your account settings or by contacting us.
                            </li>
                            <li>
                              Opt-Out: You can opt out of receiving promotional
                              communications from us by following the
                              instructions in our emails or by contacting us.
                            </li>
                            <li>
                              Data Deletion: You can request the deletion of
                              your personal information, subject to legal
                              obligations and legitimate interests.
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {selectedHeading === 4 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800 text-center">
                          How to access and control your information?
                        </h3>

                        <div className="space-y-2 xl:text-start text-center pt-4">
                          <div className="space-y-2 xl:text-start text-center ">
                            <p>
                              You have certain rights, choices, and means
                              available to you when it comes to your
                              information, including the use and disclosure of
                              that data. Below is a summary of those choices,
                              how to exercise them and any limitations.
                            </p>

                            <p>
                              You may also have certain rights and choices
                              regarding our processing of your information,
                              including the right to:
                            </p>

                            <ul className=" list-disc xl:ml-6 mx-1 space-y-1">
                              <li>
                                Know the categories and/or specific pieces of
                                information collected about you, including
                                whether your Information is sold or disclosed,
                                and with whom your Personal Information was
                                shared
                              </li>
                              <li>
                                Access a copy of the Personal Information we
                                retain about you
                              </li>
                              <li>
                                Request deletion of your Personal Information
                              </li>
                              <li>
                                Correct or amend your Personal Information
                              </li>
                              <li>
                                Object to certain uses of your Personal
                                Information
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedHeading === 5 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800 text-center">
                          How do we collect user information?
                        </h3>

                        <div className="space-y-2 xl:text-start text-center pt-4">
                          <div className="space-y-2 xl:text-start text-center ">
                            <p>
                              The Company only collects personal information
                              about an individual with the individual’s
                              knowledge and consent. Generally, this means that
                              the Company collects personal information directly
                              from the individual to whom it relates, whether
                              via the Company’s website, e-mail, telephone, fax,
                              or in person. Occasionally, the Company may
                              collect personal information from third party
                              sources, but only with the knowledge and consent
                              of the individual or where otherwise authorized by
                              law.
                            </p>
                            <p>
                              Visitors to the Company’s website should also be
                              aware that anonymous technical information may be
                              collected by the Company as a result of a visit to
                              the Company’s website. For example, this
                              information may include the visitor’s IP address,
                              browser type, device type, operating system,
                              domain name, access times and referring website
                              addresses. The Company uses this anonymous
                              technical information for purposes such as
                              diagnosing problems with the Company’s servers,
                              improving the operation and content of the
                              Company’s website and compiling aggregate and
                              statistical information.
                            </p>
                            <p>
                              In some cases, this anonymous technical
                              information may be combined with personal
                              information you have provided, including for
                              example to help the Company analyze statistical
                              use patterns and demographic data, and determine
                              which website referred the visitor to the
                              Company’s website. The Company will not otherwise
                              attempt to link or match such anonymous technical
                              information with any personally-identifiable
                              information unless the Company has an individual’s
                              consent, the Company (or its service providers)
                              have detected or reasonably suspect any unlawful
                              use of the Company’s services or a security
                              breach, or the Company has a legal duty or right
                              to do so.
                            </p>

                            <p>
                              The Company may use “cookies” on its website.
                              “Cookies” are small text files placed on computers
                              that can collect and store a variety of
                              information. Persistent cookies are stored for a
                              defined period of time on a user’s hard drive
                              unless manually deleted, while temporary cookies
                              are automatically deleted from the user’s browser
                              upon logging out of a website.{" "}
                              <span className="text-[#1C1C1C] font-medium">
                                Web browsers typically allow users to disable
                                persistent and/or temporary cookies.
                              </span>
                            </p>
                            <p>
                              Please note that the Company uses Google
                              Analytics, and Google Tag Manager. Both solutions
                              are operated by Google LLC, 1600 Amphitheatre
                              Parkway, Mountain View, CA 94043, USA (more
                              information about how Google collects, uses, and
                              processes data can be found{" "}
                              <a
                                href="https://policies.google.com/technologies/partner-sites"
                                className="text-red-400 font-medium underline"
                              >
                                here
                              </a>
                              ). Google Tag Manager allows marketed website tags
                              to be managed using an interface. The Tag Manager
                              tool itself (which implements the tags) is a
                              cookie-less domain and does not register personal
                              information. Rather, the tool causes other tags to
                              be activated which may, for their part, register
                              personal information under certain circumstances.
                              Google Tag Manager does not access this personal
                              information. If recording has been deactivated on
                              a domain or cookie level, this setting will remain
                              in place for all tracking tags implemented with
                              Google Tag Manager.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedHeading === 6 && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800 text-center">
                          Personal Infomation Disclosure by Company
                        </h3>

                        <div className="space-y-2 xl:text-start text-center ">
                          <p>
                            In some cases, the Company may share personal
                            information with third party service providers
                            performing functions on the Company’s behalf,
                            including, for example, vendors that provide
                            information technology services or provide analytics
                            or assessment services.
                          </p>
                          <p>
                            The Company does not otherwise use or disclose
                            personal information unless the Company has an
                            individual’s consent, the Company has a good faith
                            belief that disclosure of the information is
                            necessary to protect the rights or property of
                            Company, or the Company has a legal duty or right to
                            do so.
                          </p>
                          <p>
                            The Company does not rent, sell or trade customer
                            lists or other personal information.
                          </p>
                        </div>
                      </div>
                    )}
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

export default PrivacyPolicy;
