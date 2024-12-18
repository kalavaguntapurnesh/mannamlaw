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
      <Blogs />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;
