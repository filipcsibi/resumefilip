// src/constants/projects.ts

export interface ExperienceType {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: ExperienceType[] = [
  {
    id: 1,
    role: "React Native Developer",
    company: "Linnify",
    period: "April 2023 - May 2023",
    description:
      "Mastered code structuring and TypeScript while exploring React Native features. Used Zustand for state management, implemented animations with Reanimated, and worked with various features like debounce hooks, SVG handling, and API integration.",
    technologies: ["React Native", "TypeScript", "Zustand", "Reanimated"],
  },
  {
    id: 2,
    role: "Intern Analyst",
    company: "Accenture",
    period: "June 2025 - August 2025",
    description:
      "Technologies utilized include Java, Spring Boot 2.7, Spring Data JPA, PostgreSQL, Windchill 13 PLM, REST APIs, Maven, and Git.",
    technologies: ["JAVA", "Spring Boot", "PostgreSQL", "REST APIs", "Maven"],
  },
  {
    id: 3,
    role: "React/React-Native Developer",
    company: "Freelance",
    period: "June 2025 - present",
    description:
      "I design and develop high-quality websites and mobile applications that attract real users, using modern technologies like React, React Native, Redux, TypeScript, Tailwind, Next.js, and Expo.",
    technologies: [
      "React",
      "React-Native",
      "Next.JS",
      "Expo",
      "Redux",
      "Firebase",
      "Appwrite",
    ],
  },
];

export interface ProjectType {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  images: string[];
  cardImage: string;
  githubLink: string;
  liveLink?: string;
  achievements?: string[];
}

export const PROJECTS: ProjectType[] = [
  {
    id: 1,
    title: "Pour Decisions",
    shortDescription: "The ultimate drinking card game",
    description:
      "A drinking game app that turns your party into an unforgettable night of dares, truths, and shots. Mix fun challenges with perfect ice-breakers, all while keeping track of who drinks what.",
    technologies: ["React Native", "TypeScript", "Expo", "Firebase"],
    images: [
      "/poordecisions/1.PNG",
      "/poordecisions/2.PNG",
      "/poordecisions/3.PNG",
      "/poordecisions/4.PNG",
      "/poordecisions/5.PNG",
      "/poordecisions/6.PNG",
    ],
    cardImage: "/main/pour.PNG",
    githubLink: "https://github.com/filipcsibi/pourdecisions",
    liveLink:
      "https://expo.dev/preview/update?message=bug%20fixed&updateRuntimeVersion=1.0.0&createdAt=2025-02-01T21%3A50%3A45.139Z&slug=exp&projectId=4b62616b-1a52-4266-9cba-1a41ffd48bd6&group=ea8b7555-467d-43a8-9467-478a7eb6bf50",
  },

  {
    id: 2,
    title: "Circlr",
    shortDescription: "Social Media App",
    description:
      "Circlr is a social media app that allows users to share their thoughts, photos, and videos. The app is built with React Native and uses Firebase for authentication and storage.",
    technologies: ["React Native", "TypeScript", "Expo", "Firebase", "CSS"],
    images: [
      "/circlrr/1.PNG",
      "/circlrr/2.PNG",
      "/circlrr/3.PNG",
      "/circlrr/4.PNG",
      "/circlrr/5.PNG",
    ],
    cardImage: "/main/circlr.PNG",
    liveLink:
      "https://expo.dev/preview/update?message=change%20password&updateRuntimeVersion=1.0.0&createdAt=2025-01-10T20%3A29%3A24.216Z&slug=exp&projectId=c11a7172-5234-42a9-815a-8a101d66d81e&group=9b48108c-d60e-4389-badb-27d34a03299c",
    githubLink: "https://github.com/filipcsibi/circlr",
  },
  {
    id: 3,
    title: "DECYCLER",
    shortDescription: "Ecological rubble disposal app",
    description:
      "Decycler is a mobile app built with React Native Expo that allows users to post their rubble so that other companies can safely and ecologically dispose of it for a fee. The app uses Firebase as a backend and integrates Google Maps API for location selection.",
    technologies: [
      "React Native",
      "JavaScript",
      "Expo",
      "Firebase",
      "Google Maps API",
    ],
    images: ["/decycler/1.png", "/decycler/2.png", "/decycler/3.png"],
    cardImage: "/main/decycler.png",
    githubLink: "https://github.com/filipcsibi/decycler",
    achievements: [
      "Won The Special Prize For The Best Mobile Experience at PoliHack",
    ],
  },
];

// Helper function to find a project by ID
export const getProjectById = (
  id: string | number
): ProjectType | undefined => {
  return PROJECTS.find((project) => project.id === Number(id));
};

export const education = [
  {
    school: "TECHNICAL UNIVERSITY",
    degree: "Computer Science",
    location: "Cluj-Napoca",
    period: "2022-2026",
  },
];

export const certifications = [
  {
    title: "DATABASE DESIGN",
    issuer: "Oracle",
    date: "May 2022",
  },
  {
    title: "DATABASE PROGRAMMING WITH SQL",
    issuer: "Oracle",
    date: "May 2022",
  },
];

export const volunteering = [
  {
    role: "COORDINATOR OF VOLUNTEERS",
    organization: "OSUT Cluj-Napoca",
    description:
      "For the past year, I've volunteered at OSUT, guiding individuals in enhancing both their IT and social skills",
    achievements: ["Created an PWA for ESU - Engineering Summer University"],
  },
];

export const skills = {
  technical: ["Java", "C/C++/C#", "JavaScript", "TypeScript", "MySQL"],
  software: ["MS Office (Word, Excel, PowerPoint)", "Outlook", "Salesforce"],
  languages: ["English", "Romanian"],
  soft: ["CAPABLE", "TRUSTWORTHY", "CHARISMATIC"],
};
