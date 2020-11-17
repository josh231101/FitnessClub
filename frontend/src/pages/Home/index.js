import React from "react";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Features from "../../components/Features";
import Testimonials from "../../components/Testimonials/Testimonials";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Home.css";
import Service from "../../components/Service";
import ImageCardio from "../../images/cardio.jpg";
import ImageRun from "../../images/run.jpg";
import ImageTrainer from "../../images/trainer.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Main />
      <section className="services">
        <Service title="Cardio" imgUrl={ImageCardio} />
        <Service title="Personal Trainer" imgUrl={ImageRun} />
        <Service title="Fitness Events" imgUrl={ImageTrainer} />
      </section>
      <Features />
      <Testimonials />

      {/* BLOG ENTRIES */}
      <section className="container blog">
        <h2>Read Our Fitness Club</h2>
        <div className="blog-entries">
          <article></article>
          <article></article>
        </div>
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
