import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";

const Naturalization = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <>
      <SecNavbar />

      <div className="lg:pt-28 pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
                  <div className="space-y-4 flex flex-col lg:justify-start justify-center">
                    <div className="flex items-center lg:text-start text-center justify-center lg:justify-start lg:ml-[5px]">
                      <div className="h-4 w-1 bg-mainColor"></div>

                      <p className="ml-2 lg:text-lg font-semibold text-mainColor">
                        Naturalization
                      </p>
                    </div>
                    <div>
                      <h1 className="lg:text-4xl lg:text-start text-center text-2xl text-headingColor font-bold lg:leading-snug">
                        Adjustment of status of I-485
                      </h1>
                    </div>
                    <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal">
                      <p>
                        If you are a Legal Permanent Resident and are
                        considering applying for U.S. Citizenship, please
                        understand that any criminal conviction/record,
                        residency and tax issues could lead to, not only a
                        rejection of your application, but also initiation of
                        removal proceedings by the US Department of Homeland
                        Security. Should you have any concerns over your N-400
                        application for citizenship, please contact us so that
                        we can discuss your options and help you overcome the
                        obstacles to U.S. Citizenship.
                      </p>
                    </div>

                    <div className="flex lg:justify-start justify-center items-center pb-4 pt-4">
                      <a
                        href="/contact"
                        className="relative flex h-[50px] md:w-60 w-3/4 items-center justify-center overflow-hidden bg-headingColor border border-headingColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor hover:border-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                      >
                        <span className="relative z-10">Explore more</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-[100%]">
                    <div className="lg:block hidden">
                      <img
                        src="https://images.pexels.com/photos/10770457/pexels-photo-10770457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="support_one"
                        // width="612"
                        // height="512"
                        className="rounded h-auto w-auto object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://images.pexels.com/photos/10770457/pexels-photo-10770457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="support_two"
                        className="rounded lg:hidden block w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 pb-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-4">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    Important Information on Naturalization
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <p>To be eligible for naturalization, an applicant must:</p>
                    <ul className="list-disc xl:ml-8 ml-2 space-y-2">
                      <li>Be at least 18 years old;</li>
                      <li>
                        Have been lawfully admitted for permanent residence;
                      </li>
                      <li>
                        Have resided continuously as a lawful permanent resident
                        in the U.S. for at least 5 years prior to filing;
                      </li>
                      <ul className="list-disc xl:ml-8 ml-2 space-y-2">
                        <li className="font-medium">
                          Please Note: a foreign national, who receives LPR
                          status through marriage to a U.S. Citizen, may be
                          eligible for U.S. Citizenship three years after he or
                          she is accorded LPR status. Specific requirements for
                          this fast-track to U.S. Citizenship apply. Please
                          contact us if you believe that you might qualify for
                          this benefit.
                        </li>
                      </ul>
                      <li>
                        Have been physically present in the U.S. for at least 30
                        months out of the previous five years (for spouse of a
                        U.S. Citizen, he or she, in many cases, needs to show 18
                        months physical presence in the U.S. out of the previous
                        three years):
                      </li>
                      <ul className="list-disc xl:ml-8 ml-2 space-y-2 font-medium">
                        <li>
                          Continuity of Residence: if the person is absent from
                          the U.S. for more than six months but less than one
                          year, the absence may break the continuity of
                          residence for the purpose of naturalization. The
                          applicant may overcome the presumption of abandonment
                          of residence by showing that he or she intends to
                          maintain his or her residence during such period;
                        </li>
                        <li>
                          Employees (and his or her accompanying family members)
                          of certain U.S. government agencies, U.S. companies
                          and certain international groups should file an
                          application to preserve residence for naturalization
                          purposes if he or she is going to be absent from the
                          U.S. for more than one year.
                        </li>
                      </ul>
                      <li>
                        Have resided within a state or district for at least
                        three months.
                      </li>
                      <li>
                        The naturalization process involves completing an
                        application, passing the Civics and English proficiency
                        test at the interview, and taking the oath of
                        allegiance. An applicant is exempt from taking the
                        English proficiency test and may take the Civics test in
                        his or her native language if the person is:
                      </li>
                      <ul className="list-disc xl:ml-8 ml-2 space-y-2 font-medium">
                        <li>
                          Age 50 or older at the time of filing for
                          naturalization and has lived as an LPR (green card
                          holder) in the U.S. for more than 20 years (the
                          “50/20” exception); OR
                        </li>
                        <li>
                          Age 55 or older at the time of filing for
                          naturalization and has lived as an LPR in the U.S. for
                          more than 15 years (commonly referred to as the
                          “55/15” exception).
                        </li>
                      </ul>
                    </ul>
                  </div>

                  <h2 className="pt-3">
                    If you are a Legal Permanent Resident and are considering
                    applying for U.S. Citizenship, please understand that any
                    criminal conviction/record, residency and tax issues could
                    lead to, not only a rejection of your application, but also
                    initiation of removal proceedings by the US Department of
                    Homeland Security. Should you have any concerns over your
                    N-400 application for citizenship, please{" "}
                    <a
                      href="mailto:info@mannamlaw.com"
                      className="underline text-blue-600"
                    >
                      contact us
                    </a>{" "}
                    so that we can discuss your options and help you overcome
                    the obstacles to U.S. Citizenship.
                  </h2>
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

export default Naturalization;
