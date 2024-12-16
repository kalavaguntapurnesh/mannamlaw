import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SecNavbar from "../components/SecNavbar";
import Footer from "../components/Footer";

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
          "The H-1B visa is available for specialty occupations that require at least a bachelor's degree.",
        points: [
          "Minimum education requirement: Bachelor's degree.",
          "Employer sponsorship is mandatory.",
          "The job must require specialized knowledge.",
        ],
      },
      {
        title: "H-1B Petition Exempted from Annual Quota (Cap-Exempt H-1Bs)",
        description:
          "Applicants must prepare the following documents for the H-1B visa application.",
        points: [
          "Educational certificates (degree, transcripts).",
          "Offer letter from the sponsoring employer.",
          "Passport and visa application forms.",
        ],
      },
      {
        title: "H-1B Petition Not Subject to Annual Quota",
        description: "The H-1B visa application follows these key steps:",
        points: [
          "Employer files Labor Condition Application (LCA).",
          "H-1B petition submitted to USCIS.",
          "If selected, attend visa interview at the U.S. Embassy.",
        ],
      },
      {
        title: "Period of Stay",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
      {
        title: "Filing Fees",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
      {
        title: "Alternatives when the H-1B Annual Quotas have been filed",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
        ],
      },
      {
        title: "IT Consulting Industry",
        description:
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
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
          "H-1B visas are subject to annual caps, and deadlines are crucial.",
        points: [
          "H-1B cap lottery opens every April.",
          "Cap-exempt petitions can be filed year-round.",
          "Visa validity: Maximum of 6 years.",
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
          "The L-1 visa allows intra-company transfers of executives, managers, or specialized knowledge employees.",
        points: [
          "Suitable for multinational companies.",
          "Supports U.S. expansions.",
        ],
      },
      {
        title: "Frequent User Pass——Blanket L-1 Petition",
        description: "Key requirements for L-1 visa eligibility include:",
        points: [
          "Employee must have worked abroad for the company for at least one year.",
          "Employee must hold an executive or managerial role.",
        ],
      },
      {
        title: "Green Card Eligibility",
        description: "Key requirements for L-1 visa eligibility include:",
        points: [
          "Employee must have worked abroad for the company for at least one year.",
          "Employee must hold an executive or managerial role.",
        ],
      },
      {
        title: "H-1B v. L-1",
        description: "Key requirements for L-1 visa eligibility include:",
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

const DetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [activeHeading, setActiveHeading] = useState(null);
  const [selectedHeadingIndex, setSelectedHeadingIndex] = useState(0);
  const sectionRefs = useRef([]);

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
    setActiveHeading(index); // Set active heading
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
      <div className="lg:pt-28 pt-24 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-16">
              <div className="space-y-4 p-4">
                <div className="flex items-center text-center justify-center ">
                  <div className="h-4 w-1 bg-mainColor"></div>

                  <p className="ml-2 lg:text-lg font-semibold text-mainColor">
                    {topic}
                  </p>
                </div>

                <div className="text-center mt-4">
                  <h3 className="lg:text-4xl text-2xl font-bold text-headingColor">
                    {card.title}
                  </h3>
                </div>

                <div className="mx-auto max-w-[1200px] pt-2">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-80 object-cover rounded mb-6"
                  />
                </div>

                {/* <div className="grid lg:grid-cols-3 gap-8 pt-6">
                  <div className="space-y-4 col-span-1 sticky top-28">
                    {headings.map((heading, index) => (
                      <div
                        key={index}
                        onClick={() => scrollToSection(index)}
                        className={`py-3 px-4 rounded-lg cursor-pointer ${
                          activeHeading === index
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {heading}
                      </div>
                    ))}
                  </div>

                  <div className="col-span-2">
                    {content.map((section, index) => (
                      <div
                        ref={(el) => (sectionRefs.current[index] = el)}
                        key={index}
                        className="mb-8"
                      >
                        <h3 className="text-xl font-semibold">
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
                </div> */}

                <div className="hidden lg:grid grid-cols-3 gap-8 pt-6">
                  {/* Left: Headings */}
                  <div className="space-y-4 col-span-1 sticky top-28">
                    {headings.map((heading, index) => (
                      <div
                        key={index}
                        onClick={() => scrollToSection(index)}
                        className={`py-3 px-4 rounded-lg cursor-pointer ${
                          activeHeading === index
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {heading}
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
                        <h3 className="text-xl font-semibold">
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
                  <div className="relative">
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
                    <span className="absolute right-3 top-1/4 -translate-y-[20%] pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  {/* Display only the selected content */}
                  <div className="mb-8 mt-6">
                    <h3 className="text-xl font-semibold">
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
      <Footer />
    </>
  );
};

export default DetailsPage;
