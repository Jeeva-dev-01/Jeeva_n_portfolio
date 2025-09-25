import { assets, infoList, toolsData } from "@/assests/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-3 text-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About me
      </motion.h2>
      <motion.div
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-70 sm:80 rounded-3xl max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={assets.fullimage}
            className="w-full rounded-3xl"
            alt="user"
          ></Image>
        </motion.div>
        <motion.div
          className="flex-1 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="mb-8 max-w-2xl">
            Passionate about building responsive, high-performance web
            applications that deliver excellent user experiences. Skilled in
            React.js, JavaScript (ES6+), TypeScript, SASS, and Tailwind CSS,
            creating clean, maintainable, and scalable UI components
          </p>
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {infoList.map((item, index) => {
              return (
                <motion.li
                  whileInView={{ opacity: 1.05 }}
                  key={index}
                  className="rounded-xl  border-gray-400 border-[0.5px] p-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 transistion duration-500 boxshadowblack hover:bg-rose-100"
                >
                  <Image
                    src={item.icon}
                    alt="icon"
                    className="align-middle w-7 mt-3"
                  ></Image>
                  <h3 className="my-4 font-semibold text-gray-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.li>
              );
            })}
          </motion.ul>
          <motion.h4
            className="my-6 text-gray-700 "
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Tools I used
          </motion.h4>
          <motion.ul
            className="flex items-center gap-3 sm:gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            {toolsData.map((item, index) => {
              return (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  className="flex items-center justify-center w-13 sm:w-14 aspect-square border border-gray-800 rounded-lg cursor-pointer hover:-translate-y-1 transistion duration-500 "
                >
                  <Image src={item} alt="tool" className="w-12 sm-w-7 "></Image>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
