import React from 'react';
import { useFadeInOnView } from './useFadeInOnView';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { ref, fadeInClass } = useFadeInOnView();
  const { t } = useTranslation();

  return (
    <section ref={ref} id="about" className={`py-24 bg-gradient-to-b from-charcoal to-gray-900 text-white ${fadeInClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6 tracking-wide">{t('about.heading')}</h2>
          <p className="max-w-3xl mx-auto text-gray-300 mb-10 text-lg leading-relaxed">
            {t('about.text')}
          </p>
          <a href="#more-about" className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base font-semibold">
            {t('about.readMore')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About; 