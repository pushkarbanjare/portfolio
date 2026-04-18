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
      "Completed specialized training in SAP GRC and S/4HANA, gaining knowledge of security, access control, and compliance workflows.",
      "Gained exposure to SAP Security and core business modules, developing a high-level understanding of enterprise system architecture.",
      "Participated in professional communication and corporate leadership workshops, improving cross-functional collaboration.",
    ],
    techStack: ["SAP GRC", "SAP S/4HANA"],
  },
];
