import React from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import Copyright from "../assets/Copyright.jpg";

const CopyRight = () => {
  return (
    <>
      <SecNavbar />

      <div className="lg:pt-[72px] pt-[80px]">
        <div className="relative">
          <div className="w-full">
            <div className="w-full">
              <div className="bg-black relative">
                <img
                  src={Copyright}
                  alt="Justice law case hearing"
                  className="relative w-full lg:h-[480px] object-cover bg-opacity-10"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white bg-opacity-50">
                <h1 className=" lg:text-5xl lg:block hidden uppercase font-semibold text-center px-4 py-2 rounded">
                  Copyright
                </h1>

                <h1 className="text-4xl lg:hidden block uppercase font-semibold text-center px-4 py-2 rounded">
                  Copyright
                </h1>
                <p className="lg:text-xl text-center">
                  Updated: December 18, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 pb-12 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] space-y-4">
              <div className="p-4">
                <div className="space-y-2 xl:text-start text-center pt-4">
                  <div className="space-y-2 xl:text-start text-center ">
                    <h1 className="text-headingColor text-2xl font-bold pb-4">
                      Copyright of Mannam & Associates
                    </h1>
                    <p className="text-sideHeading">
                      The content available on the{" "}
                      <a href="/" className="underline text-blue-600">
                        mannamlaw.com
                      </a>{" "}
                      website is protected by copyright laws and is the
                      exclusive intellectual property of Mannam & Associates.
                      This includes, but is not limited to, all text, graphics,
                      images, logos, design elements, layout, and other
                      materials published on the site.
                    </p>
                    <p className="text-sideHeading">
                      Visitors to the website are permitted to view, download,
                      and print materials solely for personal, non-commercial
                      use, provided the following conditions are met:
                    </p>

                    <div className="xl:mx-0 mx-2">
                      <ul className="list-disc xl:ml-4 space-y-1">
                        <li>
                          The content remains unaltered and is reproduced in its
                          entirety.
                        </li>
                        <li>
                          The copyright notices, trademark symbols, and any
                          proprietary markings are preserved and displayed
                          clearly.
                        </li>
                        <li>
                          Use of the materials does not suggest endorsement or
                          affiliation with the Mannam Law Firm unless explicitly
                          authorized.
                        </li>
                      </ul>
                    </div>

                    <p className="text-sideHeading pt-4">
                      Any other use of the content is strictly prohibited
                      without prior written consent from the Mannam Law Firm.
                      This includes, but is not limited to:
                    </p>
                    <div className="xl:mx-0 mx-2">
                      <ul className="list-disc xl:ml-4 space-y-1">
                        <li>
                          Copying or reproducing content for commercial
                          purposes.
                        </li>
                        <li>
                          Publishing, distributing, or transmitting materials to
                          third parties.
                        </li>
                        <li>
                          Modifying or creating derivative works based on the
                          site’s content.
                        </li>
                        <li>
                          Using content for advertising, resale, or mass
                          distribution, whether for monetary gain or other
                          benefits.
                        </li>
                      </ul>
                    </div>
                    <p className="text-sideHeading pt-4">
                      The Mannam & Associates Firm reserves all rights to
                      enforce copyright laws and take necessary legal action
                      against unauthorized use of its intellectual property. Any
                      requests for permission to use the website’s materials
                      outside the scope of personal, non-commercial use must be
                      directed to the firm’s Webmaster at{" "}
                      <a
                        href="mai.to:info@mannamlaw.com"
                        className="underline text-blue-600"
                      >
                        info@mannamlaw.com
                      </a>
                    </p>
                    <p className="text-sideHeading">
                      By accessing the website, users agree to abide by these
                      terms and understand that unauthorized use may result in
                      legal penalties.
                    </p>
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

export default CopyRight;
