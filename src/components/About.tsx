import React from 'react';
import { Award, Users, Clock, Shield, Star, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  const achievements = [
    { icon: Award, value: '25+', label: t('yearsExp') },
    { icon: Users, value: '50K+', label: t('happyPatients') },
    { icon: Star, value: '4.9/5', label: t('patientRating') },
    { icon: CheckCircle, value: '98%', label: t('successRate') }
  ];

  const doctors = [
    {
      name: language === 'ar' ? '' : '',
      title: language === 'ar' ? '' : '',
      specialization: language === 'ar' ? '' : '',
      experience: language === 'ar' ? ' ' : '',
      image: ''
    }, 
    {
      name: language === 'ar' ? 'الدكتور عيسى جريس' : 'Dr. Issa Jreis',
      title: language === 'ar' ? 'استشاري طب وجراحة العيون' : 'Ophthalmology consultant',
      specialization: language === 'ar' ? 'رعاية عيون الأطفال' : 'Pediatric Eye Care',
      experience: language === 'ar' ? '30 سنة' : '30 years',
      image: 'https://scontent.famm7-1.fna.fbcdn.net/v/t39.30808-6/434412222_440188378397077_6281681687372519298_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGqX16ZjsBIewyPpE8D19pcYDNjZ-tfVipgM2Nn619WKhdVpMUxgmB0Fwz8aRqtuMycrT6Kotd5u04z2R0AJ0B-&_nc_ohc=X3TFyGc4FuQQ7kNvwFtzjys&_nc_oc=Adne_RDNRp8ZaculYroJjLpek4U7kJttjhJO6APSOGHF-eDzIXdBZXkXAkp7aeEEsEQ&_nc_zt=23&_nc_ht=scontent.famm7-1.fna&_nc_gid=5FkZKo4UVUlOKWKcDQh0CQ&oh=00_AfOsnYhyKANym2T8t9jA5u35-jDSUUEuaw0YR5cE0h0vPQ&oe=6861E08F'
    }, 
    {
      name: language === 'ar' ? '' : '',
      title: language === 'ar' ? '' : '',
      specialization: language === 'ar' ? '' : '',
      experience: language === 'ar' ? ' ' : ' ',
      image: ''
    } 
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
            <Users className="h-4 w-4" />
            <span>{t('about')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t('aboutTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 rounded-2xl p-6 mb-4 group-hover:from-blue-200 group-hover:to-teal-200 dark:group-hover:from-blue-800 dark:group-hover:to-teal-800 transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{achievement.value}</div>
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{achievement.label}</div>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {t('commitmentTitle')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('commitmentText1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('commitmentText2')}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">{t('boardCertified')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">{t('sameDayAppointments')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-purple-500" />
                <span className="text-gray-700 dark:text-gray-300">{t('latestTechnology')}</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5752254/pexels-photo-5752254.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern eye clinic interior"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('meetTeam')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('teamSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{doctor.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{doctor.title}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{doctor.specialization}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">{doctor.experience} {language === 'ar' ? '' : 'experience'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
