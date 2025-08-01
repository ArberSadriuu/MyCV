import React from 'react';
import { useFadeInOnView } from './useFadeInOnView';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: 'Habits',
    description: 'A productivity app that helps users build habits through gamification and progress tracking.',
    imageUrl: '/public/assets/HabitFlow.jpg',
    link: 'https://gamified-habits.vercel.app/',
  },
  {
    title: 'NexBoard',
    description: 'A modern admin dashboard for managing users, analytics, and more. Built with a focus on usability and clean design.',
    imageUrl: '/public/assets/NexBoard.jpg',
    link: 'https://admin-dashboard-ruddy-tau-14.vercel.app/',
  },
  {
    title: 'SnapSummary',
    description: 'A concise note-taking and productivity app designed for efficiency and clarity.',
    imageUrl: '/public/assets/SnapSummary.jpg',
    link: 'https://snap-summary1.vercel.app/',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group border border-transparent hover:border-primary/30"
            >
              <div className="relative overflow-hidden h-60 rounded-t-2xl">
                <img
                  src={project.imageUrl}
                  alt={project.title + ' dashboard preview'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-7 flex flex-col items-start">
                <h3 className="text-xl font-semibold text-charcoal mb-2 leading-tight group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed text-base min-h-[60px]">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-block mt-auto font-medium text-primary bg-primary/10 px-5 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 group-hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/40"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('portfolio.view')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 