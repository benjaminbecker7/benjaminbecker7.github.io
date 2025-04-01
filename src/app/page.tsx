import { resumeData } from '@/data/resume';
import Header from '@/components/Header';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <Header />

      {/* Hero Section */}
      <section className="py-8 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {resumeData.name}
          </h1>
          <div className="flex flex-col md:flex-row gap-4 text-text-light">
            <a
              href={`mailto:${resumeData.contactInfo.email}`}
              className="hover:text-primary transition-colors"
            >
              {resumeData.contactInfo.email}
            </a>
            <span className="hidden md:inline text-text-lighter">•</span>
            <a
              href={`tel:${resumeData.contactInfo.phone}`}
              className="hover:text-primary transition-colors"
            >
              {resumeData.contactInfo.phone}
            </a>
          </div>
        </div>
      </section>

      <ExperienceSection experiences={resumeData.experiences} />
      <ProjectsSection projects={resumeData.projects} />
      <EducationSection education={resumeData.education} />
      <SkillsSection skills={resumeData.skills} />
    </main>
  );
}
