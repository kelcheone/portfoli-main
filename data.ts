import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaEthereum } from "react-icons/fa";
import { AiFillBug, AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { DiJava, DiJavascript1 } from "react-icons/di";
import {GrGolang, GrMysql} from "react-icons/gr"
import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService, ISkill } from "./type";
import {
  SiGraphql,
  SiSolidity,
  SiPython,
  SiReact,
  SiElectron,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiPostgresql,
  SiGoland,
} from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "I design and build scalable servers and databses using <b>Node, Express, Postgress, FastAPI</b> & <b>MongoDB</b> I also user various api streaming services such as Kafka and gRPC",
  },
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I build webapps and decentralized frontends <b>Tailwind CSS</b>,<b> SCSS</b>, <b>Next.js</b>   and <b>Svelte.js</b> ",
  },
  {
    Icon: FaEthereum,
    title: "dApp(DEFI & NFTs) Development",
    about:
      "I build secure and gass efficient smart contracts primarily using <b> Solidity </b> on any EVM compatible chain.",
  },
  {
    Icon: AiOutlineApi,
    title: "API and Subgraph Development",
    about:
      "I  design and develop robust REST APIs and graphQl API Subgraphs using <b>The Graph</b>",
  },
  {
    Icon: AiFillBug,
    title: "Smart Contract Auditing",
    about:
      "I do independent smart contract auditing and bounty hunter and do postmortems",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designing",
    about:
      "I do stunning user interface design using <b>Figma</b>  and  <b>Framer</b> ",
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
    name: "Java",
    level: "60%",
    Icon: DiJava,
  },
  {
    name: "Postgres",
    level: "60%",
    Icon: SiPostgresql,
  },
  {
    name: "Typescript",
    level: "50%",
    Icon: SiTypescript,
  },
  {
    name: "Go",
    level: "50%",
    Icon: SiGoland,
  }, 
  {
    name: "MySQL",
    level: "50%",
    Icon: GrMysql,
  },
];

export const tools: ISkill[] = [
  {
    name: "Docker",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "GraphQL",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Kafka",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "gRPC",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "IPFS",
    level: "60%",
    Icon: BsCircleFill,
  },

  {
    name: "Hardhat",
    level: "50%",
    Icon: BsCircleFill,
  },

  {
    name: "Chainlink",
    level: "40%",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["React"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 2,
    name: "Algorithm Visualizer",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    category: ["React"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    id: 3,
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "mongo", "React"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    id: 4,
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["node", "React"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    id: 5,
    name: "Tweeter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["django", "React"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    id: 6,
    name: "Color Classification using tf.js",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: ["express"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    id: 7,
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["express"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    id: 8,
    name: "Football App",
    image_path: "/images/football.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["React"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];
