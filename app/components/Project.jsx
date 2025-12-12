import React from "react";
import { assets, workData } from "@/assests/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Project = () => {
  const points = [
    "Built reusable React components and optimized Redux state management, improving site performance.",
    "Optimized application performance by fine-tuning Redux state and component rendering.",
    "Designed fully responsive and accessible UI following WCAG 2.1 AA, ensuring smooth experience on mobile and desktop.",
    "Implemented automated testing pipelines with Jest and Cypress, catching bugs early and improving release confidence.",
    "Collaborated closely with cross-functional teams, contributing to sprint planning, code reviews, and design discussions.",
  ];

  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-center mb-3 text-xl">Key Project</h1>
      <h3 className="text-center text-5xl mb-10">
        Sainsbury’s Retail Web Platform
      </h3>
      <p className="text-center text-xl mb-8 mt-5 mx-auto max-w-2xl">
        Contributed to the enhancement of Sainsbury’s customer-facing e-commerce
        website, a high-traffic retail platform used across the UK.
      </p>
      <ul className="space-y-2 rounded-2xl  mb-10">
        {points.map((items, index) => {
          return (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              key={index}
              className="relative pl-8  
                       before:content-['★'] before:text-yellow-500 before:absolute before:left-0"
            >
              {items}
            </motion.li>
          );
        })}
      </ul>
      <motion.h3
        className="text-center text-3xl mb-10 mt-10>"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        My Latest work
      </motion.h3>
      <motion.p
        className="text-center text-xl mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid place-items-center gap-6 my-10 
            grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"
      >
        {workData.map((item, index) => {
          return (
            <motion.div
              whileInHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group w-[370px] "
              key={index}
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500  group-hover:bottom-7 ">
                <div>
                  <motion.h2 className="font-semibold">{item.title}</motion.h2>
                  <p className="text-small text-gray-700">{item.description}</p>
                </div>
                <div className="flex gap-4">
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border rounded-full w-12 h-12 flex items-center justify-center border-black group-hover:bg-lime-300 transition duration-1000 "
                  >
                    <Image src={assets.send_icon} className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {workData.length > 1 && (
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          href=""
          className="w-max flex items-center justify-center gap-3 text-gray-700 border-[0.5px] rounded-full border-gray-700 py-1 px-5 text-center m-auto hover:bg-purple-300 transition duration-1000"
        >
          Show more
          <Image
            src={assets.right_arrow_bold}
            alt="rightarrow"
            className="w-4"
          ></Image>
        </motion.a>
      )}
    </motion.div>
  );
};

export default Project;
