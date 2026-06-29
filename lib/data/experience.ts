export type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string[];
  techStack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Freelance",
    duration: "Sept 2025 - Present",
    description: [
      "Built websites for local retailer who wants to expand their business across internet and contributing in the growth of the business."
    ],
    techStack: ["Software Development"],
  },
  {
    role: "Graduate Engineer Trainee",
    company: "LTIMindtree",
    duration: "May 2025 - Aug 2025",
    description: [
      "Completed specialized training in SAP modules, gaining knowledge of security, access control, and compliance workflows.",
      "Gained exposure to SAP Security and core business modules, developing a high-level understanding of enterprise system architecture.",
    ],
    techStack: ["SAP GRC", "SAP S/4 HANA"],
  },
];
