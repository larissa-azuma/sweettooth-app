import React from "react";
import PastriesCard from "../layouts/PastriesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen  justify-center items-center px-32 ">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Special Menu
      </h1>

      <div className=" md:grid grid-cols-3 gap-4  justify-center">
        <PastriesCard img={menu1} title="Assorted Biscuits" price="GHC109" />
        <PastriesCard img={menu2} title="Snow Doughnuts" price="GHC109" />
        <PastriesCard
          img={menu3}
          title="Assorted Doughnuts"
          price="GHC107"
        />
      </div>
    </div>
  );
};

export default Menu;
