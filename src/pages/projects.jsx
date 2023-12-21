import React from 'react';
import ProjectCard from '../comps/ProjectCard'; 
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'BasketBlogy!',
      image: '/basketblogy.png',
      description: 'BasketBlogy! is a full-stack web application for basketball enthusiasts and bloggers to create, manage, and share basketball-related content.',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Work App',
      description: 'A productivity app to manage your daily tasks and enhance work efficiency.',
      tags: ['React', 'Firebase', 'Material-UI'],
    },
    {
      title: 'Chat App',
      description: 'A real-time messaging application to connect with friends and colleagues.',
      tags: ['React', 'Node.js', 'Socket.io'],
    },
    {
      title: 'Next App',
      description: 'A real-time messaging application to connect with friends and colleagues.',
      tags: ['React', 'Node.js', 'Socket.io'],
    },
    {
      title: 'Student Management',
      description: 'A real-time messaging application to connect with friends and colleagues.',
      tags: ['React', 'Node.js', 'Socket.io'],
    },
    {
      title: 'To Do App',
      description: 'A real-time messaging application to connect with friends and colleagues.',
      tags: ['React', 'Node.js', 'Socket.io'],
    },
  ];

  const pageVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  };

  const projectContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.35 } },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.main
      className="p-6"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <div className="wrapper mt-5">
        <h1 className="text-4xl font-bold">My Projects</h1>
      </div>

      <motion.div
        className="flex justify-center items-center flex-wrap gap-8 mt-12"
        variants={projectContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  );
};

export default Projects;
