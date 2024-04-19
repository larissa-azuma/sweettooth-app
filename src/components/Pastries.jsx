import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import PastriesCard from "../layouts/PastriesCard";

const Pastries = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Pastries
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <PastriesCard img={img1} title="Strawberry Cake" price="GHC450" />
        <PastriesCard img={img2} title="Berry macarons" price="GHC190" />
        <PastriesCard img={img3} title="Choco fudge" price="GHC100" />
        <PastriesCard img={img4} title="Strawcream cake" price="GHC100" />
        <PastriesCard img={img5} title="Waffle berries" price="GHC105" />
        <PastriesCard img={img6} title="Berry icecream" price="GHC103" />
      </div>
      <div className=" flex flex-wrap gap-8 justify-center">
        <PastriesCard img={img1} title="Strawberry Cake" price="GHC450" />
        <PastriesCard img={img2} title="Berry macarons" price="GHC190" />
        <PastriesCard img={img3} title="Choco fudge" price="GHC100" />
        <PastriesCard img={img4} title="Strawcream cake" price="GHC100" />
        <PastriesCard img={img5} title="Waffle berries" price="GHC105" />
        <PastriesCard img={img6} title="Berry icecream" price="GHC103" />
      </div>
    </div>
  );
};

export default Pastries;
