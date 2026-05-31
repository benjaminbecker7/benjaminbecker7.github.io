export type Project = {
  name: string;
  role: string;
  organization: string;
  date: string;
  description: string[];
  technologies?: string[];
};

export type Experience = {
  company: string;
  location: string;
  positions: Position[];
  projects?: Project[];
  link?: {
    label: string;
    url: string;
  };
};

export type Position = {
  title: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  relatedProjects?: string[];
};

export type Education = {
  school: string;
  location: string;
  degree: string;
  graduationDate: string;
  gpa?: string;
  details?: string[];
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type ContactInfo = {
  email: string;
  phone: string;
};

export type Resume = {
  name: string;
  title?: string;
  summary?: string;
  contactInfo: ContactInfo;
  experiences: Experience[];
  education: Education[];
  skills: SkillCategory[];
  projects: Project[];
};
