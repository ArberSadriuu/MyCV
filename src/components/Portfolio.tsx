import React from 'react';
import { useFadeInOnView } from './useFadeInOnView';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the project. What it does, and what technologies were used.',
    imageUrl: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of the project. What it does, and what technologies were used.',
    imageUrl: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of the project. What it does, and what technologies were used.',
    imageUrl: 'https://via.placeholder.com/400x300',
    link: '#',
  },
];

const Portfolio: React.FC = () => {
  const { ref, fadeInClass } = useFadeInOnView();
  const { t } = useTranslation();
  return (
    <section ref={ref} id="portfolio" className={`py-24 bg-white ${fadeInClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-charcoal tracking-wide">{t('portfolio.heading')}</h2>
          <p className="text-gray-600 mt-4 text-lg">{t('portfolio.sub')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                <a href={project.link} className="font-semibold text-primary hover:text-primary-dark transition-colors duration-200 group-hover:underline">{t('portfolio.view')}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 