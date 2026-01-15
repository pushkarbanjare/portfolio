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
      "Worked as a SAP Security consultant.",
      "Got hands-on experience in  various SAP modules.",
    ],
    techStack: ["SAP GRC", "SAP HRM", "SAP BI/BW"],
  },
];
