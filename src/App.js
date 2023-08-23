import React from "react";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Doctors from "./components/doctors/Doctors";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Floating from "./components/floating/Floating";
import ReactGA from "react-ga4";

const App = () => {
  const googleAnalyticsId = "G-L7G438NEC9";
  ReactGA.initialize(googleAnalyticsId);
  ReactGA.send({ hitType: "pageview", page: "/" });
  return (
    <>
      <Nav />
      <Home />
      <Doctors />
      <About />
      <Testimonials />
      <Footer />
      <Floating />
    </>
  );
};

export default App;
