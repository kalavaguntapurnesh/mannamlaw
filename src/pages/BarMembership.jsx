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
                    <h1 className="text-headingColor text-2xl font-bold pb-1 ">
                      American Association Lawyers Association
                    </h1>
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
                    <h1 className="text-headingColor text-2xl font-bold pb-1 pt-4">
                      Atlanta Bar Association
                    </h1>
                    <p className="text-sideHeading">
                      The Atlanta Bar Association is a respected and storied
                      institution whose members connect from throughout the
                      metropolitan Atlanta area.
                    </p>
                    <p className="text-sideHeading">
                      It serves its members with innovative programs and
                      services that stay in step with the ever changing legal
                      landscape. Our membership includes lawyers, law school
                      students, patent agents and legal assistants, among
                      others, and are as diverse and varied as the activities
                      and programs we provide
                    </p>
                    <p className="text-sideHeading">
                      Our voluntary association is as diverse as the activities
                      and programs we offer to our members which promote
                      professional development, foster relationships, and
                      further community engagement and service.
                    </p>

                    <h1 className="text-headingColor text-2xl font-bold pb-1 pt-4">
                      The State Bar of Georgia
                    </h1>

                    <p className="text-sideHeading">
                      The State Bar of Georgia exists to foster among the
                      members of the Bar of this state the principles of duty
                      and service to the public; to improve the administration
                      of justice; and to advance the science of law. All persons
                      authorized to practice law in this state are required to
                      be members.
                    </p>
                    <p className="text-sideHeading">
                      The Bar has strict codes of ethics and discipline that are
                      enforced by the Supreme Court of Georgia through the State
                      Bar’s Office of the General Counsel. Membership license
                      fees and other contributions help the Bar provide programs
                      that are mutually beneficial to its members and the
                      general public.
                    </p>

                    <h1 className="text-headingColor text-2xl font-bold pb-1 pt-4">
                      The State Bar of Tennessee
                    </h1>
                    <p className="text-sideHeading">
                      The State Bar of Tennessee is a professional organization
                      responsible for overseeing the practice of law and
                      ensuring ethical standards within the state of Tennessee.
                      It supports legal professionals by providing resources for
                      education, advocacy, and career development while
                      safeguarding the public&apos;s interest in legal matters.
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
