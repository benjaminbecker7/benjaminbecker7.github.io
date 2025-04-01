import { resumeData } from '@/data/resume';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <MainContent
      experiences={resumeData.experiences}
      projects={resumeData.projects}
      education={resumeData.education}
      skills={resumeData.skills}
    />
  );
}
