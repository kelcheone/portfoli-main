import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { fadingUp, routeAnimation, stagger } from "../animations";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavBar from "../components/ProjectsNavBar";
import { projects as projectsData } from "../data";
import { Category } from "../type";

function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
      className="px-5 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Kelche | Projects </title>
      </Head>
      <h1 className="text-5xl text-red-400"> Update in progress</h1>
      <nav>
        <ProjectsNavBar
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />
      </nav>

      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3 overflow-y-scroll"
        style={{ height: "65vh" }}
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            key={project.name}
            variants={fadingUp}
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
