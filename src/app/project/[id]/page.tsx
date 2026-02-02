"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import { FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { getProjectById } from "../../../utils/constants";

interface PageProps {
  params: Promise<{ id: string }>;
}

const PhoneMockup = ({ image }: { image: string }) => (
  <div className="relative w-[280px] h-[580px]">
    <div className="absolute inset-0 bg-gray-900 rounded-[45px] shadow-xl">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-5 bg-black rounded-b-3xl"></div>
    </div>
    <div className="absolute top-0 left-0 right-0 bottom-0 m-[10px] rounded-[35px] overflow-hidden bg-white">
      <img
        src={image}
        alt="App screenshot"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

export default function ProjectPage({ params }: PageProps) {
  const router = useRouter();
  const [activeImage, setActiveImage] = useState<number>(0);

  const { id } = use(params);
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The project youre looking for doesnt exist.
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const getImageIndex = (shift: number): number => {
    return (
      (activeImage + shift + project.images.length) % project.images.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <button
        onClick={() => router.push("/")}
        className="fixed top-8 left-8 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-50 group"
      >
        <FaArrowLeft
          size={24}
          className="text-gray-600 group-hover:text-gray-900"
        />
      </button>

      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-8 gap-12">
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.appStoreLink && (
            <div className="flex space-x-4 pt-4">
              <a
                href={project.appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FaExternalLinkAlt size={18} />
                <span>App Store</span>
              </a>
            </div>
          )}
        </div>

        <div className="relative w-full lg:w-1/2 h-[650px] perspective-1000">
          <div className="relative w-full h-full flex justify-center items-center">
            <div
              className="absolute transform -translate-x-32 scale-75 opacity-40 cursor-pointer hover:opacity-60 transition-all duration-500"
              onClick={() => setActiveImage(getImageIndex(-1))}
            >
              <PhoneMockup image={project.images[getImageIndex(-1)]} />
            </div>

            <div className="transform scale-100 z-20 transition-all duration-500">
              <PhoneMockup image={project.images[activeImage]} />
            </div>

            <div
              className="absolute transform translate-x-32 scale-75 opacity-40 cursor-pointer hover:opacity-60 transition-all duration-500"
              onClick={() => setActiveImage(getImageIndex(1))}
            >
              <PhoneMockup image={project.images[getImageIndex(1)]} />
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300  
                    ${
                      index === activeImage
                        ? "bg-gray-800"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
