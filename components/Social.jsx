"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  // { icon: <FaGithub />, path: "https://github.com/HZero-IONova" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rhag" },
  // { icon: <FaInstagram />, path: "https://www.instagram.com/ionova.io/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
