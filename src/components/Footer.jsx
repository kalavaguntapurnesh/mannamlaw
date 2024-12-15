import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { SiPaloaltosoftware } from "react-icons/si";
const Footer = () => {
  return (
    <div className="bg-[#f6f8f9] p-15 select-none">
      <div className="relative ">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="pb-8 mb-8 border-b border-gray-600">
              <div className="w-full p-8">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 mt-8">
                  <div className="flex flex-col lg:mb-0 mb-8 gap-4 md:col-span-1 col-span-2">
                    <div className="w-full ">
                      <a
                        href="/"
                        className="flex flex-row items-center md:justify-start justify-center"
                      >
                        <h3 className="ml-1 text-2xl text-mainColor font-bold cursor-pointer">
                          Mannam<span className="text-[#0A3161]">Law</span>
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className=" text-sm leading-5 font-bold text-mainColor tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        About us
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          Our Privacy Policy
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about-us"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          About AXSeva
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about-us#our_leadership"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          Our Leadership
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/terms-and-conditions"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/collaborate-with-us"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          Collaborate with us
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className=" text-sm leading-5 text-mainColor font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Services
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/managed-it-services"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          Dynamic 365 Finance & Operations
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/services-microsoft-dynamics-365-finance"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          BI Analytics
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/services-microsoft-dynamics-365-finance"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          Support & Managed Services
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          Customer Engagement
                        </a>
                      </li>

                      {/* <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about-us#location_map"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks  transition duration-300 ease-in-out"
                        >
                          Where to Find Us
                        </a>
                      </li> */}
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className="  text-sm leading-5 font-bold text-mainColor tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Quick Links
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          Integration Consulting
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about-us"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          Business Needs
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="https://www.linkedin.com/company/axseva/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          LinkedIn Page
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="https://www.google.com/maps/place/1691+Kettering+St,+Irvine,+CA+92614,+USA/@33.6979191,-117.8467571,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcdebc76905421:0xc9b403b589d3cb99!8m2!3d33.6979191!4d-117.8467571!16s%2Fg%2F11bw3yyf27?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          Location Map
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className="  text-sm leading-5 text-mainColor font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Industries
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/industries"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          Financial Services
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          Manufacturing Services
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          Software Services
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor font-medium text-headingColor no-underline text-[14px] leading-6 text-footerLinks transition duration-300 ease-in-out"
                        >
                          Public Sector Services
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-4 w-full">
                  <div className="grid grid-cols-5">
                    <a
                      href="https://www.linkedin.com/company/axseva/"
                      className="flex justify-center items-center "
                    >
                      <FaLinkedin
                        size={25}
                        className="cursor-pointer text-headingColor"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/axseva/"
                      className="flex justify-center items-center"
                    >
                      <FaXTwitter
                        size={25}
                        className="cursor-pointer text-headingColor"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/axseva/"
                      className="flex justify-center items-center"
                    >
                      <FaInstagram
                        size={25}
                        className="cursor-pointer text-headingColor"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/axseva/"
                      className="flex justify-center items-center"
                    >
                      <FaGoogle
                        size={25}
                        className="cursor-pointer text-headingColor"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/axseva/"
                      className="flex justify-center items-center"
                    >
                      <FaFacebook
                        size={25}
                        className="cursor-pointer text-headingColor"
                      />
                    </a>{" "}
                  </div>

                  <div className="flex justify-center items-center">
                    <form className="lg:w-[70%] w-[90%]">
                      <label
                        for="search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only"
                      >
                        Subscribe
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          {/* <svg
                            class="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg> */}
                        </div>
                        <input
                          type="search"
                          id="search"
                          class="block w-full p-4 ps-10 text-sm text-gray-900 border-[0.5px] border-headingColor rounded bg-gray-50 focus:outline-none"
                          placeholder="Enter your email address"
                          required
                        />
                        <button
                          type="submit"
                          class="text-white absolute end-2.5 bottom-2.5 bg-mainColor font-medium rounded text-sm px-4 py-2 "
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-xs pb-6">
              <p className="text-headingColor">
                Copyright © 2024 AXSeva. All rights reserved
              </p>
              <p className="text-headingColor pt-2">
                All images related to Microsoft are trademarks of Microsoft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
