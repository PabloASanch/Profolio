import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { title, image, description, tags } = project;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="project-card w-80 h-96 bg-white rounded-lg shadow-lg p-4"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      whileHover={{ scale: 1.025 }}
    >
      <motion.h3
        className="text-2xl font-bold mb-2"
        variants={textVariants}
      >
        {title}
      </motion.h3>
      <motion.img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <motion.p className="text-gray-600" variants={textVariants}>
        {description}
      </motion.p>
      <motion.div className="mt-4 flex flex-wrap" variants={textVariants}>
        {tags.map((tag, index) => (
          <motion.span
            key={index}
            className="bg-blue-500 text-white rounded-full px-2 py-1 mr-2 mb-2"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
