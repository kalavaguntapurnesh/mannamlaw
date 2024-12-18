import React from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import Ravi from "../assets/Ravi.png";
import Hemanth from "../assets/Hemanth.jpeg";
import Sabir from "../assets/Sabir.png";
import Shruthi from "../assets/Shruthi.png";
import Kanchi from "../assets/kanchi.jpg";
import { useNavigate } from "react-router-dom";

const Experts = () => {
  const navigate = useNavigate();

  const cardsData = [
    {
      image: Ravi,
      name: "Ravi Mannam",
      role: "Managing Attorney / Founder",
      languages: "Telugu, Hindi, English",
      barAdmission: "Tennessee",
      phone: "(877) 596-1761 Ext. 6",
      direct: "(678) 392-3170",
      fax: "(877) 596-1667",
      email: "ravi@mannamlaw.com",
      initialDescription:
        "Ravi Mannam is the Managing Attorney & Founder of Mannam & Associates LLC. He offers over 20 years of legal experience in immigration & taxation law, with the last decade dedicated exclusively to the area of immigration law.",
      descriptionOne:
        "Ravi Mannam is the Managing Attorney and Founder of Mannam & Associates LLC. He offers over 20 years of legal experience in immigration and taxation law, with the last decade dedicated exclusively to the area of business immigration law. Mr. Mannam has extensive experience in complex employment-based immigration matters, including H-1B Requests for Evidence, Labor Certification Audits, I-140 Degree Equivalencies and Ability to Pay. His practice focuses on counseling clients in the information technology, engineering, and healthcare industries. Mr. Mannam also advises corporate clients on devising comprehensive global human resource strategies.",
      descriptionTwo:
        "Mr. Mannam is a member of the State Bar of Tennessee and the American Immigration Lawyers Association [AILA]. He is also an active member of the Telugu Association of Metro Atlanta and the local South Asian community. He is regularly invited to speak on the latest trends in filing immigrant and nonimmigrant visas on behalf of IT consulting and development companies. Having navigated the U.S. immigration system himself, Mr. Mannam understands the needs of foreign workers, as well as the business and HR concerns of their corporate petitioners.",
      descriptionThree:
        "Mr. Mannam received an LLB from Osmania University Department of Law and an LLM with a focus in taxation from the University of Georgia. After graduating from the University of Georgia, Mr. Mannam joined a large corporate firm in Atlanta, Georgia, practicing in the areas of taxation, ERISA and employee benefits. Prior to founding Mannam & Associates LLC, Mr. Mannam also served as in-house immigration counsel to a large information technology consulting firm.",
    },
    {
      image: Hemanth,
      name: "Hemant Ramachandran",
      role: "Associate Attorney",
      languages: "Tamil, English, Spanish",
      barAdmission: "Georgia",
      phone: "(877) 596-1761 Ext. 5",
      direct: "(678) 392-3175",
      fax: "(877) 596-1667",
      email: "Hemanth@mannamlaw.com",
      initialDescription:
        "Mr. Hemant Ramachandran is an Associate Attorney with Mannam & Associates LLC. He has extensive experience handling matters related to both employment and family immigration, including the preparation and filing of petitions.",
      descriptionOne:
        "Mr. Hemant Ramachandran is an Associate Attorney with Mannam & Associates LLC. He has extensive experience handling matters related to both employment and family immigration, including the preparation and filing of petitions as well as the filing of responses to Requests for Evidence, Appeals, and Motions to Reopen. He has successfully argued appeals to the Board of Alien Labor Certification Appeals on denied PERM applications, reopened and obtained approvals on H-1B Denials and Notices of Intent to Revoke, prepared and gained approvals on hundreds of I-140 immigrant visa petitions in several employment-based visa categories, and prepared and resolved complex legal issues concerning matters such as L-1, TN, H-1B, EB-1C, EB-2/EB-3, EB-2 National Interest Waiver, adjustment of status, and naturalization applications. He routinely engages with consulates abroad and Department of Homeland Security enforcement to resolve matters such as FDNS inquiries, 221(g) refusals, and emergency expedite requests, and assists immigration beneficiaries in resolving potential admissibility issues at ports of entry.",
      descriptionTwo:
        "Mr. Ramachandran has been admitted to practice before the Georgia Supreme Court and is a member of the State Bar of Georgia and the American Immigration Lawyers Association [AILA]. He has been a part of the Mannam & Associates team for over eight years, having previously served as a law clerk in the Coweta Judicial Circuit. He earned his J.D. from the University of Georgia School of Law in Athens, GA in 2014, and his Bachelor of Science Degree in Industrial & Systems Engineering from the Georgia Institute of Technology in Atlanta, GA in 2009. Having been raised in an immigrant family, Mr. Ramachandran has a personal understanding of the sensitive needs of foreign workers, as well as the particular concerns of their corporate petitioner",
    },
    {
      image: Sabir,
      name: "Sabirou Sanoussi",
      role: "Paralegal",
      languages: "Arabic, Akan, Hausa, English",
      phone: "(877) 596-1761 Ext. 2",
      direct: "(678) 392-3174",
      fax: "(877) 596-1667",
      email: "sabirou@mannamlaw.com",
      initialDescription:
        "Sanousi has over seven years of experience in business immigration. Being highly knowledgeable about various immigration processes, he specializes, and has expertise in, the H-1B nonimmigrant visa application process.",
      descriptionOne:
        "Mr. Sanousi has over seven years of experience in business immigration. Being highly knowledgeable about various immigration processes, he specializes, and has expertise in, the H-1B nonimmigrant visa application process. From start to completion of the H-1B petition process, Sabir communicates extensively with clients, obtaining and thoroughly reviewing appropriate documentation/evidence gathered to support a proper filing. Sabir assists attorneys in document review and in all aspects of case preparation. He drafts appropriate forms and petition support letters, and assembles application and petition packages to file with the USCIS. Since joining our firm in 2005, Sabir has established and maintained great working relationships with our clients. He has a Bachelor’s Degree in Corporate Law. Prior to joining our firm, Sabir practiced corporate law and banking in Kuwait for over eight years.",
    },
    {
      image: Kanchi,
      name: "Kanchi Khanna",
      role: "Senior Paralegal",
      languages: "Hindi, English, Punjabi",
      phone: "(877) 596-1761 Ext. 3",
      direct: "(678) 392-3172",
      fax: "(877) 596-1667",
      email: "kanchi@mannamlaw.com",
      initialDescription:
        "Ms. Khanna’s expertise is in guiding our clients through employment and family based Green Card application processes. With strong attention to detail, she drafts appropriate documents required by the U.S.C.I.S",
      descriptionOne:
        "Prior to joining Mannam & Associates LLC, in 2002, Ms. Khanna studied at the University of Maryland at College Park, MD, and worked at an IT consulting firm as an Accounts/HR Manager and an Immigration Associate. She has been working for over 12 years in the employment and family-based immigration field. Ms. Khanna has considerable experience in overseeing, preparing and filing a broad spectrum of nonimmigrant and immigrant petitions, including temporary nonimmigrant visas, labor certifications, permanent resident applications and naturalization applications. Assisting in all aspects of business immigration matters, Ms. Khanna’s expertise is in guiding our clients through employment and family based Green Card application processes. With strong attention to detail, she drafts appropriate documents required by the U.S. Citizenship and Immigration Services, the U.S. Department of Labor, and the U.S. Department of State. Ms. Khanna consults with attorneys and clients from start to finish through various processes in an effort to provide high quality and dedicated services. She has extensive contact with clients to obtain necessary documentation and to assist them with immigration processing procedures. Ms. Khanna is committed to our clients and is a true asset to our firm.",
    },
    {
      image: Shruthi,
      name: "Shruthi Khanna",
      role: "Accountant",
      languages: "Hindi, English",
      phone: "(877) 596-1761 Ext. 5",
      direct: "(678) 392-3171",
      fax: "(877) 596-1667",
      email: "shruthi@mannamlaw.com",
      initialDescription:
        "Ms. Khanna graduated summa cum laude from the Smith School of Business, University of Maryland with a Bachelor’s degree in Accounting. She is involved in all aspects of recording and reviewing financial transactions",
      descriptionOne:
        "Ms. Khanna graduated summa cum laude from the Smith School of Business, University of Maryland with a Bachelor’s degree in Accounting. Ms. Khanna joined our firm as Accountant in 2006. She is involved in all aspects of recording and reviewing financial transactions for our firm.",
    },
  ];

  const handleViewClick = (card) => {
    navigate(`/experts/${encodeURIComponent(card.name)}`, { state: card });
  };

  return (
    <>
      <SecNavbar />

      <div className="lg:pt-28 pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-16">
              <div className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center text-center justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>

                    <p className="ml-2 lg:text-lg font-semibold text-mainColor">
                      Our Team
                    </p>
                  </div>

                  <div className="text-center mt-4">
                    <h3 className="lg:text-4xl text-2xl font-bold text-headingColor">
                      The Minds Behind the Mission
                    </h3>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Seeking guidance in the intricate and demanding field of
                      Immigration & Naturalization Law? Let us help navigate
                      your legal journey.
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:p-6 pt-8">
                  {cardsData.map((card, index) => (
                    <div
                      key={index}
                      className="flex justify-center bg-white rounded shadow border"
                    >
                      <div className="w-full bg-white p-4">
                        {/* Image Section */}
                        <div className="space-y-4">
                          <div className="flex justify-center items-center">
                            <img
                              src={card.image}
                              alt={card.name}
                              // className="lg:w-[80%] w-full lg:h-[350px] h-[360px] rounded"
                              className="w-36 h-36 rounded-full"
                            />
                          </div>

                          <div className="flex flex-col justify-center items-center">
                            <h1 className="text-xl text-headingColor font-bold text-center">
                              {card.name}
                            </h1>
                            <p>{card.role}</p>
                          </div>

                          <div className="flex justify-center items-center">
                            <p className="text-center text-gray-600">
                              {card.initialDescription}
                            </p>
                          </div>

                          <div className="flex items-center justify-center">
                            <button
                              onClick={() => handleViewClick(card)}
                              className="border border-[#f2f2f3] py-2 px-8 rounded bg-[#f2f2f3] text-gray-800 hover:bg-headingColor transition duration-500 ease-in-out hover:text-white"
                            >
                              View More
                            </button>
                          </div>
                        </div>

                        {/* Name Section */}
                      </div>
                    </div>
                  ))}
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

export default Experts;
