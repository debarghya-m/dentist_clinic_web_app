import React from "react";
import "./about.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import imgg from "../../assets/no.avif";
import { FaGraduationCap } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";
import { MdContactPage } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineTranslate } from "react-icons/hi";
import review from "../../assets/before-after-teeth.jpg";
const About = () => {
  const openDialler = () => {
    window.open("tel:+918116944435");
  };
  const openWhatsapp = () => {
    window.open("https://wa.me/+916387111865");
  };
  const openMail = () => {
    window.open("mailto:drakankshasharma@gmail.com");
  };
  return (
    <div className="about-outer--box" id="about">
      <div className="about-outer--box--2">
        <div className="dentist-tag-data">
          <p>ABOUT US</p>
          <h2>We've been taking care of your teeth for over 5 years.</h2>
        </div>
        <img
          className="dentist-slider-box"
          src={review}
          alt="before-after-dentist-checkoup"
        />

        <div className="dentist-data-container">
          <div className="dentist-data">
            <h2>+12K</h2>
            <h3>Our patient</h3>
            <p>
              Experiencing exceptional dental care and leaving with radiant
              smiles that speak volumes.
            </p>
          </div>
          <span className="line1"></span>
          <div className="dentist-data">
            <h2>+99.7%</h2>
            <h3>Satisfied patients</h3>
            <p>
              We take pride in delivering exceptional dental care and creating
              happy, healthy smiles that last a lifetime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
