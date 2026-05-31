'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types/resume';

type Props = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: Props) {
  return (
    <section id="projects" className="py-20 bg-primary/5">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-primary"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent hover:border-secondary transition-colors"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-primary mb-1">
                  {project.name}
                </h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-primary-light font-medium">
                    {project.role} @ {project.organization}
                  </span>
                  <span className="text-sm text-text-lighter">{project.date}</span>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 mb-4">
                {project.description.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="text-text-light"
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>

              {project.technologies && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}