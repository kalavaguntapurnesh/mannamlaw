import React from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import bar from "../assets/Bar.jpg";

const Disclaimer = () => {
  return (
    <>
      <SecNavbar />

      <div className="lg:pt-[72px] pt-[80px]">
        <div className="relative">
          <div className="w-full">
            <div className="w-full">
              <div className="bg-black relative">
                <img
                  src={bar}
                  alt="Justice law case hearing"
                  className="relative w-full lg:h-[480px] object-cover bg-opacity-10"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white bg-opacity-50">
                <h1 className=" lg:text-5xl lg:block hidden uppercase font-semibold text-center px-4 py-2 rounded">
                  Disclaimer
                </h1>

                <h1 className="text-4xl lg:hidden block uppercase font-semibold text-center px-4 py-2 rounded">
                  Disclaimer
                </h1>
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
                    <h1 className="text-headingColor text-2xl font-bold  ">
                      General Information
                    </h1>
                    <p className="text-sideHeading">
                      The information provided on this website is for general
                      informational purposes only. All content, materials, and
                      services provided on this website are offered &quot;as
                      is&quot; and without warranties of any kind, either
                      express or implied. The owners of this website make no
                      representations or warranties regarding the accuracy,
                      reliability, or completeness of the information presented.
                    </p>

                    <h1 className="text-headingColor text-2xl font-bold  pt-4">
                      No Professional Advice
                    </h1>
                    <p className="text-sideHeading">
                      The content on this website does not constitute legal,
                      financial, medical, or other professional advice. Visitors
                      should consult with qualified professionals for specific
                      guidance tailored to their individual circumstances.
                    </p>

                    <h1 className="text-headingColor text-2xl font-bold  pt-4">
                      External Links
                    </h1>

                    <p className="text-sideHeading">
                      This website may contain links to third-party websites.
                      These links are provided for convenience and informational
                      purposes only. The owners of this website are not
                      responsible for the content, accuracy, or reliability of
                      linked sites and do not endorse any products or services
                      offered on them.
                    </p>

                    <h1 className="text-headingColor text-2xl font-bold pt-4">
                      Limitation of Liability
                    </h1>
                    <p className="text-sideHeading">
                      Under no circumstances shall the owners, authors, or
                      affiliates of this website be liable for any direct,
                      indirect, incidental, consequential, or punitive damages
                      resulting from the use or inability to use this website or
                      its content.
                    </p>

                    <h1 className="text-headingColor text-2xl font-bold pt-4">
                      Copyright and Intellectual Property
                    </h1>
                    <p className="text-sideHeading">
                      All content and materials on this website, including text,
                      images, logos, and other media, are the property of their
                      respective owners unless otherwise stated. Unauthorized
                      reproduction, distribution, or use is prohibited.
                    </p>

                    <h1 className="text-headingColor text-2xl font-bold pt-4">
                      Updates to This Disclaimer
                    </h1>
                    <p className="text-sideHeading">
                      This disclaimer may be updated from time to time without
                      prior notice. It is the responsibility of users to review
                      this page periodically for any changes.
                    </p>

                    <h1 className="text-headingColor text-2xl font-bold pt-4">
                      Contact Us
                    </h1>
                    <p className="text-sideHeading">
                      If you have any questions about this disclaimer, please
                      contact us at:{" "}
                      <a
                        className="underline text-blue-600"
                        href="mailto:info@mannamlaw.com"
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

      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Disclaimer;
