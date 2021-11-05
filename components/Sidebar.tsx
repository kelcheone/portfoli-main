import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/80192475?v=4"
          alt="Profile pic"
          className="w-32 h-32 rounded-full"
        />
      </div>

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Kevin </span>Kelche
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Software Developer
      </p>
      <p>
        <a
          className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
          href=""
          download="name"
        >
          <GiTie className="w-6 h-6" />
          Download Resume
        </a>
      </p>
      {/* //Social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="https://github.com/kelcheone" target="_blank" rel="noreferrer">
          <BsGithub className="py-1 cursor-pointer w-7 h-7" />
        </a>

        <a
          href="https://discord.com/users/Kelche#3557"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord className="py-1 cursor-pointer w-7 h-7" />
        </a>

        <a
          href="https://twitter.com/kelcheone"
          target="_blank"
          rel="noreferrer"
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
        >
          <BsLinkedin className="py-1 cursor-pointer w-7 h-7" />
        </a>
      </div>

      {/* address info */}

      <div
        className="py-5 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Nairobi, Kenya </span>
        </div>
        <p className="my-2"> kelcheone@gmail.com</p>
        <p className="my-2">+25410015474</p>
      </div>
      {/* Email Me */}
      <button
        className="w-9/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto: kelcheone@gmail.com")}
      >
        Email Me
      </button>
      <button className="w-9/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
        Toggle Theme
      </button>
    </div>
  );
}

export default Sidebar;
