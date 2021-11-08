import { useTheme } from "next-themes";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";

function Sidebar() {
  const { setTheme, theme } = useTheme();
  const [themeName, current] = useState("Change Theme");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const setCurrentTheme = () => {
    if (theme === "light") {
      current("Go Light");
    } else if (theme === "dark") {
      current("Go dark");
    }
  };

  return (
    <div className="shaddow-3xl">
      <div className="flex items-center justify-center">
        <Image
          src="https://avatars.githubusercontent.com/u/80192475?v=4"
          alt="Profile pic"
          className="w-32 h-32 rounded-full"
          height="128"
          width="128"
          layout="intrinsic"
          quality="100"
        />
      </div>

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Kevin </span>Kelche
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Software Developer
      </p>
      <p>
        <a
          className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
          href="/assets/Resume.pdf"
          download="Resume.pdf"
        >
          <GiTie className="w-6 h-6" />
          Download Resume
        </a>
      </p>
      {/* //Social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a
          href="https://github.com/kelcheone"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <BsGithub className="py-1 cursor-pointer w-7 h-7" />
        </a>

        <a
          href="https://discord.com/users/Kelche#3557"
          target="_blank"
          rel="noreferrer"
          aria-label="Discord"
        >
          <FaDiscord className="py-1 cursor-pointer w-7 h-7" />
        </a>

        <a
          href="https://twitter.com/kelcheone"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <BsTwitter className="py-1 cursor-pointer w-7 h-7" />
        </a>
        <a href="https://t.me/kelcheone" target="_blank" rel="noreferrer">
          <FaTelegramPlane className="py-1 cursor-pointer w-7 h-7" />
        </a>
        <a
          href="https://www.linkedin.com/in/kevin-cheruiyot-76459a214/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin className="py-1 cursor-pointer w-7 h-7" />
        </a>
      </div>

      {/* address info */}

      <div
        className="py-5 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Nairobi, Kenya </span>
        </div>
        <p className="my-2"> kelcheone@gmail.com</p>
        <p className="my-2">+254110015474</p>
      </div>
      {/* Email Me */}
      <button
        className="w-9/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto: kelcheone@gmail.com")}
      >
        Email Me
      </button>
      <button
        className="w-9/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
        onClick={() => {
          changeTheme();
          setCurrentTheme();
        }}
      >
        {themeName}
      </button>
    </div>
  );
}

export default Sidebar;
