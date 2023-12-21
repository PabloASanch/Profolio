import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaMdb,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

export const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.33 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        className="hero bg-base-200 mt-64 ml-5 flex-col"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <motion.h1
              className="text-5xl font-bold flex gap-3"
              variants={itemVariants}
            >
              Hello! I am a{" "}
              <span className="text-border drop-shadow-[0_1.4px_10px_rgba(0,0,0,0.8)]">
                <motion.p variants={itemVariants}>
                  front-end
                </motion.p>
              </span>{" "}
              developer
              <span className="wave drop-shadow-[0_1.4px_10px_rgba(0,0,0,0.8)]">
                👋
              </span>
            </motion.h1>
            <motion.div
              className="flex gap-6 align-middle mt-3 items-center"
              variants={itemVariants}
            >
              <p className="text-xl">- Pablo Sanchez</p>
              <motion.div
                className="flex gap-2 align-middle items-center"
                variants={itemVariants}
              >
                <a href="https://github.com/pablosanch423">
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <FaGithub className="text-2xl cursor-pointer hover:scale-125 transition-transform" />
                  </motion.div>
                </a>
                <a href="#">
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <FaLinkedin className="text-2xl cursor-pointer hover:scale-125 transition-transform " />
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            className="mt-24 flex align-middle justify-center gap-8 items-center"
            variants={itemVariants}
          >
            <motion.div
              className="flex gap-2 items-center"
              variants={itemVariants}
            >
              <FaHtml5 className="text-4xl cursor-pointer hover:scale-125 transition-transform " />
              <FaCss3 className="text-3xl cursor-pointer hover:scale-125 transition-transform " />
              <FaJs className="text-4xl cursor-pointer hover:scale-125 transition-transform " />
            </motion.div>
            ---
            <motion.div
              className="flex gap-2 items-center"
              variants={itemVariants}
            >
              <FaReact className="text-4xl cursor-pointer hover:scale-125 transition-transform " />
              <FaNodeJs className="text-4xl cursor-pointer hover:scale-125 transition-transform " />
              <FaMdb className="text-4xl cursor-pointer hover:scale-125 transition-transform " />
            </motion.div>
            ---
            <motion.div
              className="flex gap-2 items-center"
              variants={itemVariants}
            >
              <FaJava className="text-4xl cursor-pointer hover:scale-125 transition-transform " />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
