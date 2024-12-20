import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SecNavbar from "../components/SecNavbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

// Data Mapping based on card titles
const dataMapping = {
  "H-1B Professionals": {
    headings: [
      "H-1B Petitions Subject to Annual Quota (Cap-Subject H-1Bs)",
      "H-1B Petition Exempted from Annual Quota (Cap-Exempt H-1Bs)",
      "H-1B Petition Not Subject to Annual Quota",
      "Period of Stay",
      "Filing Fees",
      "Alternatives when the H-1B Annual Quotas have been filed",
      "IT Consulting Industry",
      "H-1B Dependency Status & Non-Displacement of U.S. Worker Requirements",
      "Public School System",
    ],
    content: [
      {
        title: "H-1B Petitions Subject to Annual Quota (Cap-Subject H-1Bs)",
        description:
          "Under the current law, the annual H-1B quota (H-1B Cap) is 65,000 for each fiscal year beginning October 1.  Under the L1 Visa and H1B Visa Reform Act of 2004, Congress added an additional 20,000 H-1B visas for graduates of advanced degree programs in the U.S. Out of the 65,000 quota, 5,400 visas are set aside for citizens of Singapore and 1,400 H-1B visas for citizens of Chile.  The H-1B cap applies to new petitions filed for foreign workers that have not been counted against the H-1B Cap within the past six years.  The earliest start date for these “new” H-1Bs is October 1 of each year, with the filing period commencing as early as April 1 of the same year.",
        points: [
          // "Minimum education requirement: Bachelor's degree.",
          // "Employer sponsorship is mandatory.",
          // "The job must require specialized knowledge.",
        ],
      },
      {
        title: "H-1B Petition Exempted from Annual Quota (Cap-Exempt H-1Bs)",
        description:
          "H-1B petitions are exempt from the quota if they are filed by a college or university, a related or affiliated non-profit entity, a non-profit research organization, or governmental research organization.  Cap-Exempt H-1B petitions are generally filed on behalf of researchers by non-profit organizations as well as public and private universities.  Public School systems with critical teacher shortages also utilize this visa option to engage foreign workers.  They They must, however, demonstrate that they maintain certain affiliation with a University (for more details on obtaining an H-1B visa for a public school teacher, please click here).",
        points: [
          // "Educational certificates (degree, transcripts).",
          // "Offer letter from the sponsoring employer.",
          // "Passport and visa application forms.",
        ],
      },
      {
        title: "H-1B Petition Not Subject to Annual Quota",
        description:
          "Certain H-1B petitions are not subject to the 65,000 annual quota and allow foreign workers to start employment immediately upon approval.  These petitions include H-1B petitions amending previously approved conditions of the employment, H-1B petitions for Change of Employer or H-1B extension petitions for the same employer (unless he or she is changing employment from a cap-exempt employer to a non-exempt employer, i.e. switching employment from a non-profit or government institutional to a for-profit U.S. employer).",
        points: [
          // "Employer files Labor Condition Application (LCA).",
          // "H-1B petition submitted to USCIS.",
          // "If selected, attend visa interview at the U.S. Embassy.",
        ],
      },
      {
        title: "Period of Stay",
        description:
          "H-1B status is generally granted for three-year increments, for up to a total of six years.  However, under the American Competitiveness in the 21st Century Act (AC-21 Act), an H-1B worker’s period of stay may be extended in one-year increments if a pending Labor Certification or Form I-140 was filed on the worker's behalf more than 365 days prior to the end of the sixth year of the H status. Alternatively, an H-1B holder is eligible for extension of status in three-year increment after the six-year period if the foreign national is named as the beneficiary of an approved I-140, but cannot apply for adjustment of status because of country-specific limits.",
        points: [
          // "H-1B cap lottery opens every April.",
          // "Cap-exempt petitions can be filed year-round.",
          // "Visa validity: Maximum of 6 years.",
        ],
      },
      {
        title: "Filing Fees",
        description:
          "The filing fees for an H-1B petition consist of the following:",
        points: [
          "Form I-129 Application Fee: $320",
          "Fraud-Prevention Fee:$500 for New H-1B petitions and H-1B petitions for Change of Employer.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
      {
        title: "Alternatives when the H-1B Annual Quotas have been filed",
        description:
          "The demand for skilled foreign nationals has generally been so high and the quota so low that it has created problems for employers each year when the H-1B cap has been prematurely reached.  However, there are still many other temporary work, including TN visas, L-1 intra-company transferee visas, O-1 extraordinary ability worker visas, as well as the E treaty trader/treaty investor visas.",
        points: [
          // "H-1B cap lottery opens every April.",
          // "Cap-exempt petitions can be filed year-round.",
          // "Visa validity: Maximum of 6 years.",
        ],
      },
      {
        title: "IT Consulting Industry",
        description:
          "Since 2008, H-1B petitions filed through Information Technology firms have been receiving particularly intense scrutiny.  The USCIS appears to be on a mission to eradicate fraud through issuing overly burdensome Requests for Evidence and placing a heightened burden of proof on IT companies.  Immigration practitioners and petitioners in the IT Consulting Industry face increasingly taxing requests for additional documentation, from complete profiles of all IT employees’ names and educational background, a list of all H-1Bs filed with the USCIS, corporate tax returns, quarterly wage reports, W-2 Forms, work orders, client letters detailing the H-1B employee’s job duties and minimum requirements for the position, and images of the company’s business premises.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
      {
        title:
          "H-1B Dependency Status & Non-Displacement of U.S. Worker Requirements",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
      {
        title: "Public School System",
        description:
          "Across the country, public school systems face shortages of qualified teachers, particularly in high demand subjects, such as Mathematics, Science, ESL, Foreign Language and Special Education.  Many districts, both rural and urban, have turned to H-1B programs to recruit and engage qualified English-speaking teachers from abroad.  Today, one estimate suggests that as many as 10,000 foreign teachers are working in the United States.",
        points: [
          // "H-1B cap lottery opens every April.",
          // "Cap-exempt petitions can be filed year-round.",
          // "Visa validity: Maximum of 6 years.",
        ],
      },
    ],
  },
  "L-1 Intra-Company Transferees": {
    headings: [
      "L-1 Intra-Company Transferee",
      "Frequent User Pass——Blanket L-1 Petition",
      "Green Card Eligibility",
      "H-1B v. L-1",
    ],
    content: [
      {
        title: "L-1 Intra-Company Transferee",
        description:
          "The intra-company transfer provision is a long-standing visa category designed to allow international firms, whether U.S. or foreign, with operations in the United States and abroad to exchange personnel on a temporary basis.  The original impetus for the program was to allow for the mobility of management personnel, but the program quickly expanded to include personnel with specialized knowledge of the company's operations.  In order to qualify to file an L-1 visa petition, the U.S. employer must be a branch, subsidiary, parent, or affiliate of a foreign company and the foreign national employee must have worked for such foreign company for at least one year prior to such employee’s arrival in the United States. L-1A visas are designed for intra-company transferees in managerial or executive positions.  The L-1B category covers specialized knowledge personnel who possess an advanced level of expertise and proprietary knowledge of the company's products, services, research activities, in-house procedures and processes, management or other interests of the company that are not readily available in the U.S. labor market.  An individual can remain in the United States for a maximum of seven (7) consecutive years under the L-1A visa status or five (5) consecutive years under the L-1B visa status.",
        points: [
          // "Suitable for multinational companies.",
          // "Supports U.S. expansions.",
        ],
      },
      {
        title: "Frequent User Pass——Blanket L-1 Petition",
        description:
          "An L-1 Blanket Petition is an expedited program for large multi-national corporations that are frequent users of the L-1 visa program.  The regular L-1 process is a two-step process where the employer first files and obtains USCIS approval for each intra-company transferee before the employee schedules a consulate visa interview.  Under the procedure for the Blanket L-1 program, an employer only files for one approval form from the USCIS to transfer an unspecified number of managerial/executive employees and professionals with specialized knowledge.  After the approval, each time the employer seeks to transfer its qualifying employees through the Blanket L-1 procedure, the employees can immediately schedule a visa appointment at the U.S. Embassy/Consulate Office and present the L-1 Blanket Approval Notice with the visa application.  This greatly reduces the processing time because it removes the need for the USCIS to adjudicate the individual L-1 petition.",
        points: [
          "Employee must have worked abroad for the company for at least one year.",
          "Employee must hold an executive or managerial role.",
        ],
      },
      {
        title: "Green Card Eligibility",
        description:
          "Individuals with an L-1 visa may also be eligible for a green card through employment.  If an individual served in a managerial or executive capacity for a qualifying foreign employer for at least one year and serves in a managerial or executive capacity in L-1A status in the United States, such individual will most likely qualify for an immigrant visa.  This is one of the fastest ways in which a foreign national can attain U.S. permanent residency.",
        points: [
          // "Employee must have worked abroad for the company for at least one year.",
          // "Employee must hold an executive or managerial role.",
        ],
      },
      {
        title: "H-1B v. L-1",
        description:
          "H-1B visas are an obvious choice for bringing in foreign talent to address labor shortages in the fields of IT Consulting, Healthcare, Engineering, etc.  The L-1 visas are available to companies that have offshore subsidiaries from which to bring qualified foreign employees to the U.S. Both categories allow for the individual visa holders to hold `dual intent` and pursue legal permanent residency in the U.S. while under H-1B/L-1 visa status.",
        points: [
          "Employee must have worked abroad for the company for at least one year.",
          "Employee must hold an executive or managerial role.",
        ],
      },
    ],
  },

  "E1 - E2 - Treaty Traders/Investors": {
    headings: [
      "E-1 Treaty Trader",
      "E-2 Treaty Investor",
      "Duration of Stay for E-1 and E-2 Visa Holders",
      "Spouse & Children",
    ],
    content: [
      {
        title: "E-1 Treaty Trader",
        description:
          "The H-1B visa is available for specialty occupations that require at least a bachelor's degree.",
        points: [
          "Minimum education requirement: Bachelor's degree.",
          "Employer sponsorship is mandatory.",
          "The job must require specialized knowledge.",
        ],
      },
      {
        title: "E-2 Treaty Investor",
        description:
          "Applicants must prepare the following documents for the H-1B visa application.",
        points: [
          "Educational certificates (degree, transcripts).",
          "Offer letter from the sponsoring employer.",
          "Passport and visa application forms.",
        ],
      },
      {
        title: "Duration of Stay for E-1 and E-2 Visa Holders",
        description: "The H-1B visa application follows these key steps:",
        points: [
          "Employer files Labor Condition Application (LCA).",
          "H-1B petition submitted to USCIS.",
          "If selected, attend visa interview at the U.S. Embassy.",
        ],
      },
      {
        title: "Spouse & Children",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
    ],
  },

  "TN/NAFTA for Citizens of Canada & Mexico": {
    headings: ["TN Status", "Family Members of the TN Applicant"],
    content: [
      {
        title: "TN Status",
        description:
          "The H-1B visa is available for specialty occupations that require at least a bachelor's degree.",
        points: [
          "Minimum education requirement: Bachelor's degree.",
          "Employer sponsorship is mandatory.",
          "The job must require specialized knowledge.",
        ],
      },

      {
        title: "Family Members of the TN Applicant",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
    ],
  },

  "K-1": {
    headings: [
      "K Visas",
      "K-3 Visa",
      "I-130:Immigration through a U.S. Citizen Sponsor",
    ],
    content: [
      {
        title: "K Visas",
        description:
          "The H-1B visa is available for specialty occupations that require at least a bachelor's degree.",
        points: [
          "Minimum education requirement: Bachelor's degree.",
          "Employer sponsorship is mandatory.",
          "The job must require specialized knowledge.",
        ],
      },
      {
        title: "K-3 Visa",
        description:
          "Applicants must prepare the following documents for the H-1B visa application.",
        points: [
          "Educational certificates (degree, transcripts).",
          "Offer letter from the sponsoring employer.",
          "Passport and visa application forms.",
        ],
      },
      {
        title: "I-130:Immigration through a U.S. Citizen Sponsor",
        description: "The H-1B visa application follows these key steps:",
        points: [
          "Employer files Labor Condition Application (LCA).",
          "H-1B petition submitted to USCIS.",
          "If selected, attend visa interview at the U.S. Embassy.",
        ],
      },
    ],
  },

  "B-1": {
    headings: [
      "Eligibility Criteria",
      "Documents Required",
      "Process Overview",
      "Important Deadlines",
    ],
    content: [
      {
        title: "Eligibility Criteria",
        description:
          "The H-1B visa is available for specialty occupations that require at least a bachelor's degree.",
        points: [
          "Minimum education requirement: Bachelor's degree.",
          "Employer sponsorship is mandatory.",
          "The job must require specialized knowledge.",
        ],
      },
      {
        title: "Documents Required",
        description:
          "Applicants must prepare the following documents for the H-1B visa application.",
        points: [
          "Educational certificates (degree, transcripts).",
          "Offer letter from the sponsoring employer.",
          "Passport and visa application forms.",
        ],
      },
      {
        title: "Process Overview",
        description: "The H-1B visa application follows these key steps:",
        points: [
          "Employer files Labor Condition Application (LCA).",
          "H-1B petition submitted to USCIS.",
          "If selected, attend visa interview at the U.S. Embassy.",
        ],
      },
      {
        title: "Important Deadlines",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
    ],
  },

  "PERM : Labor Certification Process": {
    headings: [
      "Labor Certification",
      "Frequently Asked Questions by Employers",
      "I-140 PETITION",
    ],
    content: [
      {
        title: "Labor Certification",
        description:
          "The H-1B visa is available for specialty occupations that require at least a bachelor's degree.",
        points: [
          "Minimum education requirement: Bachelor's degree.",
          "Employer sponsorship is mandatory.",
          "The job must require specialized knowledge.",
        ],
      },

      {
        title: "Frequently Asked Questions by Employers",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
      {
        title: "I-140 PETITION",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
    ],
  },

  "EB-1 : Extraordinary Ability & Multinational Executives/Managers": {
    headings: [
      "EB-1 Priority Workers",
      "EB-1A (Alien of Extraordinary Ability)",
      "EB-1B (Outstanding Professors and Researchers",
      "EB-1C (Certain Multinational Executives and Managers)",
      "Green Card Application",
    ],
    content: [
      {
        title: "EB-1 Priority Workers",
        description:
          "The H-1B visa is available for specialty occupations that require at least a bachelor's degree.",
        points: [
          "Minimum education requirement: Bachelor's degree.",
          "Employer sponsorship is mandatory.",
          "The job must require specialized knowledge.",
        ],
      },

      {
        title: "EB-1A (Alien of Extraordinary Ability)",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
      {
        title: "EB-1B (Outstanding Professors and Researchers",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },

      {
        title: "EB-1C (Certain Multinational Executives and Managers)",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },

      {
        title: "Green Card Application",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
    ],
  },

  "EB-2 : Advanced Degrees / Exceptional Ability": {
    headings: [
      "EB-2 Professionals with Advanced Degrees or Exceptional Ability",
      "LABOR CERTIFICATION REQUIREMENTS",
      "EB-2 NATIONAL INTEREST WAIVER (NIW)",
      "I-140 Immigration Petition Process for EB-2",
      "Green Card Application",
    ],
    content: [
      {
        title:
          "EB-2 Professionals with Advanced Degrees or Exceptional Ability",
        description:
          "The H-1B visa is available for specialty occupations that require at least a bachelor's degree.",
        points: [
          "Minimum education requirement: Bachelor's degree.",
          "Employer sponsorship is mandatory.",
          "The job must require specialized knowledge.",
        ],
      },

      {
        title: "LABOR CERTIFICATION REQUIREMENTS",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
      {
        title: "EB-2 NATIONAL INTEREST WAIVER (NIW)",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
      {
        title: "I-140 Immigration Petition Process for EB-2",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
      {
        title: "Green Card Application",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
    ],
  },
  "EB-3 : Professional, Skilled Workers & Others": {
    headings: [
      "EB-3 Preference: Professional, Skilled Workers and Others",
      "Skilled workers",
      "Other workers",
      "Green Card Application",
    ],
    content: [
      {
        title: "EB-3 Preference: Professional, Skilled Workers and Others",
        description:
          "The H-1B visa is available for specialty occupations that require at least a bachelor's degree.",
        points: [
          "Minimum education requirement: Bachelor's degree.",
          "Employer sponsorship is mandatory.",
          "The job must require specialized knowledge.",
        ],
      },

      {
        title: "Skilled workers",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
      {
        title: "Other workers",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
      {
        title: "Green Card Application",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
    ],
  },
};

// const DetailsPage = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const [activeHeading, setActiveHeading] = useState(null);
//   const [selectedHeadingIndex, setSelectedHeadingIndex] = useState(0);
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     if (state?.hash) {
//       const element = document.querySelector(state.hash);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [state]);

//   if (!state?.card || !state?.topic) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p>No data found. Please go back.</p>
//         <button
//           onClick={() => navigate("/")}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   const { card, topic } = state;
//   const data = dataMapping[card.title];

//   if (!data) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p>Data for this card is not available.</p>
//         <button
//           onClick={() => navigate("/")}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   const scrollToSection = (index) => {
//     setActiveHeading(index); // Set active heading
//     const element = sectionRefs.current[index];
//     if (element) {
//       const headerOffset = 100;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition =
//         elementPosition + window.pageYOffset - headerOffset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   const { headings, content } = data;

//   return (
//     <>
//       <SecNavbar />
//       <div className="lg:pt-28 pt-24 select-none pb-12">
//         <div className="relative">
//           <div className="w-full">
//             <div className="w-full mx-auto max-w-[1400px] ">
//               <div className="space-y-4 p-4">
//                 <div className="flex items-center text-center justify-center ">
//                   <div className="h-4 w-1 bg-mainColor"></div>

//                   <p className="ml-2 lg:text-lg font-semibold text-mainColor">
//                     {topic}
//                   </p>
//                 </div>

//                 <div className="text-center mt-4">
//                   <h3 className="lg:text-4xl text-2xl font-bold text-headingColor">
//                     {card.title}
//                   </h3>
//                 </div>

//                 <div className="mx-auto max-w-[1200px] pt-2">
//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="w-full h-80 object-cover rounded mb-6"
//                   />
//                 </div>

//                 <div className="hidden lg:grid grid-cols-3 gap-8 pt-6">

//                   <div className="space-y-4 col-span-1 sticky top-28">
//                     {headings.map((heading, index) => (
//                       <div
//                         key={index}
//                         onClick={() => scrollToSection(index)}
//                         className={`py-3 px-4 rounded-lg cursor-pointer ${
//                           activeHeading === index
//                             ? "bg-blue-100 text-blue-600"
//                             : "bg-gray-200 text-gray-700"
//                         }`}
//                       >
//                         {heading}
//                       </div>
//                     ))}
//                   </div>

//                   <div className="col-span-2">
//                     {content.map((section, index) => (
//                       <div
//                         ref={(el) => (sectionRefs.current[index] = el)}
//                         key={index}
//                         className="mb-8"
//                       >
//                         <h3 className="text-xl font-semibold">
//                           {section.title}
//                         </h3>
//                         <p className="text-gray-700 mt-2">
//                           {section.description}
//                         </p>
//                         <ul className="list-disc ml-5 mt-2">
//                           {section.points.map((point, idx) => (
//                             <li key={idx}>{point}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="lg:hidden">
//                   <div className="relative">
//                     <select
//                       value={selectedHeadingIndex}
//                       onChange={(e) =>
//                         setSelectedHeadingIndex(parseInt(e.target.value))
//                       }
//                       className="w-full mb-4 p-3 border border-gray-300 rounded shadow bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none pr-8"
//                     >
//                       {headings.map((heading, index) => (
//                         <option key={index} value={index}>
//                           {heading}
//                         </option>
//                       ))}
//                     </select>
//                     <span className="absolute right-3 top-1/4 -translate-y-[20%] pointer-events-none">
//                       <svg
//                         className="w-5 h-5 text-gray-500"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M19 9l-7 7-7-7"
//                         ></path>
//                       </svg>
//                     </span>
//                   </div>

//                   <div className="mb-8 mt-6">
//                     <h3 className="text-xl font-semibold">
//                       {content[selectedHeadingIndex].title}
//                     </h3>
//                     <p className="text-gray-700 mt-2">
//                       {content[selectedHeadingIndex].description}
//                     </p>
//                     <ul className="list-disc ml-5 mt-2">
//                       {content[selectedHeadingIndex].points.map(
//                         (point, idx) => (
//                           <li key={idx}>{point}</li>
//                         )
//                       )}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <ScrollToTop />

//       <Footer />
//     </>
//   );
// };

const DetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [activeHeading, setActiveHeading] = useState(null);
  const [selectedHeadingIndex, setSelectedHeadingIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (state?.hash) {
      const element = document.querySelector(state.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [state]);

  if (!state?.card || !state?.topic) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No data found. Please go back.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const { card, topic } = state;
  const data = dataMapping[card.title];

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Data for this card is not available.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const scrollToSection = (index) => {
    setActiveHeading(index);
    const element = sectionRefs.current[index];
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const { headings, content } = data;

  return (
    <>
      <SecNavbar />
      <div className="lg:pt-28 pt-24 select-none pb-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="space-y-4 p-4">
                <div className="text-center space-y-2">
                  <div className="flex items-center text-center justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>

                    <p className="ml-2 lg:text-lg font-semibold text-mainColor">
                      {topic}
                    </p>
                  </div>
                  <h3 className="lg:text-4xl text-2xl font-bold text-headingColor">
                    {card.title}
                  </h3>
                </div>

                <div className="mx-auto max-w-[1200px] pt-2">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full lg:h-80 h-auto lg:object-cover rounded mb-6"
                  />
                </div>

                {/* Desktop View */}
                <div className="hidden lg:grid grid-cols-3 gap-8">
                  {/* Left: Headings */}
                  <div className="space-y-4 col-span-1 sticky h-max top-28">
                    {headings.map((heading, index) => (
                      <div
                        key={index}
                        onClick={() => scrollToSection(index)}
                        className={`py-3 px-4 rounded cursor-pointer shadow ${
                          activeHeading === index
                            ? "bg-[#f8f9fa] text-mainColor"
                            : "bg-[#f8f9fa] text-headingColor"
                        }`}
                      >
                        <h2 className="pl-3 text-lg cursor-pointer font-medium ease-in-out duration-1000">
                          {heading}
                        </h2>
                      </div>
                    ))}
                  </div>

                  {/* Right: Content */}
                  <div className="col-span-2">
                    {content.map((section, index) => (
                      <div
                        ref={(el) => (sectionRefs.current[index] = el)}
                        key={index}
                        className="mb-8"
                      >
                        <h3 className="text-xl font-semibold text-headingColor">
                          {section.title}
                        </h3>
                        <p className="text-gray-700 mt-2">
                          {section.description}
                        </p>
                        <ul className="list-disc ml-5 mt-2">
                          {section.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden">
                  <select
                    value={selectedHeadingIndex}
                    onChange={(e) =>
                      setSelectedHeadingIndex(parseInt(e.target.value))
                    }
                    className="w-full mb-4 p-3 border border-gray-300 rounded shadow bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none pr-8"
                  >
                    {headings.map((heading, index) => (
                      <option key={index} value={index}>
                        {heading}
                      </option>
                    ))}
                  </select>

                  {/* Display selected section */}
                  <div className="mb-8 mt-6">
                    <h3 className="text-xl font-semibold text-headingColor">
                      {content[selectedHeadingIndex].title}
                    </h3>
                    <p className="text-gray-700 mt-2">
                      {content[selectedHeadingIndex].description}
                    </p>
                    <ul className="list-disc ml-5 mt-2">
                      {content[selectedHeadingIndex].points.map(
                        (point, idx) => (
                          <li key={idx}>{point}</li>
                        )
                      )}
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

export default DetailsPage;
