import React from "react";
import { assets, serviceData } from "@/assests/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        What I offer
      </motion.h4>
      <motion.h2
        className="text-center text-5xl"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My services
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        I enjoy turning ideas into interactive, responsive web experiences using
        React and Tailwind CSS. I focus on writing clean, efficient code that
        delivers an enjoyable user experience.
      </motion.p>
      <motion.div
        className="grid grid-cols-autos  justify-center gap-12  my-10 sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]"
        initial={{ opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        {serviceData.map((item, index) => {
          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-10  hover:-translate-y-1 transistion duration-500 boxshadowblack hover:bg-rose-100"
            >
              <Image src={item.icon} alt="webicon" className="w-10"></Image>
              <h3 className="text-lg my-4 text-gray-700">{item.title}</h3>
              <p className="text-base text-gray-600">{item.description}</p>
              <a href="" className="flex items-center gap-2 text-sm mt-5">
                Read more
                <Image
                  src={assets.right_arrow}
                  className="w-4"
                  alt="rightarrrow"
                ></Image>
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Services;
