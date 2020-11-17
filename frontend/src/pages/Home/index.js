import React from "react";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Features from "../../components/Features";
import Testimonials from "../../components/Testimonials/Testimonials";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Main />
      <Features />
      <Testimonials />

      {/* BLOG ENTRIES */}
      <section className="container blog">
        <h2>Read Our Fitness Club</h2>
      </section>

      <div className="callto">
        <section className="container callto__wrapper">
          <h2>Ready to get fit?</h2>
          <button className="btn secondary">Our Events!</button>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
