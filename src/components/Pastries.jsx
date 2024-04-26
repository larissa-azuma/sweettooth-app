import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import pic9 from "../assets/img/pic9.jpg";
import pic11 from "../assets/img/pic11.jpg";
import PastriesCard from "../layouts/PastriesCard";

const Pastries = () => {
  return (
    <div className=" min-h-screen  justify-center items-center px-10 ">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Pastries
      </h1>

      <div className="md:grid grid-cols-4 gap-4  justify-center">
        <PastriesCard img={img1} title="Strawberry Cake" price="GHC450" />
        <PastriesCard img={img2} title="Cotton Cake" price="GHC190" />
        <PastriesCard img={img3} title="Icy Cake" price="GHC100" />
        <PastriesCard img={img4} title="Strawcream cake" price="GHC100" />
        <PastriesCard img={img5} title="Shadow Cake" price="GHC405" />
        <PastriesCard img={pic9} title="Snowy" price="GHC405" />
        <PastriesCard img={pic11} title="Cheesy" price="GHC 405" />
        <PastriesCard img={img6} title="Berry icecream" price="GHC408" />
      </div>
     
    </div>
  );
};

export default Pastries;

