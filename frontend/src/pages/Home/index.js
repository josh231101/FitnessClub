import React from "react";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";
import Features from "../../components/Features";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./Home.css";
import Service from "../../components/Service";
import ImageCardio from "../../images/cardio.jpg";
import ImageRun from "../../images/run.jpg";
import ImageTrainer from "../../images/trainer.jpg";
import ArticleOne from "../../images/post.jpg";
import ArticleTwo from "../../images/post2.jpg";
import ArticleThree from "../../images/post3.jpg";
import Article from "../../components/Article/Article";

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
        <h2>Read Our Fitness Blog</h2>
        <div className="blog__entries">
          <Article
            bgImg={ArticleOne}
            title="How to create your fitness routine"
          />
          <Article
            bgImg={ArticleTwo}
            title="Living a healthy lifestyle is easy"
          />
          <Article
            bgImg={ArticleThree}
            title="Marathon Event rocked last sunday"
          />
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
