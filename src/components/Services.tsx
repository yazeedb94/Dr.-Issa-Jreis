import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Zap, Heart, Baby, Glasses, Stethoscope } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const services = [
    {
      id: 'comprehensive-exams',
      icon: Eye,
      title: t('comprehensiveExams'),
      description: t('comprehensiveExamsDesc'),
      features: ['Digital retinal imaging', 'Glaucoma screening', 'Visual field testing'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'lasik',
      icon: Zap,
      title: t('lasikSurgery'),
      description: t('lasikSurgeryDesc'),
      features: ['Bladeless LASIK', 'Custom wavefront', 'Quick recovery'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'cataract',
      icon: Heart,
      title: t('cataractTreatment'),
      description: t('cataractTreatmentDesc'),
      features: ['Micro-incision surgery', 'Premium lens implants', 'Same-day procedure'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'pediatric',
      icon: Baby,
      title: t('pediatricCare'),
      description: t('pediatricCareDesc'),
      features: ['Early detection', 'Vision therapy', 'Child-friendly environment'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'contact-lens',
      icon: Glasses,
      title: t('contactLens'),
      description: t('contactLensDesc'),
      features: ['Specialty lenses', 'Orthokeratology', 'Dry eye solutions'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'medical',
      icon: Stethoscope,
      title: t('medicalEyeCare'),
      description: t('medicalEyeCareDesc'),
      features: ['Injection therapy', 'Laser treatment', 'Disease management'],
      color: 'from-green-500 to-green-600'
    }
  ];

  const handleLearnMore = (serviceId: string) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
            <Eye className="h-4 w-4" />
            <span>{t('ourServices')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => handleLearnMore(service.id)}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group-hover:underline"
                  >
                    {t('learnMore')} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('notSureService')}
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {t('consultationText')}
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              {t('scheduleConsultation')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;