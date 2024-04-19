import React from "react";

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Pastries from "../components/Pastries";
import About from "../components/About";
import Menu from "../components/Menu";
import Review from "../components/Review";
import Login from "./Login";
import Register from "./Register";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <div>
        <Navbar />

        <main>
          <div id="home">
            <Home />
          </div>

          <div id="pastries">
            <Pastries />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="menu">
            <Menu />
          </div>

          <div id="review">
            <Review />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
