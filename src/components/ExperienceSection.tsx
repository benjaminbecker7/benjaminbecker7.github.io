'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types/resume';

type Props = {
  experiences: Experience[];
};

export default function ExperienceSection({ experiences }: Props) {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-primary"
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-l-2 border-accent pl-4 hover:border-secondary transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-primary">
                  {experience.company}
                </h3>
                <span className="text-text-light">{experience.location}</span>
              </div>

              {experience.positions.map((position) => (
                <div key={position.title} className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium text-primary-light">
                      {position.title}
                    </h4>
                    <span className="text-sm text-text-lighter">
                      {position.startDate} – {position.endDate}
                    </span>
                  </div>

                  <ul className="list-disc list-inside space-y-2">
                    {position.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="text-text-light hover:text-text transition-colors"
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}