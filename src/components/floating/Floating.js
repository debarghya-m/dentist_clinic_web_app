import React, { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import "./floating.css";
const Floating = () => {
  const [isShow, setShow] = useState(false);
  const contactWhatsapp = () => {
    window.open("https://wa.me/+916387111865");
  };
  const contactNumber = () => {
    window.open("tel:+916387111865");
  };
  window.addEventListener("scroll", (e) => {
    let position =
      ((document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
      100;
    position > 1 && position <= 99 && window.innerWidth < 600
      ? setShow(true)
      : setShow(false);
  });
  return (
    <div className={isShow ? "float-contact display" : "float-contact hide"}>
      <BiPhoneCall className="sticky-icon-phone" onClick={contactNumber} />
      <FaWhatsapp className="sticky-icon-whatsapp" onClick={contactWhatsapp} />
    </div>
  );
};

export default Floating;
