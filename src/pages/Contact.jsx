import React from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import Blogs from "../components/Blogs";
import ScrollToTop from "../components/ScrollToTop";

const Contact = () => {
  return (
    <>
      <SecNavbar />

      <div className="lg:pt-28 pt-16">
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
