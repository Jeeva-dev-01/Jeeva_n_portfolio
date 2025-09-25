import { assets } from "@/assests/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 ">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.cropped_circle_image}
          className="w-40 mt-20"
          alt="myimg"
        ></Image>
      </motion.div>

      <motion.h3
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 "
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi! I,m Jeeva <Image src={assets.hand_icon} alt="handicon"></Image>
      </motion.h3>
      <motion.h1
        className="text-3xl sm:text-6xl lg:text-[66px]"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        frontend web developer based in Chennai
      </motion.h1>
      <motion.p
        className="max-w-2xl mx-auto "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        I am Frontend Developer with 3 years of experience at TCS, specializing
        in building responsive and user-friendly web applications using modern
        technologies like React.js, JavaScript, Tailwind CSS,SCSS,Redux and
        HTML/CSS
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt="arrowright"
            className="w-4"
          ></Image>
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="/Jeeva_Resume.pdf"
          download="Jeeva_Resume.pdf"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 "
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="download"
            className="w-4"
          ></Image>
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
