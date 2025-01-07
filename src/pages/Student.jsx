import React from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import passport from "../assets/passport.png";
import document from "../assets/document.png";
import email from "../assets/email.png";
import { MdArrowRightAlt } from "react-icons/md";
const Student = () => {
  const values1 = [
    {
      icon: passport,
      Title: "EB-1A",
      description:
        "A K-1 visa allows a foreign fiancé(e) to enter the U.S. to marry a citizen.",
      link: "",
    },
    {
      icon: document,
      Title: "EB-1B",
      description:
        "The K-3 visa allows foreign spouses of U.S. citizens to enter the United States temporarily. ",
      link: "",
    },
    {
      icon: email,
      Title: "EB-2 National Interest Waiver",
      description:
        "The I-130 visa petition establishes a qualifying family relationship for U.S. permanent residency sponsorship.",
      link: "",
    },
  ];

  const values2 = [
    {
      icon: passport,
      Title: "F-1",
      description:
        "A K-1 visa allows a foreign fiancé(e) to enter the U.S. to marry a citizen.",
      link: "",
    },
    {
      icon: document,
      Title: "J-1",
      description:
        "The K-3 visa allows foreign spouses of U.S. citizens to enter the United States temporarily. ",
      link: "",
    },
  ];

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
                        Student & Scholars
                      </p>
                    </div>
                    <div>
                      <h1 className="lg:text-4xl lg:text-start text-center text-2xl text-headingColor font-bold lg:leading-snug">
                        Visa options for students & scholars
                      </h1>
                    </div>
                    <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal">
                      <p>
                        In today’s global age, the United States continues to
                        attract international students and scholars because of
                        the high quality of its education, research environment,
                        and support system. The millions of foreign students and
                        scholars, who have studied in the United States over the
                        years, constitute a remarkable reservoir of goodwill for
                        this country. The United States’ economy is better
                        served through educating international students in the
                        United States
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
                        src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="support_one"
                        // width="612"
                        // height="512"
                        className="rounded h-auto w-auto object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                    Visa Options for Students & Scholars
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="lg:list-disc list-none xl:ml-8 ml-4 space-y-2">
                      <li>
                        In today’s global age, the United States continues to
                        attract international students and scholars because of
                        the high quality of its education, research environment,
                        and support system. The millions of foreign students and
                        scholars, who have studied in the United States over the
                        years, constitute a remarkable reservoir of goodwill for
                        this country. The United States’ economy is better
                        served through educating international students in the
                        United States, and hiring them to fill positions in our
                        high-technology industries and research establishments.
                      </li>
                      <li>
                        International scholars constitute an equally important
                        resource. Research at the frontiers of science is
                        typically conducted by multinational teams. Therefore,
                        most Universities place high priority on attracting and
                        retaining foreign talent in Science and Engineering to
                        enhance their academic research strength.
                      </li>
                      <li>
                        Relocating to the U.S. to pursue further studies and
                        research opens up tremendous opportunities and
                        challenges to international students and scholars and
                        their families. Our staff at Mannam & Associates is here
                        to help smooth the transition by facilitating our
                        clients’ desire to continue their studies and research,
                        pursue employment and entrepreneurial opportunities, and
                        apply for legal permanent residence. Our specialty
                        involves the following:
                      </li>
                    </ul>
                  </div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                    {values1.map((value, index) => (
                      <div
                        key={index}
                        className="flex md:justify-start justify-center"
                      >
                        <div className="w-full bg-white border border-gray-200 rounded p-6">
                          <div className="space-y-3">
                            <div className="flex justify-center items-center">
                              <img
                                src={value.icon}
                                alt=""
                                className="w-20 h-20"
                              />
                            </div>

                            <div className="flex justify-center items-center">
                              <h1 className="text-2xl text-headingColor font-bold text-center">
                                {value.Title}
                              </h1>
                            </div>
                            <div className="flex justify-center  items-center text-gray-600 text-center">
                              <p>{value.description}</p>
                            </div>

                            <div className="px-6 flex justify-center">
                              <a
                                href="/our-practices"
                                className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 hover:-translate-y-1"
                              >
                                <span className="relative z-10 ">
                                  Know More
                                </span>
                                <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-2">
                    {values2.map((value, index) => (
                      <div
                        key={index}
                        className="flex md:justify-start justify-center"
                      >
                        <div className="w-full bg-white border border-gray-200 rounded p-6">
                          <div className="space-y-3">
                            <div className="flex justify-center items-center">
                              <img
                                src={value.icon}
                                alt=""
                                className="w-20 h-20"
                              />
                            </div>

                            <div className="flex justify-center items-center">
                              <h1 className="text-2xl text-headingColor font-bold text-center">
                                {value.Title}
                              </h1>
                            </div>
                            <div className="flex justify-center  items-center text-gray-600 text-center">
                              <p>{value.description}</p>
                            </div>

                            <div className="px-6 flex justify-center">
                              <a
                                href="/our-practices"
                                className="flex flex-row items-center text-mainColor hover:text-headingColor transition ease-in-out duration-500 hover:-translate-y-1"
                              >
                                <span className="relative z-10 ">
                                  Know More
                                </span>
                                <MdArrowRightAlt className="ml-1 mt-1 w-5 h-5 " />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div id="k1Visa" className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    F-1 Academic Students
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        Foreign students who desire to pursue full-time study in
                        the U.S. must apply for an F-1 nonimmigrant visa in
                        order to commence studies at colleges, universities,
                        private secondary schools, other academic institutions,
                        or language training programs in the United States.
                      </li>
                      <li className="font-medium lg:leading-normal">
                        A prospective student must first apply to and be
                        accepted by a school approved by the Student Exchange
                        and Visitors Program ("SEVP")
                      </li>
                      <li>
                        The list of SEVP-approved schools can be found at{" "}
                        <span className="underline text-mainColor">
                          http://www.ice.gov/doclib/sevis/pdf/ApprovedSchools.pdf
                        </span>
                      </li>
                      <li>
                        Once a student has been accepted by a SEVP-approved
                        school, the school will issue a Form I-20, generated by
                        the Student and Exchange Visitor Information System
                        ("SEVIS"). The student can apply for an F-1 visa at a
                        U.S. Consulate Office. At the visa interview, the
                        student must demonstrate that he or she: (1) will engage
                        in full-time studies at an academic program or a
                        language training program; (2) is proficient in English
                        language; (3) has sufficient funding to support his or
                        her stay in the U.S.; and (most importantly), (4)
                        maintains a foreign residence that he or she has no
                        intention to abandoning. Generally, the US consular
                        officer enjoys significant discretion in determining
                        whether the applicant is eligible for the F-1 visa.
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="k3visa" className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    F-1 Employment:
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        On-Campus: F-1 students may work on-campus without any
                        special permission from their school's International
                        Students & Scholars Office for no more than 20 hours per
                        week during the school year. During the summer and
                        vacation period, an F-1 student may work on-campus for
                        up to 40 hours per week.
                      </li>
                      <li className="font-medium lg:leading-normal">
                        Off-Campus:
                      </li>
                      <ul className="list-[upper-roman] xl:ml-8 ml-2 space-y-2">
                        <li>
                          F-1 Curricular Practical Training (CPT) allows an F-1
                          student to accept a paid, off-campus internship that
                          is an integral part of the degree curriculum. An
                          off-campus internship qualifies for CPT if (1) it is a
                          mandatory part of a course that a student is taking
                          for degree credit; OR (2) it is a non-credit
                          internship that the department requires all degree
                          candidates in the program to participate.
                        </li>
                        <li>
                          F-1 Optional Practical Training (OPT) applies to paid
                          employment opportunities directly related to an F-1
                          student’s field of studies. A maximum of 12 months of
                          OPT is available for each degree level pursued in the
                          U.S, and can be used on a pre-completion and/or
                          post-completion basis.
                        </li>
                        <li>
                          STEM OPT: Students in designated fields within
                          Science, Technology, Engineering, and Math (STEM) may
                          be eligible for 17 months of OPT in addition to the
                          regular 12-month OPT. To qualify for the additional 17
                          months of OPT extension, the F-1 student must:
                        </li>
                      </ul>
                      <li>
                        An F-1 student remains in a period of authorized stay
                        until the USCIS terminates his or her status, usually
                        upon being notified by the university and/or the program
                        at the completion of studies. The student and his/her
                        dependent family members then have up to 60 days grace
                        period to leave the U.S. or file for change of status to
                        another non-immigrant visa status.
                      </li>
                      <li>
                        Spouse and Children: Spouses and/or children under the
                        age of 21 who wish to accompany or join the principal
                        F-1 student are eligible for F-2 visa status. The F-2
                        spouse may not accept employment and may not study
                        full-time. The F-2 children are authorized to engage in
                        full time study if the study is in an elementary or
                        secondary school (kindergarten through twelfth grade).
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="I130" className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    J-1 Scholars
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        The J-1 visa is a non-immigrant visa. The purpose of the
                        program is "to provide foreign nationals with
                        opportunities to participate in educational and cultural
                        programs in the United States and return home to share
                        their experiences, and to encourage Americans to
                        participate in educational and cultural programs in
                        other countries." (22 CFR 514.1(b)). Participants in the
                        Exchange Visitor Program enter the U.S. on a J-1 visa.
                      </li>

                      <li className="font-medium">
                        TWO-YEAR HOME COUNTRY PHYSICAL PRESENCE REQUIREMENT
                      </li>
                      <li>
                        Under Section 212(e) of the Immigration and Nationality
                        Act, certain exchange visitors are subject to the
                        requirements to return to their “home” country and be
                        physically present there for two years. Otherwise, the
                        J-1 visa holder must obtain a waiver from the U.S.
                        Department of State before being eligible to apply for H
                        status (temporary worker and immediate family), L status
                        (intra-company transferee and immediate family) or
                        immigrant status (permanent resident or green card
                        holder).
                      </li>
                      <li>
                        Information on J-1 waiver is available at{" "}
                        <span className="text-mainColor underline">
                          https://j1visawaiverrecommendation.state.gov/
                        </span>
                      </li>
                      <li>
                        A J-1 Scholar remains in a period of authorized stay
                        until the USCIS terminates his or her status, usually
                        upon being notified by the university and/or the program
                        at the completion of the exchange program. The scholar
                        and his/her dependent family members then have up to 30
                        days grace period to leave the U.S. or file for change
                        of status to another non-immigrant visa status (only
                        after the waiver for two-year home country residence
                        requirement has been obtained).
                      </li>
                      <li>
                        Spouse and Children: Spouses and/or children under the
                        age of 21 who wish to accompany or join the principal
                        exchange visitor (J) visa holder are eligible for a J-2
                        visa. They may apply for work authorization with US
                        Department of Homeland Security in order to accept
                        employment. They may also study in the U.S. during the
                        Principal J-1 visa holder’s stay in the U.S. without
                        having to apply for a student (F-1) visa or change to
                        F-1 status.
                      </li>
                    </ul>
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

export default Student;
