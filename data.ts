import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { MdDeveloperMode } from "react-icons/md";
import { IService, ISkill } from "./type";
import {
  SiGraphql,
  SiSolidity,
  SiPython,
  SiReact,
  SiElectron,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b>Tailwind</b>,<b> SCSS</b> <b>Next.js</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Node  GraphQL/ API</b>  & <b>Node REST API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: ISkill[] = [
  {
    name: "JavaScript",
    level: "90%",
    Icon: DiJavascript1,
  },
  {
    name: "Solidity",
    level: "70%",
    Icon: SiSolidity,
  },
  {
    name: "Python",
    level: "70%",
    Icon: SiPython,
  },
  {
    name: "React",
    level: "60%",
    Icon: SiReact,
  },
  {
    name: "Next",
    level: "60%",
    Icon: SiNextdotjs,
  },
  {
    name: "Node.js",
    level: "60%",
    Icon: SiNodedotjs,
  },
  {
    name: "GraphQL",
    level: "60%",
    Icon: SiGraphql,
  },
  {
    name: "Electron",
    level: "50%",
    Icon: SiElectron,
  },
  {
    name: "MongoDB",
    level: "50%",
    Icon: SiMongodb,
  },
];

export const tools: ISkill[] = [
  {
    name: "Truffle",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Hardhat",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Web3js",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Ethersjs",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "IPFS",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "Chainlink",
    level: "40%",
    Icon: BsCircleFill,
  },
];
