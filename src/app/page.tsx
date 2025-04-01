import { resumeData } from '@/data/resume';
import Header from '@/components/Header';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <Header />
      <ExperienceSection experiences={resumeData.experiences} />
      <EducationSection education={resumeData.education} />
      <SkillsSection skills={resumeData.skills} />
    </main>
  );
}
