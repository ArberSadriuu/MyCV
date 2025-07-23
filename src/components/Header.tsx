import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-gray-100/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl text-gray-800 font-bold">
              <FaLaptopCode />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">{t('nav.about')}</a>
            <a href="#skills" className="nav-link text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">{t('nav.skills')}</a>
            <a href="#portfolio" className="nav-link text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">{t('nav.portfolio')}</a>
            <a href="#contact" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg">{t('nav.contact')}</a>
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 