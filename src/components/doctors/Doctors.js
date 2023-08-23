import React, { useState, useEffect } from "react";
import { Navigation, FreeMode, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import doctor1 from "../../assets/doctor1.jpg";
import doctor2 from "../../assets/doctor2.jpg";
import doctor3 from "../../assets/doctor3.jpg";
import doctor4 from "../../assets/doctor4.jpg";
import doctor5 from "../../assets/doctor5.jpg";
import doctor6 from "../../assets/doctor6.jpg";
import doctor7 from "../../assets/doctor7.jpg";
import doctor8 from "../../assets/doctor8.jpeg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./doctors.css";
const Doctors = () => {
  let testimonialList = [
    {
      name: "Dr. Aakanksha sharma",
      education: "BDS",
      image: doctor1,
      registration: "17260",
      language: "Hindi, English, Kannada",
    },
    {
      name: "Dr. Shahabaz Ahmed",
      education: "MDS(Prosthodontics)",
      image: doctor2,
      registration: "22051-A",
      language: "Hindi, English, Kannada",
    },
    {
      name: "Dr. Neelam Lodhi",
      education: "BDS, MDS(Periodontology)",
      image: doctor3,
      registration: "33621 A",
      language: "Hindi, English",
    },
    {
      name: "Dr. M. Vinoth",
      education: "MDS(OMFS),MFD RCS(IRELAND)",
      image: doctor4,
      registration: "TNSDC 17143",
      language: "English, Kannada, Tamil, Malayalam, Hindi",
    },
    {
      name: "Dr. Sagar S Bhat",
      education: "BDS, MDS, FAGE(Manipal)",
      image: doctor5,
      registration: "40140 A",
      language: "Kannada, English, Hindi, Telugu, Tulu",
    },
    {
      name: "Dr. Pavithra Prabakaran",
      education: "MDS(conservative dentistry & endodontics)",
      image: doctor6,
      registration: "40630 A",
      language: "Hindi, English, Kannada, Tamil",
    },
    {
      name: "Dr. Vaibhav N",
      education: "BDS(Oral & Maxillofacial Surgery)",
      image: doctor7,
      registration: "KSDC- 24288 A",
      language: "Hindi, English, Kannada",
    },
    {
      name: "Dr. Sijo C Kovelil",
      education: "BDS",
      image: doctor8,
      registration: "54890 A",
      language: "Hindi, English, Kannada, Malayalam",
    },
  ];
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  const [activeThumb, setActiveThumb] = useState("Dr. Aakanksha sharma");
  const handleActive = (thumb) => {
    setActiveThumb(thumb);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section id="doctors" className="doctor-section">
        <p>OUR SPECIALIST</p>
        <h2>Expert dentists behind that perfect smile</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={width < 600 ? 1 : width < 1024 ? 1.5 : 3}
          centeredSlides={true}
          allowTouchMove={false}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className="doctor-slide"
        >
          {testimonialList.map((element, index) => (
            <SwiperSlide key={index}>
              <div className="doctor-box">
                <img
                  className="doctor-box-avator"
                  src={element.image}
                  alt={element.name}
                />
                <div className="doctor-box-details">
                  <h3>{element.name}</h3>
                  <p>{element.education} </p>
                  <p>Reg no: {element.registration}</p>
                  <p>{element.language}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {testimonialList.map((element, index) => (
            <SwiperSlide key={index}>
              <div className="doctor-box">
                <img
                  className="doctor-box-avator"
                  src={element.image}
                  alt={element.name}
                />
                <div className="doctor-box-details">
                  <h3>{element.name}</h3>
                  <p>{element.education} </p>
                  <p>Reg no: {element.registration}</p>
                  <p>{element.language}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={width < 600 ? 5 : 20}
          slidesPerView={testimonialList.length}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumb-slide"
        >
          {testimonialList.map((element, index) => (
            <SwiperSlide
              key={index}
              className="doctor-thumb"
              onClick={() => handleActive(element.name)}
            >
              <div className="doctor-thumb-box">
                <img
                  className={
                    activeThumb === element.name
                      ? "thumb-avator active"
                      : "thumb-avator"
                  }
                  src={element.image}
                  alt={element.name}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Doctors;
