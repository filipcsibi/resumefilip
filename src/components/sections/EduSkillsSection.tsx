"use client";

import {
  certifications,
  education,
  skills,
  volunteering,
} from "@/utils/constants";
import React from "react";

const EduSkillsSection = () => {
  return (
    <div className="min-h-screen bg-white py-15 px-4 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-12">
          {/* Education Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {edu.school}
                </h3>
                <p className="text-gray-600">{edu.degree}</p>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-gray-500">{edu.location}</span>
                  <span className="text-gray-500">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Technical</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Software</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.software.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-12">
          {/* Certifications Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-6">
                  <h3 className="font-semibold text-gray-800">{cert.title}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-gray-600">{cert.issuer}</span>
                    <span className="text-gray-500">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Volunteering
            </h2>
            {volunteering.map((vol, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6">
                <h3 className="font-semibold text-gray-800">{vol.role}</h3>
                <p className="text-gray-600 mt-1">{vol.organization}</p>
                <p className="text-gray-600 mt-2">{vol.description}</p>
                <ul className="list-disc list-inside mt-2">
                  {vol.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduSkillsSection;
