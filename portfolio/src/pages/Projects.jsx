import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Weather Dashboard',
      description: 'A modern, interactive weather dashboard application built with React and Material-UI. This application provides real-time weather information, city photos, nearby restaurants, hotels, and interactive maps for any location.',
      technologies: ['React', 'Material-UI', 'OpenWeather API', 'Google Maps API'],
      image: '/images/weather.png',
      link: 'https://weather-dashboard-ashy-xi.vercel.app/',
    },
    {
      title: 'Funhealth',
      description: 'A youth-led digital health platform by Kundwa Health organization, dedicated to empowering young people with accessible health information and services. The platform focuses on sexual & reproductive health, mental health, and youth empowerment through interactive digital tools and mentorship programs.',
      technologies: ['React', 'MONGDB', 'Material UI','NODE.js'],
      image: '/images/funhealth.png',
      link: 'https://funhealth.netlify.app/home',
    },
    {
      title: 'AgriTech Market Connect',
      description: 'A mobile application designed to empower smallholder farmers in Rwanda by providing real-time, localized market pricing and trend information. This user-centered solution aims to improve market access, enhance agricultural productivity, and create a more efficient market network for farmers.',
      technologies: ['Flutter', 'Firebase', 'OpenWeather API', 'Google Maps API', 'Dart'],
      image: '/images/agritech.jpg',
      link: 'https://drive.google.com/file/d/1SyafZVts2byCdtqT5tAoVJ52fFfX9UVr/view?usp=sharing',
    },
  ];

  return (
    <div className="py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title"
      >
        My Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-primary-light rounded-lg overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-70" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-tertiary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-secondary/10 text-secondary text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-secondary hover:text-secondary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 