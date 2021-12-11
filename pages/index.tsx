import { motion } from "framer-motion";
import { fadingUp, routeAnimation, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import Head from "next/head";

const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 rounded-lg"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Kelche | Portfolio </title>
      </Head>
      <h4 className="my-3 font-medium">
        I am a a blockchain enthusiast and a software developer. I have 2 years
        in general programming and a year in Solidity development. I am
        currently working on Smart contract security and a research project on
        MEV (Maximal Extractable Value), IoT and Applications of AI in
        Blockchains. Also a part-time B.Science in Software Development at KCA
        University.
      </h4>
      <div
        className="flex-grow p-4 mt-5 bg-gradient-to-r from-green-200 to-blue-200 dark:from-dark-100 dark:to-dark-500"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-bold tracking-wide text-black dark:text-white">
          <i> What's in store for</i> <b>YOU!</b>{" "}
        </h4>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadingUp}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

/*
export const getServerSideProps = async (context: GetStaticPropsContext) => {
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  console.log("SERVER", services);
  return {
    props: {
      services: data.services,
    },
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  console.log("SERVER", services);
  return {
    props: {
      services: data.services,
    },
  };
};
*/
