import React from "react";
import "./footer.css";
const Footer = () => {
  const logoRef = () => {
    window.location.href = "#";
  };
  return (
    <div className="footer" id="footer">
      <div className="footer-section">
        <div className="footer-card">
          <h2>Opening hours</h2>
          <h3>Monday - Saturday</h3>
          <h4>10:00 AM - 08:00 PM</h4>
          <h4>J.P. Nagar, Bengaluru</h4>
        </div>
        <div className="footer-card">
          <h2 className="logo" onClick={logoRef}>
            <span className="logo-span">Dr.</span> Aakanksha Sharma
          </h2>
          <h2>Call us</h2>
          <h3>+91 63871 11865</h3>
          <h2>Write a message</h2>
          <h3>draasharma521@gmail.com</h3>
        </div>
        <div className="footer-card">
          <iframe
            className="footer-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.241320895326!2d77.57858577473299!3d12.892198287415889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1546c4e1d3ed%3A0x6a51b2820857f8dc!2sApollo%20Clinic%20-%20Best%20Multi%20Specialty%20Clinic%20in%20JP%20Nagar%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1683382156841!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
      <span className="footer-line"></span>
      <div className="copyright">
        <h4>
          ©️ 2023 Website by{" "}
          <a href="https://www.avineek.com" target="_blank">
            Avineek Pvt. Ltd.
          </a>{" "}
          | All rights reserved.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
