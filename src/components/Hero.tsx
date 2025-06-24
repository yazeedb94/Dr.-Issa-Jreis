import React from 'react';
import { Calendar, Shield, Award, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                <Award className="h-4 w-4" />
                <span>{t('yearsExperience')}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {t('heroTitle').split(', ')[0]},{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                  {t('heroTitle').split(', ')[1]}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('heroSubtitle')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('patientsServed')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('successRate')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coral-600">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('expertDoctors')}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
              >
                <Calendar className="h-5 w-5" />
                <span>{t('scheduleAppointment')}</span>
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 font-semibold"
              >
                <Shield className="h-5 w-5" />
                <span>{t('ourServices')}</span>
              </button>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>{t('locationText')}</span>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5752296/pexels-photo-5752296.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern eye examination equipment"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-green-500" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">FDA Approved</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Latest Technology</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;