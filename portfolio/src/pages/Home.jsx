import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const handleDownloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Replace with your actual CV file path
    link.download = 'Benjamin_CV.pdf'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-secondary">Benjamin</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-tertiary">
              Full Stack Developer
            </h2>
            <p className="text-lg mb-8 text-tertiary">
              I build exceptional digital experiences that make an impact.
              Specializing in creating modern web applications with React,
              Node.js, and other cutting-edge technologies.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex space-x-4"
            >
              <button
                onClick={handleDownloadCV}
                className="btn-primary flex items-center space-x-2"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                <span>Download CV</span>
              </button>
              <Link to="/contact" className="btn-primary bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary">
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-md mx-auto md:ml-auto"
          >
            <div className="aspect-square relative">
              {/* Hexagon Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/70 rounded-[2rem] rotate-45 transform -translate-y-4"></div>
              {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] rotate-45 border-4 border-secondary">
                <img
                  src="/profile.jpg"
                  alt="Benjamin"
                  className="absolute inset-0 w-full h-full object-cover -rotate-45 scale-[1.6]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {['React', 'Node.js', 'JavaScript', 'TypeScript'].map((tech) => (
            <motion.div
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="bg-primary-light p-4 rounded-lg text-center"
            >
              <span className="text-tertiary">{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 