import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import About from "../components/About";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Sections from "../components/Sections";


const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Sections/>
      <CallToAction/>
      <Footer/>
    </>
  );
};

export default Home;
