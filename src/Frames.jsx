import React from "react";
import color1 from "/color1.png";
import color2 from "/color2.png";

const Frames = () => {
  const returnToTop = () => {
    const contentSection = document.getElementsByClassName("header")[0];
    contentSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="frames">
        <img src={color1} alt="" />
        <hr />
        <img src={color2} alt="" />
        <hr />
      </div>

      <button id="back" onClick={returnToTop}>
        ▲
      </button>
    </>
  );
};

export default Frames;
