import React from 'react';
import { useFadeInOnView } from './useFadeInOnView';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const About: React.FC = () => {
  const { ref, fadeInClass } = useFadeInOnView();
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section ref={ref} id="about" className={`py-24 bg-gradient-to-b from-charcoal to-gray-900 text-white ${fadeInClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6 tracking-wide">{t('about.heading')}</h2>
          <p className="max-w-3xl mx-auto text-black-300 mb-10 text-lg leading-relaxed">
            {t('about.text')}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base font-semibold focus:outline-none focus:ring-4 focus:ring-primary/40"
          >
            {t('about.readMore')}
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-200 text-charcoal rounded-3xl shadow-2xl max-w-2xl w-full p-0 animate-fadeIn overflow-hidden border border-gray-100">
            {/* Modal Header with Accent Bar and Icon */}
            <div className="flex items-center px-8 py-6 bg-primary/90 border-b border-primary/20 relative">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black flex-1 text-left">{t('about.heading')}</h1>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-black hover:text-primary-dark text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
            {/* Modal Content */}
            <div className="px-8 py-8 sm:py-10">
              <p className="text-lg sm:text-xl mb-6 leading-relaxed text-black font-medium">
                {t('about.text')}
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-black font-medium">
                {t('about.more')}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About; 