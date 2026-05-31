'use client'

import Header from '@/components/Header'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/EducationSection'
import SkillsSection from '@/components/SkillsSection'
import { Experience, Project, Education, SkillCategory } from '@/types/resume'
import { resumeData } from '@/data/resume'

type Props = {
  experiences: Experience[]
  projects: Project[]
  education: Education[]
  skills: SkillCategory[]
}

export default function MainContent({ experiences, projects, education, skills }: Props) {
  return (
    <main className="min-h-screen bg-white pt-16">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            {resumeData.name}
          </h1>
          {resumeData.title && (
            <p className="text-xl text-primary-light font-medium mb-4">
              {resumeData.title}
            </p>
          )}
          <div className="flex flex-col md:flex-row gap-4 text-text-light mb-6">
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
          {resumeData.summary && (
            <p className="max-w-3xl text-text-light leading-relaxed">
              {resumeData.summary}
            </p>
          )}
        </div>
      </section>

      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <EducationSection education={education} />
      <SkillsSection skills={skills} />
    </main>
  )
}
