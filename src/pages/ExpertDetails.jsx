import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import SecNavbar from "../components/SecNavbar";
import ContactUsButton from "../components/ScrollToTop";

const ExpertDetails = () => {
  const { name } = useParams();
  const location = useLocation();
  const card = location.state; // Get the card data passed as state

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SecNavbar />

      <div className="pt-24 lg:pt-28 pb-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px]">
              <div className="p-6">
                <div className="lg:grid hidden grid-cols-3 gap-4 ">
                  <div className="space-y-4 p-4 col-span-2">
                    <div className="flex flex-row items-center space-x-6">
                      {card.image && (
                        <img
                          src={card.image}
                          alt={card.name}
                          className="rounded-full mb-4 h-36 w-36"
                        />
                      )}
                      <h1 className="text-4xl font-bold text-headingColor">
                        {card.name}
                      </h1>
                    </div>

                    <div className="flex flex-row text-xl font-medium justify-between text-headingColor">
                      <div>
                        <h1>{card.role}</h1>
                      </div>

                      <div>
                        <h1>Languages: {card.languages}</h1>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div>
                        <h1 className="uppercase text-gray-700 font-semibold">
                          about
                        </h1>
                      </div>

                      <div className="space-y-3 text-gray-600">
                        <div className="mt-4">
                          <p className="text-gray-600">{card.descriptionOne}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">{card.descriptionTwo}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">
                            {card.descriptionThree}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-1 pt-8 ml-12">
                    <div className="flex flex-col space-y-4 mt-4 md:mt-0 flex-1">
                      <div className="flex flex-col space-y-1">
                        <p className="text-gray-500 uppercase">
                          Bar Admission:{" "}
                        </p>
                        <p className="text-[#1a1a1a] font-medium">
                          {card?.barAdmission || "N/A"}
                        </p>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <p className="text-gray-500 uppercase">Email: </p>
                        <a
                          href="mailTo:ravi@mannamlaw.com"
                          className="font-medium underline text-blue-600"
                        >
                          {card.email}
                        </a>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <p className="text-gray-500 uppercase">Phone: </p>
                        <p className="text-[#1a1a1a] font-medium">
                          {card.phone}
                        </p>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <p className="text-gray-500 uppercase">Direct: </p>
                        <p className="text-[#1a1a1a] font-medium">
                          {card.direct}
                        </p>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <p className="text-gray-500 uppercase">Fax: </p>
                        <p className="text-[#1a1a1a] font-medium">{card.fax}</p>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <p className="text-gray-500 uppercase">Education: </p>
                        <p className="text-[#1a1a1a] font-medium">
                          {card.undergraduation}
                        </p>
                        <p className="text-[#1a1a1a] font-medium">
                          {card.graduation}
                        </p>
                      </div>

                      <div className="flex flex-row space-y-1 gap-4">
                        <a href={card.barOneLink}>
                          <img src={card.barOne} alt="" className="w-24 h-24" />
                        </a>
                        <a href={card.barTwoLink}>
                          <img src={card.barTwo} alt="" className="w-24 h-24" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:hidden block ">
                  <div className="flex flex-col justify-center items-center">
                    {card.image && (
                      <img
                        src={card.image}
                        alt={card.name}
                        className="rounded-full mb-4 h-24 w-24"
                      />
                    )}
                    <h1 className="text-2xl font-bold text-headingColor mb-2">
                      {card.name}
                    </h1>
                  </div>

                  {card.image && (
                    <div className="grid grid-cols-2 gap-4 pt-4 text-sm">
                      <div className="flex flex-col justify-center items-center space-y-1">
                        <p className="text-gray-500 uppercase">
                          Bar Admission:{" "}
                        </p>
                        <p className="text-[#1a1a1a] font-medium text-center">
                          {card?.barAdmission || "N/A"}
                        </p>
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-1">
                        <p className="text-gray-500 uppercase">Email: </p>
                        <a
                          href="mailTo:ravi@mannamlaw.com"
                          className="font-medium underline text-blue-600"
                        >
                          {card.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {card.image && (
                    <div className="grid grid-cols-2 gap-4 pt-4 text-sm">
                      <div className="flex flex-col justify-center items-center space-y-1">
                        <p className="text-gray-500 uppercase">Phone: </p>
                        <p className="text-[#1a1a1a] font-medium">
                          {card.phone}
                        </p>
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-1">
                        <p className="text-gray-500 uppercase">Direct: </p>
                        <p className="text-[#1a1a1a] font-medium">
                          {card.direct}
                        </p>
                      </div>
                    </div>
                  )}

                  {card.image && (
                    <div className="grid grid-cols-2 gap-4 pt-4 text-sm">
                      <div className="flex flex-col justify-center items-center space-y-1">
                        <p className="text-gray-500 uppercase">Fax: </p>
                        <p className="text-[#1a1a1a] font-medium">{card.fax}</p>
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-1">
                        <p className="text-gray-500 uppercase">Direct: </p>
                        <p className="text-[#1a1a1a] font-medium">
                          {card.direct}
                        </p>
                      </div>
                    </div>
                  )}

                  {card.image && (
                    <div className="flex flex-row justify-center items-center py-4 gap-6">
                      <img src={card.barOne} alt="" className="w-24 h-24" />
                      <img src={card.barTwo} alt="" className="w-24 h-24" />
                    </div>
                  )}

                  {card.image && (
                    <div className="pt-6 space-y-3 text-gray-600z">
                      <p>{card.descriptionOne}</p>
                      <p>{card.descriptionTwo}</p>
                      <p>{card.descriptionThree}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactUsButton />

      <Footer />
    </>
  );
};

export default ExpertDetails;
