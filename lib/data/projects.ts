export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    title: "FinAura",
    description: "A fullstack expense tracking platform with hybrid auto-categorization (rules + LLM fallback) and interactive analytics, converting raw transaction data into structured financial insights via a custom dashboard built with Next.js and MongoDB.",
    techStack: ["Nextjs", "Typescript", "MongoDB", "Gemini LLM"],
    githubUrl: "https://github.com/pushkarbanjare/finaura",
    liveUrl: "https://finaura-app.vercel.app/",
  },
  {
    title: "HireMind",
    description: "A fullstack resume-job matching platform that parses PDF resumes and compares them with job descriptions to generate match scores and identify skill gaps, built using a modular FastAPI backend and Next.js frontend.",
    techStack: ["Nextjs", "Typescript", "FastAPI", "MongoDB"],
    githubUrl: "https://github.com/pushkarbanjare/hiremind",
    liveUrl: "https://hiremind-web.vercel.app/",
  },
  {
    title: "Taskstack",
    description: "A streamlined fullstack task manager built to explore the integration of a FastAPI backend with a Nextjs and PostgreSQL. It features a persistent, unified database and a clean dark UI designed for efficient CRUD operations.",
    techStack: ["Nextjs", "Typescript", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/pushkarbanjare/taskstack",
    liveUrl: "",
  },
  {
    title: "Resume Placement Predictor",
    description: "A placement predictor that combines NLP-based resume classification with predictive modeling. It automates domain identification via TF-IDF vectorization and evaluates likelihood of candidate placement.",
    techStack: ["Python", "Collab Notebook"],
    githubUrl: "https://github.com/pushkarbanjare/resume-placement-predictor",
    liveUrl: "",
  },
  {
    title: "Authify",
    description: "A secure, full-stack authentication system built with the MERN stack, offering seamless user login and authorization.",
    techStack: ["React", "Javascript", "Express"],
    githubUrl: "https://github.com/pushkarbanjare/authify",
    liveUrl: "",
  },
  {
    title: "Contact Manager",
    description: "A solution for storing and managing contact information with secure authentication.",
    techStack: ["Javascript", "Express"],
    githubUrl: "https://github.com/pushkarbanjare/contact-manager",
    liveUrl: "",
  },
];
