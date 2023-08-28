import React from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <AboutUs />
      <Footer />
    </div>
  );
}
export default Home;
