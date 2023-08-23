import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, FreeMode } from "swiper";
import user1 from "../../assets/rev1.png";
import user2 from "../../assets/rev2.png";
import user3 from "../../assets/rev3.png";
import user4 from "../../assets/rev4.png";
import user5 from "../../assets/rev5.png";

import "./testimonials.css";

const Testimonials = () => {
  let testimonialList = [
    {
      review:
        "I had one of the best dental treatment here. The doctors are very friendly. Dr Aakanksha the resident doctor is very helpful and warm. Dr Arbiya did the Root Canal so painlessly. Dr Shahbaz is very patient and super efficient in the crown measurement and fixation. Ms Divya the coordinator is very helpful in fixing the appointments and super dedicated.",
      name: "CV Subhalaxmi",
      date: "5 months ago",
    },
    {
      review:
        "I visited Dr akansha for my tooth problem which I was suffering from past six months. Pain was very severe and was not able to focus on my work . She examine me and suggested me for extraction . I didn't feel any pain n discomfort and after extraction just for few hours i felt little discomfort. Now I am painfree and happy. ",
      name: "SRIDEVI N",
      date: "6 months ago",
    },
    {
      review:
        "I had gone to Apollo dental clinic for Wisdom tooth removal. Dr Vaibhav performed the procedure with atmost care. He kept me informed about each step which really helped me let go of my fears and relax during the procedure. Dr Akansha and her assistant Divya helped me immensely with the after care. ",
      name: "Dharini Deenadayalan",
      date: "8 months ago",
    },
    {
      review:
        "Great experience.. got clean teeths after very long time.   She gave me confidence to do it...big fan ...Dr Akansha ..... Dr Akansha was great 😃👍... M so happy abt my teeth coz of her .. ...she takes care likes a mom 😍",
      name: "Debo",
      date: "8 months ago",
    },
    {
      review:
        "I would recommend Dr Akanksha to anyone with dental problems because she is professional, skillful and friendly. Also, the clinic is well maintained and seems organized.",
      name: "Hema Gangaswamy",
      date: "8 months ago",
    },
    {
      review:
        "Amazing and experienced dentist with very supportive behaviour . I consulted Dr. Akanksha there and she made me very comfortable.i went there for  crown fixing, im fully satisfied with their treatment.",
      name: "Sagar Santhosh",
      date: "10 months ago",
    },
    {
      review:
        "Amazing and experienced dentist with very supportive behaviour . I consulted Dr. Akanksha there and she made me very comfortable for my dental cleaning and filling .",
      name: "Prashant Kislay",
      date: "10 months ago",
    },
    {
      review:
        "doctor is really great, has a lot of experience in her field. When I first walked in... She listened to me patiently and addressed my concerns. Within few days I was back to normal. I would highly recommend her",
      name: "Vijay Suryavanshi",
      date: "a year ago",
    },
    {
      review:
        "I had consulted dr.aakanksha for a root canal procedure for one of my tooth. She was extremely professional and done all the required procedure with at most care  i am very happy  and definitely refer apollo dental care to my family and friends.",
      name: "Sumalatha Gs",
      date: "a year ago",
    },
    {
      review:
        "The clinic is great, with proper hygiene. The cleaning was done very professionally. Both Dr. Aakanksha Sharma and Dr.Vartika eere excellent and the treatment was precise. They explained the treatment and procedure comprehensively. Very very happy with the results!",
      name: "Nishka manwani",
      date: "a year ago",
    },
    {
      review:
        "Hi, I met with an accident and lost my front 4 teeth.. I had been to many other dental clinics, but they were scared to treat me as I had met with brain injury and was getting fits.. But later we came to this clinic and found Dr. Akansha very friendly and my family felt safe in me getting treated at Apollo.",
      name: "Sherly Shine",
      date: "a year ago",
    },
  ];
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <section id="testimonials" className="testimonials">
      <p>TESTIMONIALS</p>
      <h2>Read what our patients think about us</h2>
      <Swiper
        modules={[Pagination, FreeMode]}
        spaceBetween={10}
        slidesPerView={width < 600 ? 1 : width < 1024 ? 2 : 4}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {testimonialList.map((element, index) => (
          <SwiperSlide key={index} className="testimonial-swiper">
            <div className="testimonialBox">
              <p className="testimonial-date">{element.date}</p>
              <div className="testimonial-about">
                <h4>{element.name}</h4>
                <p>{element.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
