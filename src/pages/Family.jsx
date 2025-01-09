import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import family from "../assets/Family.jpg";
import passport from "../assets/passport.png";
import document from "../assets/document.png";
import email from "../assets/email.png";
import { MdArrowRightAlt } from "react-icons/md";

const Family = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const values1 = [
    {
      icon: passport,
      Title: "K-1 Visa",
      description:
        "A K-1 visa allows a foreign fiancé(e) to enter the U.S. to marry a citizen.",
      link: "",
    },
    {
      icon: document,
      Title: "K-3 Visa",
      description:
        "The K-3 visa allows foreign spouses of U.S. citizens to enter the United States temporarily. ",
      link: "",
    },
    {
      icon: email,
      Title: "I-130",
      description:
        "The I-130 visa petition establishes a qualifying family relationship for U.S. permanent residency sponsorship.",
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
                        Family Based Visas
                      </p>
                    </div>
                    <div>
                      <h1 className="lg:text-4xl lg:text-start text-center text-2xl text-headingColor font-bold lg:leading-snug">
                        Visa options for spouse and family members
                      </h1>
                    </div>
                    <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal">
                      <p>
                        One of the most rewarding parts of our practice involves
                        reuniting families who are separated across the globe,
                        as well as obtaining permanent residence status for
                        spouses and children of U.S. citizens. In many cases,
                        visa applications by your fiancé, spouse, parent or
                        sibling at a U.S. Consular Posts are complicated by
                        previous visa denials, refusals of admission at the
                        border, or other potential inadmissibility issues. At
                        Mannam & Associates, we specialize in devising the best
                        strategies to address these obstacles.
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
                        src={family}
                        alt="support_one"
                        // width="612"
                        // height="512"
                        className="rounded h-auto w-auto object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src={family}
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
                    Visa Options for Family Members
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="lg:list-disc list-none xl:ml-8 ml-2 space-y-2">
                      <li>
                        One of the most rewarding parts of our practice involves
                        reuniting families who are separated across the globe,
                        as well as obtaining permanent residence status for
                        spouses and children of U.S. citizens. In many cases,
                        visa applications by your fiancé, spouse, parent or
                        sibling at a U.S. Consular Posts are complicated by
                        previous visa denials, refusals of admission at the
                        border, or other potential inadmissibility issues. At
                        Mannam & Associates, we specialize in devising the best
                        strategies to address these obstacles to bringing your
                        family together and to avoid unnecessary separation
                        caused by administrative delays.
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
                </div>

                <div id="k1Visa" className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    K-1 Visa
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        A U.S. citizen who wants to bring his or her foreign
                        fiancé(e) to get married and live in the U.S. must file
                        a Petition for Alien Fiancé(e) with the United States
                        Citizenship & Immigration Services.
                      </li>
                      <li className="font-medium lg:leading-normal">
                        To qualify for a K-1 visa, the engaged couple must meet
                        the following conditions:
                      </li>
                      <ul className="list-[upper-roman] xl:ml-8 ml-2 space-y-2">
                        <li>One party is a U.S. citizen;</li>
                        <li>
                          Both parties are legally free to marry (neither party
                          is currently married);
                        </li>
                        <li>In general, both parties have met in person;</li>
                        <li>
                          The marriage will take place within 90 days of the
                          fiancé(e) entering the United States on the fiancé(e)
                          visa;
                        </li>
                        <li>
                          The foreign fiancé(e) has NOT been convicted of a
                          crime and does not have a history of
                          detentions/removal/deportations with the Department of
                          Homeland Security, that would render him or her
                          inadmissible to the U.S. (otherwise, the petitioner
                          must apply for a waiver);
                        </li>
                        <li>
                          The U.S. Citizen has NOT filed two or more K-1
                          fiance(e) petitions in the past, or has NOT had a K-1
                          Fiancé(e) petition approved within the past two years.
                          Otherwise, the U.S. Citizen must apply for a waiver.
                        </li>
                      </ul>
                      <li>
                        The U.S. citizen must first file the application with
                        the USCIS office that serves the area where he or she
                        lives. Unmarried children of the foreign fiancé(e) under
                        the age of 21 may receive a derivative K-2 visa from the
                        fiancé(e) visa petition. Their names should be included
                        in the petition.
                      </li>
                      <li>
                        After the USCIS approves the petition, it sends the
                        petition to the National Visa Center for processing. The
                        National Visa Center will be charged with forwarding the
                        petition to the U.S. embassy or consulate where the
                        Alien fiancé(e) will apply for the K-1 visa.
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="k3visa" className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    K-3 Visa
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        A K-3 Spousal Visa allows the foreign spouse of a U.S.
                        citizen to enter the United States on a temporary visa,
                        while awaiting processing of his/her I-130 Immediate
                        Relative Petition and subsequent lawful permanent
                        residency. Unmarried children under 21 are eligible for
                        derivative K-4 visas through their parents’ K-3 visa
                        petition.
                      </li>
                      <li className="font-medium lg:leading-normal">
                        The U.S. citizen must file an immigrant petition of Form
                        I-130 with the USCIS office. Upon receipt of the I-797
                        Receipt Notice, the U.S. citizen may file the K-3 visa
                        petition with the USCIS.
                      </li>
                      <li>
                        <span className="underline text-headingColor">
                          Important Notice:
                        </span>{" "}
                        Effective February 1st, 2010, when both the K-3 petition
                        and the I-130 petition have been approved concurrently,
                        the nonimmigrant K-3 visa will be administratively
                        closed if the NVC receives both petitions at the same
                        time. The NVC will proceed to process only the I-130
                        petition. If the NVC does not receive the I-130 petition
                        and K-3 petition at the same time, then it will process
                        the K-3 visa petition by contacting the U.S. Consulate
                        with jurisdiction over the case.
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="I130" className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    I-130:Immigration through a U.S. Citizen Sponsor:
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        Immediate Relatives: Immediate Relatives are generally
                        divided into three categories: spouses, unmarried
                        children under 21, and parents of USCs.
                      </li>
                      <li>
                        Preference Categories: A person is eligible to apply for
                        a Green Card through a U.S. Citizen and/or Legal
                        Permanent Resident relative, if he or she falls under
                        one the following four preference categories:
                      </li>

                      <ul className="list-[upper-roman] xl:ml-8 ml-2 space-y-2">
                        <li>
                          <span className="underline text-headingColor font-medium">
                            First:{" "}
                          </span>{" "}
                          Unmarried Sons and Daughters of Citizens (21 years of
                          age or older)
                        </li>
                        <li>
                          <span className="underline text-headingColor font-medium">
                            Second:{" "}
                          </span>{" "}
                          Spouses and Children, and Unmarried Sons and Daughters
                          of Permanent Residents:
                        </li>
                        <li>
                          <span className="underline text-headingColor font-medium">
                            Third:{" "}
                          </span>{" "}
                          Married Sons and Daughters of Citizens
                        </li>
                        <li>
                          <span className="underline text-headingColor font-medium">
                            Fourth:{" "}
                          </span>{" "}
                          Brothers and Sisters of Adult Citizen
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    I-130, Consular Processing and AOS:
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        {" "}
                        Immediate relatives of U.S. Citizens are generally
                        referred as the “VIP members” in the process of applying
                        for legal permanent residence (LPR). There is no
                        numerical quota restriction on how many foreign
                        nationals can get Green Cards as immediate relatives of
                        U.S. Citizens.
                      </li>
                      <li>
                        The process for an I-130 petition is generally two-fold
                        and depends on the physical location of the immediate
                        relative(s).
                      </li>
                      <li>
                        Step One: Every petition begins with the U.S. citizen
                        filing an I-130 petition with USCIS.
                      </li>
                      <li>
                        {" "}
                        Step Two:The second step of the process depends on the
                        foreign national’s physical location. If the foreign
                        national had been legally admitted to the U.S. as
                        evidenced by the I-94 issued at the Port of Entry, he or
                        she may concurrently file an I-485 Petition to adjust
                        his or her status to that of LPR.
                      </li>
                      <li>
                        {" "}
                        If the foreign national is outside the U.S., the U.S.
                        Citizen must indicate that information on the Form I-130
                        and request the USCIS notify a U.S. Consulate in the
                        country where his immediate relative lives. Once the
                        immigration petition is approved, the National Visa
                        Center of the U.S. State Department will request further
                        documentation from the foreign national. After the
                        documents are submitted, the foreign national goes to
                        the U.S. Consulate overseas to apply for an immigrant
                        visa. On the day that the foreign national enters the
                        United States on an immigrant visa, he or she becomes a
                        legal permanent resident
                      </li>
                      <li>
                        {" "}
                        Other qualifying family members of a U.S. Citizen listed
                        under the 1st, 3rd and 4th preference categories are
                        also eligible to immigrate to the U.S. Their immigrant
                        processes begin when the U.S. citizen files an I-130
                        petition with the USCIS. However, unlike the immediate
                        relatives, they are put on the “slower lane” as they are
                        subject to numerical limitations of immigrant visas
                        available to these family-based immigration categories
                        each year. The higher the preference, the faster these
                        qualifying family members are qualified to adjust their
                        status in the U.S. or apply for an immigrant visa at a
                        U.S. Consular Office. During the wait time, the
                        qualifying family members of U.S. Citizen must maintain
                        a non-immigrant status or stay overseas. Once the
                        immigration petition is approved and an immigrant visa
                        becomes current, they will be accorded legal permanent
                        resident status.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    Conditional Legal Permanent Resident Status:
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        {" "}
                        Most alien spouses of U.S. Citizen will be initially
                        accorded “Conditional” Legal Permanent Resident Status.
                        This conditional status is imposed if the alien spouse
                        has been married to the U.S. Citizen for less than two
                        years when they 1) enter the U.S. on an immigrant visa,
                        or 2) adjust their status within the U.S. to LPR status.
                        Conditional status is also attached to the alien
                        spouse’s children if they derive their LPR status
                        through their parent’s marriage to a U.S. Citizen.
                      </li>
                      <li>
                        Within 90 days before the second Anniversary of the date
                        the alien spouse obtained LPR status, the alien spouse
                        and his or her U.S. Citizen spouse must file a “Joint
                        Petition” to have the condition removed. Upon the USCIS’
                        approval, the alien spouse (and his/her children) will
                        be accorded unconditional LPR status. If the marriage
                        has ended in either divorce or annulment, the joint
                        petition requirement can be waived as long as the
                        conditional resident demonstrates that the marriage was
                        entered in good faith.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    Immigration through a Legal Permanent Resident Sponsor:
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        {" "}
                        Legal Permanent Residents may petition for his or her
                        alien spouse and unmarried children under the age of 21,
                        through filing a Form I-130 Petition with the USCIS. As
                        spouses and minor children of LPR are listed as the 2nd
                        Preference Category, they must also wait for the
                        immigrant visa number to become current before they may
                        pursue legal permanent residence. If the LPR becomes a
                        naturalized U.S. citizen before the immigrant visa for
                        the 2nd Preference Category is available, the I-130
                        petitioner may file to upgrade the petition to the
                        category of immediate relative of a U.S. Citizen and
                        expedite the process for his immediate family.
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

export default Family;
