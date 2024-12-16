import React from "react";
import Footer from "../components/Footer";
import SecNavbar from "./../components/SecNavbar";
import ScrollToTop from "../components/ScrollToTop";
import Ravi from "../assets/Ravi.png";
import Hemanth from "../assets/Hemanth.jpeg";
import Sabir from "../assets/Sabir.png";
import Shruthi from "../assets/Shruthi.png";
import Kanchi from "../assets/kanchi.jpeg";

const Experts = () => {
  const cardsData = [
    { image: Ravi, name: "Ravi Mannam", role: "Managing Attorney" },
    { image: Hemanth, name: "Hemant Ramachandran", role: "Associate Attorney" },
    { image: Shruthi, name: "Shruthi Khanna", role: "Accountant" },
    {
      image: Sabir,
      name: "Sabirou Sanoussi",
      role: "Paralegal",
    },
    {
      image: Kanchi,
      name: "Kanchi Khanna",
      role: "Senior Paralegal",
    },
  ];

  return (
    <>
      <SecNavbar />

      <div className="lg:pt-28 pt-16">
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

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 p-6 pt-8">
                  {cardsData.map((card, index) => (
                    <div
                      key={index}
                      className="max-w-sm mx-auto bg-white border rounded-lg overflow-hidden shadow-lg relative group transition-all duration-300"
                    >
                      <div className="w-full h-[100%] relative overflow-hidden group-hover:bg-gray-800">
                        {/* Image Section */}
                        <img
                          src={card.image}
                          alt={card.name}
                          className="w-full h-[100%] object-cover"
                        />

                        {/* Name Section */}

                        <div className="absolute bottom-0 w-full bg-white p-4 ">
                          <div className="flex flex-row justify-around">
                            <div className="flex flex-col w-[50%]">
                              <h1 className="text-sm font-medium">
                                {card.name}
                              </h1>
                              <p className="text-gray-600 text-sm">
                                {card.role}
                              </p>
                            </div>

                            <div className="flex items-center justify-end w-[50%]">
                              <button className="border border-[#f2f2f3] py-1 px-4 rounded bg-[#f2f2f3] text-gray-600">View</button>
                            </div>
                          </div>
                        </div>
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
