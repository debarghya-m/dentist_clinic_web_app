import React, { useState } from "react";
import "./contact.css";
import { useRef } from "react";
const Contact = () => {
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const form = useRef();
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regPhone = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const handleEmailChange = (event) => {
    if (event.target.value.match(regEmail)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };
  const handlePhoneChange = (event) => {
    if (event.target.value.match(regPhone)) {
      setValidPhone(true);
    } else {
      setValidPhone(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validEmail && validPhone) {
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        phoneNumber: e.target.phone.value,
        service: e.target.message.value,
        domain: "akansha",
      };
      setSuccess(true);
      fetch("https://api.avineek.com/api/mail", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
          e.target.reset();
          e.target.message.value = "";
          setIsError(false);
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        })
        .catch((err) => {
          setSuccess(true);
          e.target.reset();
          e.target.message.value = "";
          setIsError(false);
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        });
    } else {
      setIsError(true);
    }
  };

  const contactWhatsapp = () => {
    window.open("https://wa.me/7996979669", "_blank");
  };
  const contactMessenger = () => {
    window.open("https://m.me/100091331367572/", "_blank");
  };
  const contactEmail = () => {
    window.open("mailto:care.avineek@gmail.com", "_blank");
  };
  return (
    <section id="contact" className="contact">
      <h4>CONTACT US</h4>
      <h2>Get in touch with us</h2>
      <div className="container contact__container">
        <div className="contact__map">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.241320895326!2d77.57858577473299!3d12.892198287415889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1546c4e1d3ed%3A0x6a51b2820857f8dc!2sApollo%20Clinic%20-%20Best%20Multi%20Specialty%20Clinic%20in%20JP%20Nagar%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1683382156841!5m2!1sen!2sin"
          ></iframe>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            minLength="3"
            maxLength="30"
            name="name"
            placeholder="Patient Name"
            required
          />
          <div className="email-phone">
            <input
              onChange={handleEmailChange}
              type="email"
              name="email"
              placeholder="Patient Email Address"
              required
            />
            <input
              onChange={handlePhoneChange}
              type="text"
              name="phone"
              placeholder="Patient Phone Number"
              required
            />
          </div>
          <select name="message" required>
            <option value="" disabled selected>
              Choose a service
            </option>
            <option value="Teeth Cleaning">Teeth Cleaning</option>
            <option value="Tooth Extractions">Tooth Extractions</option>
            <option value="Wisdom Tooth Removal">Wisdom Tooth Removal</option>
            <option value="Children Dentistry">Children Dentistry</option>
            <option value="Braces Procedures">Braces Procedures</option>
            <option value="Dental Fillings">Dental Fillings</option>
            <option value="Tooth Injury">Tooth Injury</option>
            <option value="Gum and Oral Health">Gum and Oral Health</option>
          </select>
          <div className="contact__btn-group">
            <button
              type="submit"
              className={!isSuccess ? "btn btn-secondary" : "btn btn-success"}
            >
              {!isSuccess
                ? "Book Appoitment"
                : "Appointment Booked Successfully"}
            </button>
            <span
              className={isError ? "contact__error" : "contact__error hide"}
            >
              {!validEmail && !validPhone
                ? "Invalid Email and Number"
                : !validEmail && validPhone
                ? "Invalid Email"
                : !validPhone && validEmail
                ? "Invalid Phone Number"
                : ""}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
