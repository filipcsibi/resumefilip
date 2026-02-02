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
    role: "Software Engineer",
    company: "Tapptitude",
    period: "October 2024 - January 2025",
    description:
      "Engineered a high-performance electric scooter rental application. Optimized app performance by reducing API calls by 40% and improving load times by 35% through Zustand and TanStack Query.",
    technologies: ["TypeScript", "Expo", "PostgreSQL"],
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "Accenture",
    period: "June 2025 - August 2025",
    description:
      "Improved full-stack development skills as a member of the Windchill team. Built a highly requested feature for hundreds of enterprise users and independently addressed opportunities for refactoring and build process optimization.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Windchill", "REST"],
  },
  {
    id: 3,
    role: "Software Developer",
    company: "Freelance",
    period: "2025 - 2026",
    description:
      "Deliver end-to-end scalable web and mobile solutions handling 1,000+ monthly active users. Increased client conversion rates by 30% through Core Web Vitals optimization and reduced turnaround time by 25% using reusable components.",
    technologies: ["TypeScript", "Expo"],
  },
  {
    id: 4,
    role: "Software Intern",
    company: "Linnify",
    period: "April 2023 - May 2023",
    description:
      "Immersed into the React Native ecosystem, mastering mobile architecture and TypeScript best practices to contribute to production code within the first two weeks.",
    technologies: ["TypeScript"],
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
  appStoreLink?: string;
}

export const PROJECTS: ProjectType[] = [
  {
    id: 1,
    title: "SOTO: Party Starter",
    shortDescription: "The ultimate friends card game",
    description:
      "A card game app that turns your party into an unforgettable night of dares, truths, and shots. Mix fun challenges with perfect ice-breakers, all while keeping track of who does what.",
    technologies: ["TypeScript", "Expo", "Firebase"],
    images: [
      "/soto/1.png",
      "/soto/2.png",
      "/soto/3.png",
      "/soto/4.png",
      "/soto/5.png",
    ],
    cardImage: "/main/soto.png",
    appStoreLink:
      "https://apps.apple.com/ro/app/soto-party-starter/id6745779753",
  },

  {
    id: 2,
    title: "CabinSplit",
    shortDescription: "Trip managing for friends",
    description:
      "Create a group in the app, add friends with a unique code, and sort everything out quickly. You can instantly split any expense, from accommodation to gas + easily organize the cars, see exactly how many seats are free, and who is riding with whom.",
    technologies: ["TypeScript", "Expo", "Supabase"],
    images: [
      "/cabinsplit/1.png",
      "/cabinsplit/2.png",
      "/cabinsplit/3.png",
      "/cabinsplit/4.png",
      "/cabinsplit/5.png",
      "/cabinsplit/6.png",
    ],
    cardImage: "/main/cabinsplit.png",
    appStoreLink: "https://apps.apple.com/ro/app/cabinsplit/id6755599069",
  },
  {
    id: 3,
    title: "MOVE",
    shortDescription: "Scooter rental app",
    description:
      "Launch your fleet immediately with this high-performance e-scooter platform. Optimized for speed using TanStack Query, the app offers a seamless user experience with multiple unlocking options: NFC, QR, or PIN code.",
    technologies: ["TypeScript", "Expo", "Supabase", "Retool"],
    images: [
      "/move/1.png",
      "/move/2.png",
      "/move/3.png",
      "/move/4.png",
      "/move/5.png",
      "/move/6.png",
      "/move/7.png",
    ],
    cardImage: "/main/move.png",
  },
];

// Helper function to find a project by ID
export const getProjectById = (
  id: string | number,
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
  software: [
    "MS Office (Word, Excel, PowerPoint)",
    "Outlook",
    "Salesforce",
    "Figma",
    "Canva",
  ],
  languages: ["English", "Romanian"],
  soft: ["CAPABLE", "TRUSTWORTHY", "CHARISMATIC"],
};
