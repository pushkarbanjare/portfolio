export type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string[];
  techStack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Graduate Engineer Trainee",
    company: "LTIMindtree",
    duration: "May 2025 - August 2025",
    description: [
      "Developed a professional foundation in enterprise workflows and corporate communication within the SAP consulting environment.",
      "Gained hands-on exposure to SAP Security and various business modules, providing a high-level understanding of the ecosystem",
    ],
    techStack: ["SAP GRC", "SAP HRM", "SAP BI/BW"],
  },
];
