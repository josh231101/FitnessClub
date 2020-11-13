import React from "react";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Features from "../../components/Features";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* MAIN ABOUT */}
      <Main />
      {/* FEATURES */}
      <Features />
      {/* TESTIMONIALS */}
      {/* BLOG ENTRIES */}
      {/*  */}
      <Footer />
    </>
  );
};

export default Home;
