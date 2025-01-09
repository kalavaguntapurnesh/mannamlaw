import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import investor from "../assets/Investor.jpg";
import passport from "../assets/passport.png";
import document from "../assets/document.png";
import email from "../assets/email.png";
import { MdArrowRightAlt } from "react-icons/md";

const Investor = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const values1 = [
    {
      icon: passport,
      Title: "E-1 Treaty Trader",
      description:
        "A K-1 visa allows a foreign fiancé(e) to enter the U.S. to marry a citizen.",
      link: "",
    },
    {
      icon: document,
      Title: "E-2 Treaty Trader",
      description:
        "The K-3 visa allows foreign spouses of U.S. citizens to enter the United States temporarily. ",
      link: "",
    },
    {
      icon: email,
      Title: "L-1A",
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
                        Investor Based Visas
                      </p>
                    </div>
                    <div>
                      <h1 className="lg:text-4xl lg:text-start text-center text-2xl text-headingColor font-bold lg:leading-snug">
                        Visa options for business people or entrepreneurs
                      </h1>
                    </div>
                    <div className="lg:text-start text-base text-center text-gray-600 lg:leading-normal">
                      <p>
                        We understand the United States Government’s enthusiasm
                        to attract immigrant investors and entrepreneurs to
                        direct and manage businesses in furtherance of economic
                        development and job creation. We have extensive
                        experience with assisting nonimmigrant investors with
                        applying for E visas (treaty trader and investor) or
                        L-1(intra-company transferee) visas, and guiding
                        immigrant investors through the EB-5 program for legal
                        permanent residence.
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
                        src={investor}
                        alt="support_one"
                        // width="612"
                        // height="512"
                        className="rounded h-auto w-auto object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src={investor}
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
                    Visa Options for Entrepreneurs:
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="lg:list-disc list-none xl:ml-8 ml-4 space-y-2">
                      <li>
                        We understand the United States Government’s enthusiasm
                        to attract immigrant investors and entrepreneurs to
                        direct and manage businesses in furtherance of economic
                        development and job creation. We have extensive
                        experience with assisting nonimmigrant investors with
                        applying for E visas (treaty trader and investor) or
                        L-1(intra-company transferee) visas, and guiding
                        immigrant investors through the EB-5 program for legal
                        permanent residence. Our specialty lies in securing
                        immigration benefits for executives, managers and
                        essential workers of small start-up companies in various
                        fields, such as Jewelry Stores, Mobile Services, IT
                        Development Companies, etc.
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
                    E-1 Treaty Trader
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        The E-1 Treaty Trader Visa allows a business owner or
                        essential employee to enter the United States,
                        "....solely to engage in trade of a substantial nature
                        principally between the United States and the
                        applicant's country of nationality. The trade involved
                        must be an international exchange of goods or services
                        between the U.S. and a treaty country..."
                      </li>
                      <li className="font-medium lg:leading-normal">
                        To qualify for E-1 Treaty Trader visa:
                      </li>
                      <ul className="list-[upper-roman] xl:ml-8 ml-2 space-y-2">
                        <li>
                          The applicant must be a national of a treaty country;
                        </li>
                        <li>
                          The trading firm must be at least 50% owned and
                          controlled by a foreign corporation (or individual) of
                          the same treaty country as the E-1 trader applicant;
                        </li>
                        <li>
                          The international trade must be "substantial" in the
                          sense that there is a sizable and continuing volume of
                          trade;
                        </li>
                        <li>
                          The trade must be principally between the U.S. and the
                          treaty country, which is defined to mean that more
                          than 50 percent of the international trade involved
                          must be between the U.S. and the country of the
                          applicant's nationality;
                        </li>
                        <li>
                          Trade means the international exchange of goods,
                          services, and technology. Title of the trade items
                          must pass from one party to the other; and
                        </li>
                        <li>
                          The applicant must be employed in a supervisory or
                          executive capacity, or possess highly specialized
                          skills essential to the efficient operation of the
                          firm. Ordinary skilled or unskilled workers do not
                          qualify.
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>

                <div id="k3visa" className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    E-2 Treaty Investor
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        E-2 Treaty Investor visa is a non-immigrant visa that
                        allows foreign investors to invest in the U.S. by
                        establishing a new enterprise, or purchasing an existing
                        business. To qualify for this visa, the foreign
                        entrepreneur must have invested, or plans to invest in
                        the near future, a substantial amount of capital within
                        the U.S.
                      </li>
                      <li className="font-medium lg:leading-normal">
                        In order to be qualified for the E-2 visa, you must:
                      </li>
                      <ul className="list-[upper-roman] xl:ml-8 ml-2 space-y-2">
                        <li>
                          Be from a country with a treaty agreement with U.S.;
                        </li>
                        <li>
                          Invest in a U.S. company that is at least 50% owned
                          and controlled by a foreign corporation (or
                          individual) of the same treaty country as the E-2
                          investor applicant;
                        </li>
                        <li>
                          Provide substantial investment that is sufficient to
                          ensure the successful operation of the enterprise.
                          *The percentage of investment for a low-cost business
                          enterprise must be higher than the percentage of
                          investment in a high-cost enterprise;
                        </li>
                        <li>
                          Have sufficient funds or assets to be irrevocably
                          committed (i.e. "at risk") to the investment;
                          *Speculative or idle investment does not qualify.
                          Uncommitted funds in a bank account or similar
                          security are not considered an investment. Loans
                          secured with assets of the investment enterprise are
                          not allowed.
                        </li>
                        <li>
                          Invest in an enterprise that is more than marginal,
                          i.e. must be more than sufficient to earn a living for
                          the investor and his/her family;
                        </li>
                        <li>
                          Be planning to establish an active business
                          enterprise;
                        </li>
                        <li>
                          Perform his or her duties in a managerial or
                          supervisory capacity;
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>

                <div id="I130" className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    Duration of Stay for E-1 and E-2 Visa Holders:
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        An E visa is a non-immigrant visa and does not lead to
                        either a "green card" or U.S. Citizenship. If the
                        investor is present in the U.S. on another valid
                        nonimmigrant visa status (such as B-1), he or she may
                        file with the USCIS to change the status to that of E
                        status. The E-1/E-2 non-immigrant status is valid for
                        periods of 2 years with unlimited number of extensions
                        to continue the business, which can be filed with USCIS.
                        If the investor is outside the U.S. and/or desires to
                        travel overseas to develop and promote the business, he
                        or she must apply for an E-1/E-2 visa at a U.S.
                        Consulate Office with appropriate jurisdiction. E visas
                        can be issued for up to five years. It is not unusual,
                        however, for the U.S. Consulate Offices to issue an
                        E-1/E-2 visa for two years at the initial application.
                        On renewal, the visas are generally granted for five
                        years, as long as the U.S. Consulate Officer is
                        satisfied that the business continues to meet the
                        E-1/E-2 requirements.
                      </li>

                      <li>
                        There is no specific period of time that an E-2 treaty
                        investor and his/her family may remain in the U.S., as
                        long as there is an ultimate intention to depart.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    Spouse & Children:
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        {" "}
                        The Principal E-1/E-2 holder’s Spouse and children under
                        21, regardless of nationality, may remain in the U.S.
                        under E-1/E-2 Dependent status. They may apply for and
                        obtain work authorization (EAD) from the USCIS to pursue
                        other employment opportunities.
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="I130" className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    L-1 Intra-Company Transferee
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        The intra-company transfer provision is a long-standing
                        visa category designed to allow international firms,
                        whether U.S. or foreign, with operations in the United
                        States and abroad to exchange personnel on a temporary
                        basis. The original impetus for the program was to allow
                        for the mobility of management personnel, but the
                        program quickly expanded to include personnel with
                        "specialized knowledge" of the company's operations. In
                        order to qualify to file an L-1 visa petition, the U.S.
                        employer must be a branch, subsidiary, parent, or
                        affiliate of a foreign company and the foreign national
                        employee must have worked for such foreign company for
                        at least one year prior to such employee’s arrival in
                        the United States.
                      </li>

                      <li>
                        L-1A visas are designed for intra-company transferees in
                        managerial or executive positions. The L-1B category
                        covers specialized knowledge personnel who possess an
                        advanced level of expertise and proprietary knowledge of
                        the company's products, services, research activities,
                        in-house procedures and processes, management or other
                        interests of the company that are not readily available
                        in the U.S. labor market. An individual can remain in
                        the United States for a maximum of seven (7) consecutive
                        years under the L-1A visa status or five (5) consecutive
                        years under the L-1B visa status.
                      </li>

                      <li>Managerial Capacity:</li>
                      <ul className="list-[upper-roman] xl:ml-8 ml-2 space-y-2">
                        <li>
                          Manages the organization, or a department,
                          subdivision, function, or component of the
                          organization;
                        </li>
                        <li>
                          Supervises and controls the work of other supervisory,
                          professional, or managerial employees, or manages an
                          essential function within the organization, or a
                          department or subdivision of the organization;
                        </li>
                        <li>
                          Has authority to hire and fire or perform other
                          personnel actions; and
                        </li>
                        <li>
                          Exercises discretion over the day-to-day operations of
                          the activity.
                        </li>
                      </ul>

                      <li>Executive Capacity:</li>
                      <ul className="list-[upper-roman] xl:ml-8 ml-2 space-y-2">
                        <li>
                          Directs the management of the organization or a major
                          component or function of the organization;
                        </li>
                        <li>
                          Sets the goals and policies of the organization,
                          component, or function;
                        </li>
                        <li>
                          Exercises wide latitude in discretionary
                          decision-making; and
                        </li>
                        <li>
                          Receives only general supervision or direction from
                          higher level executives, the board of directors, or
                          stockholders of the organization.
                        </li>
                      </ul>

                      <li>Specialized Knowledge:</li>
                      <ul className="list-[upper-roman] xl:ml-8 ml-2 space-y-2">
                        <li>
                          Possesses knowledge that is valuable to the employer's
                          competitiveness in the market place;
                        </li>
                        <li>
                          Is uniquely qualified to contribute to the U.S.
                          employer's knowledge of foreign operating conditions;
                        </li>
                        <li>
                          Has been utilized as a key employee abroad and has
                          been given significant assignments which have enhanced
                          the employer's productivity, competitiveness, image or
                          financial position;
                        </li>
                        <li>
                          Possesses knowledge which can be gained only through
                          extensive prior experience with that employer.
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>

                <div id="I130" className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    "Frequent User Pass"——Blanket L-1 Petition
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        An L-1 Blanket Petition is an expedited program for
                        large multi-national corporations that are frequent
                        users of the L-1 visa program. The regular L-1 process
                        is a two-step process where the employer first files and
                        obtains USCIS approval for each intra-company transferee
                        before the employee schedules a consulate visa
                        interview. Under the procedure for the Blanket L-1
                        program, an employer only files for one approval form
                        from the USCIS to transfer an unspecified number of
                        managerial/executive employees and professionals with
                        specialized knowledge. After the approval, each time the
                        employer seeks to transfer its qualifying employees
                        through the Blanket L-1 procedure, the employees can
                        immediately schedule a visa appointment at the U.S.
                        Embassy/Consulate Office and present the L-1 Blanket
                        Approval Notice with the visa application. This greatly
                        reduces the processing time because it removes the need
                        for the USCIS to adjudicate the individual L-1 petition.
                      </li>

                      <li>
                        L-1 Blanket status is available to a U.S. company and
                        its related foreign entity if the U.S. employer meets
                        the following qualifications: (1) it has a U.S. office
                        and has been doing business in the U.S. for at least 1
                        year; (2) it has 3 or more domestic and foreign
                        branches, subsidiaries or affiliates; and (3) it has
                        combined USD annual sales of $25 million, a U.S.
                        workforce of 1,000 employees or at least 10 L approved
                        petitions during the past year.
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="I130" className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    Green Card Eligibility
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        Individuals with an L-1 visa may also be eligible for a
                        green card through employment. If an individual served
                        in a managerial or executive capacity for a qualifying
                        foreign employer for at least one year and serves in a
                        managerial or executive capacity in L-1A status in the
                        United States, such individual will most likely qualify
                        for an immigrant visa. This is one of the fastest ways
                        in which a foreign national can attain U.S. permanent
                        residency.
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="I130" className="space-y-4 pt-8">
                  <h3 className="text-2xl font-bold text-start underline  text-headingColor">
                    H-1B v. L-1:
                  </h3>

                  <div className="space-y-2 xl:text-start text-center text-gray-800 lg:leading-normal">
                    <ul className="list-decimal xl:ml-8 ml-4 space-y-2">
                      <li>
                        H-1B visas are an obvious choice for bringing in foreign
                        talent to address labor shortages in the fields of IT
                        Consulting, Healthcare, Engineering, etc. The L-1 visas
                        are available to companies that have offshore
                        subsidiaries from which to bring qualified foreign
                        employees to the U.S. Both categories allow for the
                        individual visa holders to hold "dual intent" and pursue
                        legal permanent residency in the U.S. while under
                        H-1B/L-1 visa status.
                      </li>
                      <li>
                        While the L-1 category is very similar to H-1B, there
                        are distinct benefits in utilizing the L-1 visa to
                        promote talent mobility within international companies.
                        Through strategically placing their foreign workers in a
                        suitable visa category, employers can achieve maximum
                        business impact and competitive advantage in the global
                        marketplace. For further details, please contact us.
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

export default Investor;
