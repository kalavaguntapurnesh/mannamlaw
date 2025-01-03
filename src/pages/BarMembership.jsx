import React from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import bar from "../assets/Bar.jpg";

const BarMembership = () => {
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
                  Bar membership
                </h1>

                <h1 className="text-4xl lg:hidden block uppercase font-semibold text-center px-4 py-2 rounded">
                  bar membership
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
                    {/* <h1 className="text-headingColor text-2xl font-bold pb-4">
                      Terms and Conditions of Mannam & Associates
                    </h1> */}
                    <p className="text-sideHeading">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          const userConfirmed = window.confirm(
                            "You will be navigated to the American Immigration Lawyers Association website. Do you wish to continue?"
                          );
                          if (userConfirmed) {
                            window.open("https://www.aila.org/", "_blank");
                          }
                        }}
                        className="underline text-blue-600"
                      >
                        The American Immigration Lawyers Association (AILA)
                      </a>{" "}
                      is the National Bar Association of Attorneys and Law
                      professors who practice and teach US Immigration Law.
                      Founded in 1946, AILA is a nonpartisan, not-for-profit,
                      voluntary bar association that provides continuing legal
                      education, professional services, information, and
                      expertise to more than 16,000 members through our 39
                      chapters and 50+ national committees.
                    </p>
                    <p className="text-sideHeading">
                      AILA was established to promote justice, advocate for fair
                      and reasonable immigration law and policy, advance the
                      quality of immigration and nationality law and practice,
                      and enhance the professional development of its members.
                    </p>
                    <p className="text-sideHeading">
                      AILA Member attorneys represent U.S. families seeking
                      permanent residence for close family members, as well as
                      U.S. businesses seeking talent from the global
                      marketplace. AILA Members also represent foreign students,
                      entertainers, athletes, and asylum seekers, often on a pro
                      bono basis.
                    </p>
                    <p className="text-sideHeading">
                      Mannam & Associates Attorneys{" "}
                      <a href="/experts" className="underline text-blue-600">
                        Ravi Mannam
                      </a>{" "}
                      and{" "}
                      <a href="/experts" className="underline text-blue-600">
                        Hemant Ravichandran
                      </a>{" "}
                      are Members of AILA.
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

export default BarMembership;
