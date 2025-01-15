import { experiences } from "@/utils/constants";
import React from "react";

const ExperienceSection = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border-l-2 border-gray-200 pl-8 relative hover:border-gray-400 transition-colors duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-white border-2 border-gray-200 rounded-full left-0 top-0 -translate-x-2"></div>

              {/* Experience content */}
              <div className="space-y-2">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.role}
                  </h3>
                  <span className="text-gray-500">{exp.period}</span>
                </div>

                <div className="text-gray-600 font-medium">{exp.company}</div>

                <p className="text-gray-600 leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
