import React, { useState } from "react";

const Blogs = () => {
  const [selectedTopic, setSelectedTopic] = useState("Non-Immigrant Visas");
  const topics = [
    "Non-Immigrant Visas",
    "Green Cards",
    "Common Topics",
    "Headlines",
  ];

  const cardsData = {
    "Non-Immigrant Visas": [
      {
        id: 1,
        title: "H-1B Professionals",
        description: "Short-term travel for tourism or leisure.",
        image: "https://images.pexels.com/photos/8061992/pexels-photo-8061992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 2,
        title: "L-1 Intra-Company Transferees",
        description: "For studying at an accredited institution.",
        image: "https://images.pexels.com/photos/16475250/pexels-photo-16475250/free-photo-of-women-signing-documents.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 3,
        title: "E1 - E2 - Treaty Traders/Investors",
        description: "Temporary employment in a specialized field.",
        image: "https://images.pexels.com/photos/2862155/pexels-photo-2862155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 4,
        title: "TN/NAFTA for Citizens of Canada & Mexico",
        description: "Temporary employment in a specialized field.",
        image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 5,
        title: "K-1",
        description: "Temporary employment in a specialized field.",
        image: "https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 6,
        title: "B-1",
        description: "Temporary employment in a specialized field.",
        image: "https://images.pexels.com/photos/15694429/pexels-photo-15694429/free-photo-of-flags-of-countries.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    "Green Cards": [
      {
        id: 1,
        title: "PERM : Labor Certification Process",
        description: "For individuals with job offers in the U.S.",
        image: "https://images.pexels.com/photos/1169922/pexels-photo-1169922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 2,
        title:
          "EB-1 : Extraordinary Ability & Multinational Executives/Managers",
        description: "For family members of U.S. citizens or residents.",
        image: "https://images.pexels.com/photos/20063688/pexels-photo-20063688/free-photo-of-colorful-flags-on-flagpoles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 3,
        title: "EB-2 : Advanced Degrees / Exceptional Ability",
        description: "Green cards granted through a lottery system.",
        image: "https://images.pexels.com/photos/8181766/pexels-photo-8181766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 4,
        title: "EB-3 : Professional, Skilled Workers & Others",
        description: "Green cards granted through a lottery system.",
        image: "https://images.pexels.com/photos/17178100/pexels-photo-17178100/free-photo-of-flags-of-european-union-countries.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    "Common Topics": [
      {
        id: 1,
        title: "Indian 3 year Degrees",
        description: "Learn about key immigration policies.",
        image: "https://images.pexels.com/photos/3699921/pexels-photo-3699921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 2,
        title: "Neufeld Memo's Effect on H-1B in IT industry",
        description: "Understand the visa application process.",
        image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 3,
        title: "IT Consultant Industry & H-1B Dependency Status",
        description: "Best practices for successful applications.",
        image: "https://images.pexels.com/photos/6805161/pexels-photo-6805161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 4,
        title: "H-1B Visa Status for Public School Teachers",
        description: "Best practices for successful applications.",
        image: "https://images.pexels.com/photos/7020394/pexels-photo-7020394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 5,
        title: "Maintaining Valid Nonimmigrant Status",
        description: "Best practices for successful applications.",
        image: "https://images.pexels.com/photos/2815168/pexels-photo-2815168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    "Headlines": [
      {
        id: 1,
        title: "Policy Updates",
        description: "Recent changes to immigration policies.",
        image: "https://images.pexels.com/photos/3769146/pexels-photo-3769146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 2,
        title: "Processing Delays",
        description: "Current trends in visa processing times.",
        image: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 3,
        title: "Global Trends",
        description: "Immigration trends around the world.",
        image: "https://images.pexels.com/photos/7692519/pexels-photo-7692519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
  };
  return (
    <div className="lg:pt-28 pt-16 select-none">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] pb-16">
            <div className="p-4">
              {/* Topics Navigation */}
              <div className="hidden md:flex justify-center space-x-8">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-6 py-2 rounded ${
                      selectedTopic === topic
                        ? "bg-mainColor text-white"
                        : "bg-headingColor text-white"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>

              {/* Mobile Select */}
              <div className="md:hidden mb-4">
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                >
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {cardsData[selectedTopic].map((card) => (
                  <div
                    key={card.id}
                    className="border border-gray-300 shadow-md hover:shadow-lg transition overflow-hidden rounded"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-60 mb-4"
                    />
                    <div class="px-6">
                      <div class="font-bold text-start text-headingColor text-xl mb-2">
                        <h1>{card.title}</h1>
                      </div>
                      <p class="text-gray-700 text-base text-start ">
                        {card.description}
                      </p>
                    </div>
                    <div class="px-6 pb-4 flex lg:justify-start justify-center">
                      <a
                        href="/contact"
                        class="relative h-[40px] w-48 mt-6 flex items-center justify-center overflow-hidden border border-mainColor text-mainColor transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-mainColor before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                      >
                        <span class="relative z-10">Know More</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
