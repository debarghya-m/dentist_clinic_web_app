import React, { useState } from "react";
import "./home.css";
import axios from "axios";
import girlImg from "../../assets/aa.jpg";
import { useRef } from "react";
const Home = () => {
  const bookRef = () => {
    window.location.href = "#pricing";
  };
  const [validPhone, setValidPhone] = useState(false);
  const [validName, setValidName] = useState("");
  const [validSelect, setValidSelect] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const form = useRef();
  const regPhone = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const handlePhoneChange = (event) => {
    if (event.target.value.match(regPhone)) {
      setValidPhone(true);
    } else {
      setValidPhone(false);
    }
  };
  const handleNameChange = (event) => {
    setValidName(event.target.value);
  };
  const handleSelectChange = (event) => {
    setValidSelect(event.target.value);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (validPhone) {
      const data = {
        name: e.target.name.value,
        email: "deb.mvjce@gmail.com",
        phoneNumber: e.target.phone.value,
        service: e.target.message.value,
        domain: "akansha",
      };
      setSuccess(true);
      axios.post("https://api.avineek.com/api/mail", data).then(
        (res) => {
          e.target.reset();
          e.target.message.value = "";
          setTimeout(() => {
            setSuccess(false);
          }, 1000);
        },
        (err) => {
          console.log(err);
        }
      );
      // fetch("https://api.avineek.com/api/mail", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //   },
      // })
      //   .then(() => {
      //     e.target.reset();
      //     e.target.message.value = "";
      //     setTimeout(() => {
      //       setSuccess(false);
      //     }, 2000);
      //   })
      //   .catch((err) => {
      //     setSuccess(true);
      //     e.target.reset();
      //     e.target.message.value = "";
      //     setTimeout(() => {
      //       setSuccess(false);
      //     }, 2000);
      //   });
    }
  };
  return (
    <div className="home">
      <img src={girlImg} className="girl-img" alt="dentist-bangalore-image" />
      <div className="home-section-description-outer-div">
        <div className="home-section-description-inner-div">
          <p className="welcome">OVER 12,000 HAPPY SMILES DELIVERED</p>
          <h1 className="heading-h1-home">Book A Free Smile</h1>
          <h4 className="description-home">
            We guarantee a hassle-free, personalized and holistic experience
            powered by best-in-class AI technology under the supervision of
            specialized dentists.
          </h4>
          <form ref={form} onSubmit={sendEmail}>
            <select name="message" required onChange={handleSelectChange}>
              <option value="" disabled selected>
                Choose a Dental Issue
              </option>
              <option value="Complete Dental Examination">
                Complete Dental Examination
              </option>
              <option value="Rvg's and Cleaning">Rvg's and Cleaning</option>
              <option value="Fillings and Root Canal">
                Fillings and Root Canal
              </option>
              <option value="Extraction and Cosmetic Dentistry">
                Extraction and Cosmetic Dentistry
              </option>
              <option value="Crown's and Bridge's">Crown's and Bridge's</option>
              <option value="Complete and Partial Denture's">
                Complete and Partial Denture's
              </option>
              <option value=" Implants Aligners, Braces and More">
                Implants Aligners, Braces and More
              </option>
              <option value="ther Dental Problem">Other Dental Problem</option>
            </select>
            <input
              onChange={handleNameChange}
              type="text"
              maxLength="30"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              onChange={handlePhoneChange}
              type="text"
              name="phone"
              placeholder="Your Contact Number"
              required
            />
            <div className="home-btn-group">
              <button
                type="submit"
                className={
                  isSuccess
                    ? "btn btn-success home-btn"
                    : validPhone && validSelect !== "" && validName !== ""
                    ? "btn btn-secondary"
                    : "btn btn-secondary disabled"
                }
              >
                {!isSuccess
                  ? "Book a Free Consultation"
                  : "Appointment scheduled"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
