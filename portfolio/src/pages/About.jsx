import { motion } from 'framer-motion';

const About = () => {
  const experiences = [
    {
      year: '2023 - Present',
      role: 'Full Stack Developer',
      company: 'Your Company',
      description: 'Building modern web applications using React, Node.js, and other technologies.',
    },
    {
      year: '2022 - 2023',
      role: 'Frontend Developer',
      company: 'Previous Company',
      description: 'Developed responsive web applications and implemented modern UI/UX practices.',
    },
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'SQL'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Docker'] },
  ];

  return (
    <div className="py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title"
      >
        About Me
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative pl-8 border-l-2 border-secondary"
              >
                <div className="absolute -left-2 w-4 h-4 rounded-full bg-secondary" />
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-tertiary">{exp.company}</p>
                <p className="text-sm text-tertiary mb-2">{exp.year}</p>
                <p className="text-tertiary">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.span
                      key={itemIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-primary-light rounded-full text-sm text-tertiary"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 