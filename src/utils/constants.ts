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
    role: "Sales Consultant",
    company: "iStyle Retail SRL",
    period: "July 2023 - September 2023",
    description:
      "Refined social skills through customer interaction and team collaboration. Developed patience and communication skills while meeting customer needs.",
    technologies: ["Sales", "Customer Service", "Team Collaboration"],
  },
  {
    id: 3,
    role: "Social Media Content Creator",
    company: "FORM University",
    period: "April 2024 - present",
    description:
      "Creating engaging social media content, developing creative strategies for audience engagement, and mastering concise communication techniques.",
    technologies: ["Content Creation", "Social Media", "Communication"],
  },
];

export interface ProjectType {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  images: string[];
  githubLink: string;
  liveLink?: string;
  achievements?: string[];
}

export const PROJECTS: ProjectType[] = [
  {
    id: 1,
    title: "DECYCLER",
    shortDescription:
      "A React Native mobile app for ecological rubble disposal",
    description:
      "Decycler is a mobile app built with React Native Expo that allows users to post their rubble so that other companies can safely and ecologically dispose of it for a fee. The app uses Firebase as a backend and integrates Google Maps API for location selection.",
    technologies: ["React Native", "Expo", "Firebase", "Google Maps API"],
    images: ["/decycler/1.png", "/decycler/2.png", "/decycler/3.png"],
    githubLink: "https://github.com/filipcsibi/decycler",
    achievements: [
      "Won The Special Prize For The Best Mobile Experience at PoliHack",
    ],
  },
  {
    id: 2,
    title: "OFFICE REVIVE",
    shortDescription: "A Progressive Web App for improving company culture",
    description:
      "Office Revive is a unique tool that aims to improve company culture and productivity by providing a platform for internal communication, collaboration and socialization among team members. Built with TypeScript and Vite, using MongoDB for backend and MUI elements for the interface.",
    technologies: ["React", "TypeScript", "Vite", "MongoDB", "MUI"],
    images: [
      "/api/placeholder/280/580?text=Dashboard",
      "/api/placeholder/280/580?text=Team Chat",
      "/api/placeholder/280/580?text=Collaboration Tools",
    ],
    githubLink: "https://github.com/filipcsibi/Office-Revive",
  },
  {
    id: 3,
    title: "CARAOKE",
    shortDescription: "The ultimate carpool karaoke app",
    description:
      "Welcome to Caraoke, the ultimate carpool karaoke app! With Caraoke, you and your friends can compete to be crowned the singing superstar of your ride. The app uses Speech to Text technology to create an engaging karaoke experience.",
    technologies: ["React Native", "Expo", "Speech to Text"],
    images: [
      "/api/placeholder/280/580?text=Song Selection",
      "/api/placeholder/280/580?text=Karaoke Screen",
      "/api/placeholder/280/580?text=Leaderboard",
    ],
    githubLink: "https://github.com/filipcsibi/caraoke",
    achievements: ["Won 2nd Place at HackTM from Continental"],
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
  technical: [
    "Java",
    "C/C++/C#",
    "Python",
    "JavaScript",
    "TypeScript",
    "PHP",
    "MySQL",
    "HTML",
    "CSS",
    "Tailwind",
  ],
  software: ["MS Office (Word, Excel, PowerPoint)", "Outlook", "Salesforce"],
  languages: ["English", "Romanian"],
  soft: ["CAPABLE", "TRUSTWORTHY", "CHARISMATIC"],
};
