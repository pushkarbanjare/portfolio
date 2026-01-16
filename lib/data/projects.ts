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
    description:
      "A personal finance dashboard to track goals, monthly insights, and financial progress with a clean UI.",
    techStack: ["Nextjs", "Typescript"],
    githubUrl: "https://github.com/pushkarbanjare/finaura",
    liveUrl: "https://finaura-app.vercel.app/",
  },
  {
    title: "Resume Placement Predictor",
    description:
      "Machine learning model which is used to screen the resume and predict the likelihood of the candidate placement.",
    techStack: ["Python", "Google Collab"],
    githubUrl: "https://github.com/pushkarbanjare/resume-placement-predictor",
    liveUrl: "",
  },
  {
    title: "Authify",
    description:
      "A secure, full-stack authentication system built with the MERN stack, offering seamless user login and authorization.",
    techStack: ["React", "Javascript", "Express"],
    githubUrl: "https://github.com/pushkarbanjare/authify",
    liveUrl: "",
  },
  {
    title: "Contact Manager",
    description:
      "A solution for storing and managing contact information with secure authentication.",
    techStack: ["Javascript", "Express"],
    githubUrl: "https://github.com/pushkarbanjare/contact-manager",
    liveUrl: "",
  },
];
