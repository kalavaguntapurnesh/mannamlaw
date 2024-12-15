import React from "react";
import Footer from "../components/Footer";
import MainLayout from "./../components/MainLayout";
import Blogs from "../components/Blogs";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <MainLayout />

      <Blogs />

      <ScrollToTop />

      <Footer />
    </>
  );
};

export default Home;
