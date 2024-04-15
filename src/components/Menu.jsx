import React from "react";
import PastriesCard from "../layouts/PastriesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Special Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <PastriesCard img={menu1} title="Assorted Doughnuts" price="$16.99" />
        <PastriesCard img={menu2} title="Cocoa Cupcakes" price="$18.99" />
        <PastriesCard img={menu3} title="Sweet Raspberry macarons" price="$14.99" />
      </div>
    </div>
  );
};

export default Menu;
