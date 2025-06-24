import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('location'),
      details: ['Pr. Hasan St., Irbid', 'XWG5+28F, Amman', 'عمان، دوار الداخلية، المستشفى الاردني الفنلندي', 'اربد، مقابل مستشفى ابن النفيس، مجمع ابو حشمة'],
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Phone,
      title: t('phone'),
      details: ['Mobile: 0795576240','Mobile: 0798719009', 'Tel: 064652822','whatsapp: 0795576240'],
      color: 'text-teal-600 dark:text-teal-400'
    },
    {
      icon: Mail,
      title: t('email'),
      details: ['example@email.com', ''],
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Clock,
      title: t('hours'),
      details: ['Sat-Wen: 9:00 AM - 6:00 PM', 'thur: 10:00 AM - 2:00 PM', 'Fri: closed'],
      color: 'text-orange-600 dark:text-orange-400'
    }
  ];

  const serviceOptions = [
    { value: 'comprehensive-exam', label: t('comprehensiveExams') },
    { value: 'lasik', label: t('lasikSurgery') },
    { value: 'cataract', label: t('cataractTreatment') },
    { value: 'pediatric', label: t('pediatricCare') },
    { value: 'contact-lens', label: t('contactLens') },
    { value: 'medical', label: t('medicalEyeCare') },
    { value: 'emergency', label: language === 'ar' ? 'زيارة طارئة' : 'Emergency Visit' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
            <Calendar className="h-4 w-4" />
            <span>{t('contact')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className={`inline-flex p-3 rounded-lg bg-gray-100 dark:bg-gray-800 mb-4`}>
                      <IconComponent className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 dark:text-gray-400 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'ar' ? 'اعثر علينا' : 'Find Us'}
              </h3>
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <p className="text-gray-600 dark:text-gray-400">
                    {language === 'ar' ? 'الخريطة التفاعلية ستكون هنا' : 'Interactive map would be here'}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {language === 'ar' ? 'المركز الطبي وسط المدينة' : 'Downtown Medical Center'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('requestAppointment')}</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('thankYou')}</h4>
                <p className="text-gray-600 dark:text-gray-400">{t('contactConfirmation')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('fullName')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder={language === 'ar' ? 'اسمك الكامل' : 'Your full name'}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('phoneNumber')} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="0795576240"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('emailAddress')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('serviceNeeded')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="">{t('selectService')}</option>
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('additionalInfo')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder={t('additionalInfoPlaceholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{t('scheduleAppointment')}</span>
                </button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  {t('requiredFields')}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;