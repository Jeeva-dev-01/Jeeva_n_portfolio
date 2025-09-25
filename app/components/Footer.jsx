import { assets } from "@/assests/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={assets.Mylogonew}
          alt="logo"
          className="w-35 mx-auto mb-2"
        ></Image>
        <div className="flex justify-center items-center gap-3 mx-auto mb-6">
          <Image src={assets.mail_icon} alt="logo" className="w-6"></Image>
          jeeva.n.dev01@gmail.com
        </div>
      </div>
      <div className=" sm:flex items-center justify-between border-t border-gray-50-400 mx-[10%] py-6">
        <p>© 2025 Jeeva Natarajan.All rights reserved</p>
        <ul>
          <li>
            <a target="_blank" href="www.linkedin.com/in/jeeva-n-81459818a">
              Linkedin
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/Jeeva-dev-01">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
