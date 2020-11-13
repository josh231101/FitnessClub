import React from "react";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Features from "../../components/Features";
import Testimonials from "../../components/Testimonials/Testimonials";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
      <Testimonials />

      {/* BLOG ENTRIES */}
      {/*  */}
      <Footer />
    </>
  );
};

export default Home;
