import { assets } from "@/assests/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkmode, setIsdarkmode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuref = useRef();

  const closemenu = () => {
    sideMenuref.current.style.transform = "translateX(0rem)";
  };
  const openemenu = () => {
    sideMenuref.current.style.transform = "translateX(-16rem)";
  };
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (scrollY > 50) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      },
      []
    );
  });
  return (
    <>
      <div className=" fixed top-0 right-0 w-11/12 translate-y-[-80%] -z-10 ">
        <Image
          src={assets.header_bg_color}
          alt="head-bgcolor"
          className="w-full"
        ></Image>
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-transparent bg-opacity-50 backdrop-blur-3xl shadow-sm"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            src={assets.Mylogonew}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          ></Image>
        </a>
        <ul
          className={`hidden md:flex items-center justify-between gap-8 lg:gap-8 rounded-full px-12 py-3${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          } `}
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {/* <button
            onClick={() => {
              setIsdarkmode((cur) => !cur);

              console.log("clicked");
            }}
          >
            <Image
              src={assets.moon_icon}
              alt="changetheme"
              className="w-6"
            ></Image>
          </button> */}
          <a
            href="#contact"
            className="hidden  lg:flex items-center gap-3 py-1 border-2 px-8 rounded-full ml-4 border-gray-500 mt-2"
          >
            contact
            <Image
              alt="arrowicon"
              src={assets.arrow_icon}
              className="w-3"
            ></Image>
          </a>
          <button className="block md:hidden ml-3" onClick={openemenu}>
            <Image src={assets.menu_black} alt="menu" className="w-6"></Image>
          </button>
        </div>

        {/* mobileview */}

        <ul
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transistion duration-500"
          ref={sideMenuref}
        >
          <div className="absolute right-6 top-6" onClick={closemenu}>
            <Image
              src={assets.close_black}
              alt="closeicon"
              className="cursor-pointer w-5"
            ></Image>
          </div>
          <li>
            <a href="#top" onClick={closemenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#top" onClick={closemenu}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={closemenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closemenu}>
              My work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closemenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
