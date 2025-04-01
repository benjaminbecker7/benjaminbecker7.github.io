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
};

export type Skill = string;

export type ContactInfo = {
  email: string;
  phone: string;
};

export type Resume = {
  name: string;
  contactInfo: ContactInfo;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
};