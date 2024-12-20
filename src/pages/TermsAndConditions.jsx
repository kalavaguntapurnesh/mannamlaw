import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import un from "../assets/Un.png";

const TermsAndConditions = () => {
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
                  our Terms and conditions
                </h1>

                <h1 className="text-4xl lg:hidden block uppercase font-semibold text-center px-4 py-2 rounded">
                  Terms & conditions
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
                    <h1 className="text-headingColor text-xl font-semibold pb-4">
                      Terms and Conditions of Mannam & Associates
                    </h1>
                    <p className="text-sideHeading">
                      By submitting a consultation request, you acknowledge and
                      agree to the following terms and conditions. The
                      consultation service is intended to provide tailored
                      guidance and recommendations based on the information you
                      provide. It does not constitute legal, financial, or
                      professional advice unless explicitly stated. To ensure
                      the best possible outcome, you agree to provide accurate,
                      complete, and current information. The quality of the
                      consultation may be impacted by any inaccuracies or
                      omissions in the information supplied.
                    </p>
                    <p className="text-sideHeading">
                      All information shared during the consultation will be
                      handled with strict confidentiality and will not be
                      disclosed to third parties without your consent, except as
                      required by law. Likewise, you are responsible for
                      maintaining the confidentiality of any insights,
                      recommendations, or materials shared by the consultant.
                    </p>
                    <p className="text-sideHeading">
                      While we strive to offer valuable insights, the
                      consultation is provided on a good-faith, best-effort
                      basis, and no guarantees or warranties regarding specific
                      outcomes or results are provided. If applicable, fees for
                      the consultation must be paid in full before the session
                      unless otherwise agreed. Payments are non-refundable
                      except in cases specified under the cancellation policy.
                      To reschedule or cancel a session, requests must be
                      submitted at least 24 hours in advance. Late cancellations
                      or missed appointments will result in forfeiture of fees.
                    </p>
                    <p className="text-sideHeading">
                      Any materials or intellectual property shared during the
                      consultation remain the exclusive property of the
                      consultant and may not be reproduced, distributed, or used
                      without prior written consent. The consultant is not
                      liable for any direct, indirect, incidental, or
                      consequential damages resulting from the consultation. You
                      agree to use the guidance provided at your own discretion
                      and risk.
                    </p>
                    <p className="text-sideHeading">
                      The consultant reserves the right to terminate a session
                      or engagement if the terms are violated or if the
                      engagement is deemed unsuitable. These terms and
                      conditions are governed by the laws of United States of
                      America, and any disputes will be resolved in accordance
                      with these laws. We may update these terms and conditions
                      from time to time, and any changes will be communicated
                      prior to subsequent consultations.
                    </p>
                    <p className="text-sideHeading">
                      By submitting your consultation request, you confirm that
                      you have read, understood, and agreed to these terms and
                      conditions. If you have any questions or need further
                      clarification, please contact us at{" "}
                      <a
                        href="mailTo:info@mannamlaw.com"
                        className="text-blue-500 underline"
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

export default TermsAndConditions;
