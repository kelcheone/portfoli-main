import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadingUp, routeAnimation } from "../animations";

function resume() {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* education and exprience */}
      <div className="grid gap-6 md:grid-cols-2 ">
        <motion.div variants={fadingUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Development</h5>
            <p className="font-semibold"> KCA University (2019- 2023)</p>
            <p className="my-3">
              I am currently persuing Bachalor of Science in Software
              Development from KCA University.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadingUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Open Source contributor</h5>
            <p className="font-semibold"> GitCoin (Aug 2020- present)</p>
            <p className="my-3">
              I have worked on various projects as a contributor, bug bounty
              hunter and hackathon participant with protocols like the badger
              Dao, gitcoin Dao, etc. etc.
            </p>
          </div>
        </motion.div>
      </div>
      {/* languages & tools */}
      <div className="grid gap-6 md:grid-cols-2 ">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((lang) => (
              <Bar data={lang} key={lang.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default resume;
