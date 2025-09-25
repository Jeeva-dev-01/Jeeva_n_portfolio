import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6a36746e-8284-409f-9eca-02a6dfabc6e9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center  bg-[length:90%_auto]"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center mb-3 text-lg"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        className="text-center text-5xl mb-10"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Get in touch
      </motion.h2>
      <motion.p
        className="text-center text-xl mb-8 mt-5 mx-auto max-w-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        I'd love to hear from you! If you have any question , comments, or
        feedback, please use the form below
      </motion.p>
      <motion.form
        className="max-w-2xl m-auto"
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <div className="flex flex-col gap-6 mb-7  sm:flex-row justify-center">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder="Enter your  name"
            className="outline-none border-1 border-gray-400 rounded-md bg-white flex-1 p-3"
            name="name"
            required
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder="Enter your email"
            className="outline-none border-[0.5px] border-gray-400 rounded-md bg-white flex-1 p-3"
            name="email"
            required
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows={6}
          placeholder="Enter your message"
          className="w-full p-4 outline-none border-1 border-gray-400 rounded-md bg-white mb-6"
          name="message"
          required
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded mx-auto hover:bg-black duration-500 rounded-md"
        >
          Submit now
        </motion.button>
        <motion.p className="mt-4">{result}</motion.p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
