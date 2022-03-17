import React, { useState } from "react";
// import "./BacktopStyle.css";

const Backtop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className="gototopButton"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <i className="fal fa-angle-up"></i>
    </button>
  );
};

export default Backtop;
