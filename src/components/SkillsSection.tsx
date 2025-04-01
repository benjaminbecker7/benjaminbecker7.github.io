'use client';

import { motion } from 'framer-motion';

type Props = {
  skills: string[];
};

export default function SkillsSection({ skills }: Props) {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-primary"
        >
          Skills
        </motion.h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-primary/5 px-4 py-2 rounded-full border border-accent/20 hover:border-secondary/50 hover:bg-primary/10 transition-colors"
            >
              <span className="text-primary-light">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}