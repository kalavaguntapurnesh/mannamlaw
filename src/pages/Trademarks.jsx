import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import un from "../assets/Un.jpg";

const Trademarks = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <>
      <SecNavbar />

      <div className="lg:pt-[72px] pt-[80px]">
        <div className="relative">
          <div className="w-full">
            <div className="w-full">
              <div className="bg-black relative">
                <img
                  src={un}
                  alt="Justice law case hearing"
                  className="relative w-full lg:h-[480px] object-cover bg-opacity-10"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white bg-opacity-50">
                <h1 className=" lg:text-5xl lg:block hidden uppercase font-semibold text-center px-4 py-2 rounded">
                  Trademarks
                </h1>

                <h1 className="text-4xl lg:hidden block uppercase font-semibold text-center px-4 py-2 rounded">
                  Trademarks
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
                      Trademarks of Mannam & Associates
                    </h1>
                    <p className="text-sideHeading">
                      The trademarks, logos, and service marks displayed on this
                      website are the registered and unregistered trademarks of{" "}
                      <a className="underline text-blue-600" href="/">
                        Mannam & Associates
                      </a>
                      , its affiliates, or third parties. All rights related to
                      these Trademarks are reserved.
                    </p>

                    <div className="xl:mx-0 mx-2">
                      <p className="text-xl font-semibold text-headingColor mb-2 pt-2">
                        Use of Trademarks
                      </p>
                      <div className="xl:mx-0 mx-2">
                        <ul className="list-disc xl:ml-8 ml-2 space-y-1">
                          <li>
                            You may not use, reproduce, or display any of the
                            Trademarks without prior written consent from Mannam
                            & Associates or the respective trademark owner.
                          </li>
                          <li>
                            Unauthorized use of Trademarks is strictly
                            prohibited and may constitute a violation of
                            applicable trademark laws.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="xl:mx-0 mx-2">
                      <p className="text-xl font-semibold text-headingColor mb-2 pt-2">
                        Ownership
                      </p>
                      <p>
                        The Trademarks on this website represent valuable
                        intellectual property owned by Mannam & Associates or
                        its affiliates. The inclusion of any Trademark on this
                        site does not grant any user the license or right to use
                        it for any purpose.
                      </p>
                    </div>

                    <div className="xl:mx-0 mx-2">
                      <p className="text-xl font-semibold text-headingColor mb-2 pt-2">
                        Third-Party Trademarks
                      </p>
                      <p>
                        Third-party Trademarks, if displayed on this website,
                        are the property of their respective owners. The
                        presence of third-party Trademarks does not imply any
                        affiliation, sponsorship, or endorsement by Mannam &
                        Asoociates.
                      </p>
                    </div>

                    <div className="xl:mx-0 mx-2">
                      <p className="text-xl font-semibold text-headingColor mb-2 pt-2">
                        Trademark Inquiries
                      </p>
                      <p className="space-y-1">
                        If you have questions regarding the use of Trademarks or
                        require permission for specific usage, please contact
                        Mannam Law & Associates at{" "}
                        <a
                          href="mailTo:info@mannamlaw.com"
                          className="underline text-blue-600"
                        >
                          info@mannamlaw.com
                        </a>
                      </p>
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

export default Trademarks;
