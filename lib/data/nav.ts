import { FiHome, FiUser, FiFolder, FiBriefcase, FiMail } from "react-icons/fi";

export type NavItem = {
  label: string;
  id: string;
  icon: React.ElementType;
};

export const NavItem: NavItem[] = [
  { label: "Home", id: "home", icon: FiHome },
  { label: "About", id: "about", icon: FiUser },
  { label: "Projects", id: "projects", icon: FiFolder },
  { label: "Experience", id: "experience", icon: FiBriefcase },
  { label: "Contact", id: "contact", icon: FiMail },
];
