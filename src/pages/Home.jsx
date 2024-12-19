import React from "react";
import Footer from "../components/Footer";
import MainLayout from "./../components/MainLayout";
import Blogs from "../components/Blogs";
import ScrollToTop from "../components/ScrollToTop";
import HomeServices from "../components/HomeServices";

const Home = () => {
  return (
    <>
      <MainLayout />
      <HomeServices />

      <div className="lg:pt-16 pt-12 pb-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px]  px-4 sm:px-6 mx-auto">
              <div className="flex flex-col space-y-4">
                <div
                  // variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  // initial="hidden"
                  // whileInView="show"
                  // viewport={{ once: true, amount: 0.5 }}
                  className="flex items-center text-center justify-center "
                >
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor">
                    How it works
                  </h1>
                </div>
                {/* Heading */}
                <div
                  // variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  // initial="hidden"
                  // whileInView="show"
                  // viewport={{ once: true, amount: 0.3 }}
                  className=" text-4xl text-headingColor font-bold text-center"
                >
                  Where integrity meets advocacy
                </div>

                {/* Description */}
                <div
                  // variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  // initial="hidden"
                  // whileInView="show"
                  // viewport={{ once: true, amount: 0.3 }}
                  className="text-base text-gray-600 text-center"
                >
                  Delivering personalized legal solutions with honesty,
                  professionalism, and unwavering dedication to protect your
                  rights and achieve exceptional outcomes every time.
                </div>

                <div
                  // variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  // initial="hidden"
                  // whileInView="show"
                  // viewport={{ once: true, amount: 0.3 }}
                  className="pt-8"
                >
                  <div className="grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-3 gap-4 lg:h-[600px] h-[1000px]">
                    {/* First Card */}
                    <div className="lg:row-span-2 row-span-1 lg:col-span-1 relative rounded overflow-hidden">
                      {/* Background Image */}
                      <img
                        src="https://images.pexels.com/photos/8112197/pexels-photo-8112197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Overlay Content */}
                      <div className="absolute flex space-y-2 flex-col inset-0 p-5 bg-opacity-40 bg-black items-start justify-start">
                        <h2 className="text-white text-2xl font-semibold">
                          Your rights, our priority.
                        </h2>
                        <p className="text-white">
                          Protecting your interests with dedication, delivering
                          personalized legal solutions, and ensuring justice
                          every step forward.
                        </p>
                      </div>
                    </div>

                    {/* Second Card */}
                    <div className="lg:row-span-1 lg:col-span-1 bg-[#f2f2f3] rounded relative overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div className="inset-0 absolute flex flex-col space-y-2 p-5 bg-opacity-40 bg-black items-start justify-start">
                        <h1 className="text-white font-semibold text-2xl">
                          Advocacy with a personal touch
                        </h1>
                        <p className="text-white">
                          Providing compassionate legal representation, tailored
                          solutions, unwavering commitment, and building lasting
                          client relationships
                        </p>
                      </div>
                    </div>

                    {/* Third Card */}
                    <div className="lg:row-span-1 lg:col-span-1 bg-[#f2f2f3] rounded overflow-hidden relative">
                      <img
                        src="https://images.pexels.com/photos/4427624/pexels-photo-4427624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col space-y-2 p-5 justify-start items-start">
                        <h1 className="text-2xl text-white font-semibold">
                          Your voice in the legal system
                        </h1>
                        <p className="text-white">
                          Advocating your rights with expertise, compassion, and
                          unwavering dedication to achieve the justice you
                          deserve.
                        </p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Blogs />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;
