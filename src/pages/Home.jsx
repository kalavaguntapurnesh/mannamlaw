import React from "react";
import Footer from "../components/Footer";
import MainLayout from "./../components/MainLayout";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <>
      <MainLayout />

      <Blogs />

      <Footer />
    </>
  );
};

export default Home;
