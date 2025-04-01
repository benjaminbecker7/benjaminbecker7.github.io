import { motion } from 'framer-motion';
import { Education } from '@/types/resume';

type Props = {
  education: Education[];
};

export default function EducationSection({ education }: Props) {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {edu.school}
                </h3>
                <span className="text-gray-500">{edu.location}</span>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-gray-600">{edu.degree}</p>
                <span className="text-sm text-gray-500">
                  {edu.graduationDate}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}