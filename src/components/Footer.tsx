import React from 'react';
import { Eye, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-2 rounded-lg">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">الدكتور عيسى جريس</h3>
                <p className="text-sm text-gray-400">
                  {language === 'ar' ? 'عيادة العيون' : 'Eye Clinic'}
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('quickLinks')}</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t('home')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t('services')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t('about')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t('contact')}
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('ourServices')}</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                {t('comprehensiveExams')}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                {t('lasikSurgery')}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                {t('cataractTreatment')}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                {t('pediatricCare')}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">
                {t('contactLens')}
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('contactInfo')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>الفحيص - القيصر بلازا - الطابق الأول</p>
                  <p>Fuheis, Jordan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+962791012450" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  0791012450
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:example@email.com" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  example@email.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>Sat-Wen: 9:00 AM - 6:00 PM</p>
                  <p>thur: 10:00 AM - 2:00 PM</p>
                  <p>Fri: closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t('allRightsReserved')}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('privacyPolicy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('termsOfService')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('hipaaNotice')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
