export type Experience = {
  company: string;
  location: string;
  positions: Position[];
};

export type Position = {
  title: string;
  startDate: string;
  endDate: string;
  achievements: string[];
};

export type Education = {
  school: string;
  location: string;
  degree: string;
  graduationDate: string;
};

export type Skill = string;

export type Resume = {
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
};