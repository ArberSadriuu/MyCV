import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useFadeInOnView } from './useFadeInOnView';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';


const Hero: React.FC = () => {
  const { ref, fadeInClass } = useFadeInOnView();
  const { t } = useTranslation();
  return (
    <section ref={ref} className={`relative h-screen flex items-center ${fadeInClass}`}>
      <div className="absolute inset-0 bg-off-white" style={{ clipPath: 'polygon(0 0, 100% 0, 65% 100%, 0% 100%)' }}></div>
      <div className="absolute inset-0 bg-charcoal" style={{ clipPath: 'polygon(65% 100%, 100% 0, 100% 100%)' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <motion.p
              className="text-xl text-gray-600 mb-3 tracking-wide"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {t('hero.hi')}
            </motion.p>

            <motion.h1
              className="text-7xl font-bold text-charcoal mb-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {[...t('hero.name')].map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-2xl text-primary font-medium mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
            >
              {t('hero.title')}
            </motion.p>

            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/ArberSadriuu" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-transform duration-300 hover:scale-110"><FaGithub size={28} /></a>
              <a href="https://www.linkedin.com/in/arbersadriu/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-transform duration-300 hover:scale-110"><FaLinkedin size={28} /></a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 border-4 border-white">
                <img src="/assets/profile.jpg" alt={t('hero.name')} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 