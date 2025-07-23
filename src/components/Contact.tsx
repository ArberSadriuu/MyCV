import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { useFadeInOnView } from './useFadeInOnView';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { ref, fadeInClass } = useFadeInOnView();
  const { t } = useTranslation();
  return (
    <footer ref={ref} id="contact" className={`bg-charcoal text-white py-20 ${fadeInClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold mb-4 tracking-wide">{t('contact.heading')}</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">{t('contact.text')}</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 mb-12">
          <a href="mailto:your-email@example.com" className="flex items-center text-xl hover:text-primary transition-colors duration-300 group">
            <FaEnvelope className="mr-3 transition-transform duration-300 group-hover:scale-110" />
            your-email@example.com
          </a>
          <a href="tel:+1234567890" className="flex items-center text-xl hover:text-primary transition-colors duration-300 group">
            <FaPhone className="mr-3 transition-transform duration-300 group-hover:scale-110" />
            +12 345 678 90
          </a>
        </div>
        <div className="border-t border-gray-700 pt-10">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} {t('hero.name')}. {t('contact.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact; 