import React from "react";
import img from "../assets/img/about.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
         SweetTooth Pastries is a pastry and sweet confectionery hub where all your dreams of tasty delicious , moist ,healthy and fresh pastries are served with love whenever you order from us. We also deliver customised pastries with just a call or text away. Making our clients happy is our number one  priority.
        </p>

        <div className=" flex justify-center lg:justify-start"></div>
      </div>
    </div>
  );
};

export default About;
