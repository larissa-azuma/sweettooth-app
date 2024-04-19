import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className=" h-dvh  flex justify-center bg-[url('./assets/img/pic7.jpg')] bg-cover  bg-center bg-no-repeat ">
      <div className=" text-center m-auto py-28 w-1/2 text-white">
        <h2 className="m-auto font-semibold text-7xl">
         
        
        <Typewriter 
        onInit={(typewriter) => {
          typewriter
            .typeString("Welcome to SweetTooth")
            .pauseFor(2000)
            .deleteAll()
            .typeString("a place where")
            .pauseFor(2000)
            .deleteAll()
            .typeString("your taste buds comes alive")
            .start();
        }}
        />
        </h2>
      </div>
    </div>
  );
};

export default Home;
