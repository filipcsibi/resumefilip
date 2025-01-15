"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import ExperienceSection from "@/components/sections/ExperienceSection";
import { useEffect, useState } from "react";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative bg-white overflow-hidden">
      {/* Landing Section with Parallax */}
      <div className="min-h-screen relative">
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
              backgroundImage:
                "radial-gradient(circle at 1px 1px, gray 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Container for perfect centering */}
        <div className="min-h-screen flex flex-col items-center justify-center">
          {/* Content Wrapper */}
          <div className="flex flex-col items-center space-y-16">
            {/* Main Content */}
            <div
              className="max-w-2xl w-full text-center space-y-6"
              style={{
                transform: `translateY(${scrollY * -0.1}px)`,
              }}
            >
              {/* Name */}
              <h1 className="text-6xl font-bold text-gray-800 tracking-tight animate-fade-in-up">
                John Doe
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 animate-fade-in">
                Full Stack Developer passionate about creating elegant solutions
                to complex problems. Specialized in React, Node.js, and cloud
                architecture.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center space-x-6 pt-4 animate-fade-in">
                <a
                  href="https://github.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors transform hover:-translate-y-1 duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors transform hover:-translate-y-1 duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors transform hover:-translate-y-1 duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={28} />
                </a>
              </div>
            </div>

            {/* Scroll Indicator - now part of the flex column */}
            <div className="animate-bounce ">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll-down"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section with fade-in effect */}
      <div
        style={{
          transform: `translateY(${Math.max(0, (scrollY - 500) * 0.1)}px)`,
          opacity: Math.min(1, Math.max(0, (scrollY - 300) / 400)),
        }}
      >
        <ExperienceSection />
      </div>

      <div
        style={{
          transform: `translateY(${Math.max(0, (scrollY - 1000) * 0.1)}px)`,
          opacity: Math.min(1, Math.max(0, (scrollY - 800) / 400)),
        }}
      >
        <ProjectsSection />
      </div>
    </main>
  );
}
