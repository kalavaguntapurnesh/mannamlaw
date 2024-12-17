import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import SecNavbar from "../components/SecNavbar";

const ExpertDetails = () => {
  const { name } = useParams();
  const location = useLocation();
  const { image, role } = location.state || {};

  return (
    <>
      <SecNavbar />

      <div className="lg:pt-28 pt-24 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-16">
              <div className="lg:grid hidden grid-cols-3 gap-4">
                <div className="space-y-4 p-4 col-span-2 border-2 border-green-600">
                  <div className="flex flex-row items-center space-x-4">
                    {image && (
                      <img
                        src={image}
                        alt={name}
                        className="rounded-full mb-4 h-28 w-28"
                      />
                    )}
                    <h1 className="text-4xl font-bold text-[#1A1A1A] mb-2">
                      {name}
                    </h1>

                    {/* <p className="text-gray-600 text-lg">{role}</p> */}
                  </div>
                </div>

                <div className="col-span-1 border-2 border-red-500"></div>
              </div>

              <div className="lg:hidden block ">
                <div className="flex flex-col justify-center items-center">
                  {image && (
                    <img
                      src={image}
                      alt={name}
                      className="rounded-full mb-4 h-24 w-24"
                    />
                  )}
                  <h1 className="text-2xl font-bold text-headingColor mb-2">
                    {name}
                  </h1>
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

export default ExpertDetails;
