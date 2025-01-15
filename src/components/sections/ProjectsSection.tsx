"use client";

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "/project1.jpg",
      githubLink: "https://github.com/yourusername/project1",
      liveLink: "https://project1.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      image: "/project2.jpg",
      githubLink: "https://github.com/yourusername/project2",
      liveLink: "https://project2.com",
    },
    {
      id: 3,
      title: "AI Image Generator",
      description:
        "Web application that generates images using AI models with customizable parameters.",
      technologies: ["Python", "FastAPI", "React", "TensorFlow"],
      image: "/project3.jpg",
      githubLink: "https://github.com/yourusername/project3",
      liveLink: "https://project3.com",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img
                  src="/api/placeholder/400/320"
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaGithub size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaExternalLinkAlt size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
