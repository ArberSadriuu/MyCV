import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useFadeInOnView } from './useFadeInOnView';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { ref, fadeInClass } = useFadeInOnView();
  const { t } = useTranslation();
  return (
    <footer ref={ref} id="contact" className={`bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 text-slate-800 py-24 ${fadeInClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold mb-4 tracking-wide text-slate-800 drop-shadow-lg">{t('contact.heading')}</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 mb-14 animate-fadeInUp">
          <div className="flex flex-col items-center bg-white/80 rounded-xl shadow-lg p-8 transition-transform duration-500 hover:scale-105 group border border-slate-200">
            <FaMapMarkerAlt className="text-slate-700 text-3xl mb-3 animate-bounce" />
            <span className="text-lg font-semibold text-slate-600">Location</span>
            <span className="text-xl font-bold text-slate-800 mt-1">Ferizaj</span>
          </div>
          <div className="flex flex-col items-center bg-white/80 rounded-xl shadow-lg p-8 transition-transform duration-500 hover:scale-105 group border border-slate-200">
            <FaPhone className="text-slate-700 text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-semibold text-slate-600">Phone</span>
            <a href="tel:+38345313797" className="text-xl font-bold text-slate-800 mt-1 hover:text-slate-600 transition-colors duration-300">+383 45 313 797</a>
          </div>
          <div className="flex flex-col items-center bg-white/80 rounded-xl shadow-lg p-8 transition-transform duration-500 hover:scale-105 group border border-slate-200">
            <FaEnvelope className="text-slate-700 text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-semibold text-slate-600">Email</span>
            <a href="mailto:sadriuarber55@gmail.com" className="text-xl font-bold text-slate-800 mt-1 hover:text-slate-600 transition-colors duration-300">sadriuarber55@gmail.com</a>
          </div>
        </div>
        <div className="border-t border-slate-300 pt-10 mt-10 animate-fadeIn">
          <p className="text-slate-500">&copy; {new Date().getFullYear()} {t('hero.name')}. {t('contact.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact; 