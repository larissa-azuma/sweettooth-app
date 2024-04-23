import React, { useState } from "react";
import { Link } from "react-scroll";
import { GrRestaurant } from "react-icons/gr";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../layouts/Button";
import { Link as SLink } from "react-router-dom";
import Login from "../page/Login";



const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className=" fixed w-full">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
            <span>
              <GrRestaurant size={32} />
            </span>
            <SLink to="/">
              <h1 className=" text-lg font-semibold">SweetTooth</h1>
            </SLink>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>

            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="pastries"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Pastries
                </Link>

                <BiChevronDown className="cursor-pointer" size={25} />
              </div>

              <ul className=" bg-orange-50 absolute hidden space-y-2 group-hover:block bg-pink border border-gray-300 rounded-lg p-5">
                <li>
                  <Link
                    to="pastries"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Vanilla
                  </Link>
                </li>
                <li>
                  <Link
                    to="pastries"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Strawberry
                  </Link>
                </li>
                <li>
                  <Link
                    to="pastries"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Chocolate
                  </Link>
                </li>
                <li>
                  <Link
                    to="pastries"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    cookies
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>

            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Menu
            </Link>

            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Reviews
            </Link>
            <SLink to="/login">
              <Button title="Login" />
            </SLink>

            <SLink to="/register">
              <Button title="Register" />
            </SLink>
            
          
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="pasries"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Pastries
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Reviews
          </Link>
          <SLink to="/login">
            <Button title="Login" />
          </SLink>
          <SLink to="/register">
            <Button title="Register" />
          </SLink>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
