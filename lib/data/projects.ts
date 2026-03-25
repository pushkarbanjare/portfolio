export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    title: "Finaura",
    description: "A fullstack expense intelligence platform featuring automated categorization, and interactive financial analytics. It transforms raw transaction data into visual insights through a custom dashboard built with Nextjs, MongoDB, and Recharts.",
    techStack: ["Nextjs", "Typescript"],
    githubUrl: "https://github.com/pushkarbanjare/finaura",
    liveUrl: "https://finaura-app.vercel.app/",
  },
  {
    title: "Hiremind",
    description: "An AI-powered recruitment tool that parses resumes against job descriptions to provide skill-gap analysis and match scoring. It utilizes a modular FastAPI backend and Nextjs frontend to transform raw PDF data into actionable insights for candidates.",
    techStack: ["Nextjs", "Typescript", "FastAPI", "Jupyter Notebook"],
    githubUrl: "https://github.com/pushkarbanjare/hiremind",
    liveUrl: "https://hiremind-frontend-voin.onrender.com/",
  },
  {
    title: "Taskstack",
    description: "A streamlined fullstack task manager built to explore the integration of a FastAPI backend with a Nextjs and PostgreSQL. It features a persistent, unified database and a clean dark UI designed for efficient CRUD operations.",
    techStack: ["Nextjs", "Typescript", "PostgreSQL", "FastAPI"],
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
