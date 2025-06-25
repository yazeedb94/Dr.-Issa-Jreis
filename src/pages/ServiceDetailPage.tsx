import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, CheckCircle, Phone, Clock, Award, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const serviceDetails = {
    'comprehensive-exams': {
      title: t('comprehensiveExams'),
      description: t('comprehensiveExamsDesc'),
      fullDescription: language === 'ar' 
        ? 'فحوصاتنا الشاملة للعيون تستخدم أحدث التقنيات التشخيصية لتقييم صحة عينيك بشكل كامل. نحن نقدم فحوصات دقيقة تشمل قياس ضغط العين، فحص الشبكية، واختبارات المجال البصري.'
        : 'Our comprehensive eye exams use the latest diagnostic technology to thoroughly assess your eye health. We provide detailed examinations including eye pressure measurements, retinal imaging, and visual field testing.',
      features: [
        language === 'ar' ? 'تصوير الشبكية الرقمي' : 'Digital retinal imaging',
        language === 'ar' ? 'فحص الجلوكوما' : 'Glaucoma screening',
        language === 'ar' ? 'اختبار المجال البصري' : 'Visual field testing',
        language === 'ar' ? 'قياس ضغط العين' : 'Eye pressure measurement',
        language === 'ar' ? 'فحص الانكسار' : 'Refraction testing'
      ],
      benefits: [
        language === 'ar' ? 'الكشف المبكر عن أمراض العيون' : 'Early detection of eye diseases',
        language === 'ar' ? 'وصفات دقيقة للنظارات والعدسات' : 'Accurate prescriptions for glasses and contacts',
        language === 'ar' ? 'مراقبة صحة العين بمرور الوقت' : 'Monitor eye health over time',
        language === 'ar' ? 'تقييم شامل للرؤية' : 'Comprehensive vision assessment'
      ],
      process: [
        language === 'ar' ? 'مراجعة التاريخ الطبي والأعراض' : 'Medical history and symptom review',
        language === 'ar' ? 'اختبارات الرؤية الأولية' : 'Initial vision tests',
        language === 'ar' ? 'فحص العين بالمجهر' : 'Microscopic eye examination',
        language === 'ar' ? 'تصوير الشبكية والعصب البصري' : 'Retinal and optic nerve imaging',
        language === 'ar' ? 'مناقشة النتائج والتوصيات' : 'Results discussion and recommendations'
      ],
      duration: language === 'ar' ? '60-90 دقيقة' : '60-90 minutes',
      price: language === 'ar' ? 'يبدأ من 150 دولار' : 'Starting from $150'
    },
    'lasik': {
      title: t('lasikSurgery'),
      description: t('lasikSurgeryDesc'),
      fullDescription: language === 'ar'
        ? 'جراحة الليزك هي إجراء متقدم لتصحيح الرؤية يستخدم تقنية الليزر لإعادة تشكيل القرنية. هذا الإجراء الآمن والفعال يمكن أن يقلل أو يلغي الحاجة للنظارات أو العدسات اللاصقة.'
        : 'LASIK surgery is an advanced vision correction procedure that uses laser technology to reshape the cornea. This safe and effective procedure can reduce or eliminate the need for glasses or contact lenses.',
      features: [
        language === 'ar' ? 'ليزك بدون شفرة' : 'Bladeless LASIK',
        language === 'ar' ? 'تقنية الموجة المخصصة' : 'Custom wavefront technology',
        language === 'ar' ? 'شفاء سريع' : 'Quick recovery',
        language === 'ar' ? 'نتائج دائمة' : 'Permanent results',
        language === 'ar' ? 'إجراء غير مؤلم' : 'Painless procedure'
      ],
      benefits: [
        language === 'ar' ? 'تحرر من النظارات والعدسات' : 'Freedom from glasses and contacts',
        language === 'ar' ? 'تحسن فوري في الرؤية' : 'Immediate vision improvement',
        language === 'ar' ? 'نمط حياة نشط' : 'Active lifestyle',
        language === 'ar' ? 'توفير طويل المدى' : 'Long-term cost savings'
      ],
      process: [
        language === 'ar' ? 'استشارة وتقييم شامل' : 'Comprehensive consultation and evaluation',
        language === 'ar' ? 'رسم خريطة القرنية' : 'Corneal mapping',
        language === 'ar' ? 'يوم الجراحة - 15 دقيقة' : 'Surgery day - 15 minutes',
        language === 'ar' ? 'متابعة فورية' : 'Immediate follow-up',
        language === 'ar' ? 'فحوصات المتابعة' : 'Follow-up examinations'
      ],
      duration: language === 'ar' ? '15 دقيقة لكلا العينين' : '15 minutes for both eyes',
      price: language === 'ar' ? 'يبدأ من 2500 دولار للعين الواحدة' : 'Starting from $2,500 per eye'
    },
    'cataract': {
      title: t('cataractTreatment'),
      description: t('cataractTreatmentDesc'),
      fullDescription: language === 'ar'
        ? 'علاج المياه البيضاء الحديث يستخدم تقنيات جراحية متطورة لإزالة العدسة المعتمة واستبدالها بعدسة اصطناعية متقدمة. نحن نقدم مجموعة من العدسات المتميزة لتحسين الرؤية.'
        : 'Modern cataract treatment uses advanced surgical techniques to remove the clouded lens and replace it with a premium artificial lens. We offer a range of premium lens options to enhance your vision.',
      features: [
        language === 'ar' ? 'جراحة الشق الصغير' : 'Micro-incision surgery',
        language === 'ar' ? 'عدسات متميزة' : 'Premium lens implants',
        language === 'ar' ? 'إجراء في نفس اليوم' : 'Same-day procedure',
        language === 'ar' ? 'تخدير موضعي' : 'Local anesthesia',
        language === 'ar' ? 'شفاء سريع' : 'Rapid recovery'
      ],
      benefits: [
        language === 'ar' ? 'استعادة الرؤية الواضحة' : 'Restored clear vision',
        language === 'ar' ? 'تحسن في رؤية الألوان' : 'Improved color vision',
        language === 'ar' ? 'تقليل الوهج والهالات' : 'Reduced glare and halos',
        language === 'ar' ? 'تحسن في الرؤية الليلية' : 'Better night vision'
      ],
      process: [
        language === 'ar' ? 'تقييم شامل للمياه البيضاء' : 'Comprehensive cataract evaluation',
        language === 'ar' ? 'اختيار نوع العدسة' : 'Lens selection consultation',
        language === 'ar' ? 'الجراحة - 20 دقيقة' : 'Surgery - 20 minutes',
        language === 'ar' ? 'راحة قصيرة' : 'Brief recovery period',
        language === 'ar' ? 'فحوصات المتابعة' : 'Follow-up appointments'
      ],
      duration: language === 'ar' ? '20 دقيقة للعين الواحدة' : '20 minutes per eye',
      price: language === 'ar' ? 'يبدأ من 3000 دولار للعين الواحدة' : 'Starting from $3,000 per eye'
    },
    'pediatric': {
      title: t('pediatricCare'),
      description: t('pediatricCareDesc'),
      fullDescription: language === 'ar'
        ? 'رعاية عيون الأطفال المتخصصة تركز على الكشف المبكر وعلاج مشاكل الرؤية عند الأطفال. نحن نوفر بيئة مريحة وودودة للأطفال مع أحدث تقنيات الفحص.'
        : 'Specialized pediatric eye care focuses on early detection and treatment of vision problems in children. We provide a comfortable, child-friendly environment with the latest examination technologies.',
      features: [
        language === 'ar' ? 'الكشف المبكر' : 'Early detection',
        language === 'ar' ? 'علاج الرؤية' : 'Vision therapy',
        language === 'ar' ? 'بيئة مناسبة للأطفال' : 'Child-friendly environment',
        language === 'ar' ? 'فحوصات متخصصة' : 'Specialized examinations',
        language === 'ar' ? 'علاج الحول' : 'Strabismus treatment'
      ],
      benefits: [
        language === 'ar' ? 'تطور بصري صحي' : 'Healthy visual development',
        language === 'ar' ? 'تحسن الأداء المدرسي' : 'Improved school performance',
        language === 'ar' ? 'الكشف المبكر عن المشاكل' : 'Early problem detection',
        language === 'ar' ? 'منع مشاكل الرؤية المستقبلية' : 'Prevention of future vision problems'
      ],
      process: [
        language === 'ar' ? 'تقييم تطور الرؤية' : 'Visual development assessment',
        language === 'ar' ? 'فحوصات مناسبة للعمر' : 'Age-appropriate examinations',
        language === 'ar' ? 'اختبارات الرؤية التفاعلية' : 'Interactive vision tests',
        language === 'ar' ? 'استشارة الوالدين' : 'Parent consultation',
        language === 'ar' ? 'خطة العلاج المخصصة' : 'Customized treatment plan'
      ],
      duration: language === 'ar' ? '45-60 دقيقة' : '45-60 minutes',
      price: language === 'ar' ? 'يبدأ من 120 دولار' : 'Starting from $120'
    },
    'contact-lens': {
      title: t('contactLens'),
      description: t('contactLensDesc'),
      fullDescription: language === 'ar'
        ? 'خدمة تركيب العدسات اللاصقة المتخصصة تشمل تقييم شامل لعينيك واختيار أفضل نوع عدسات يناسب نمط حياتك. نحن نقدم جميع أنواع العدسات من اليومية إلى المتخصصة.'
        : 'Specialized contact lens fitting service includes comprehensive eye evaluation and selection of the best lens type for your lifestyle. We offer all types of lenses from daily disposables to specialty lenses.',
      features: [
        language === 'ar' ? 'عدسات متخصصة' : 'Specialty lenses',
        language === 'ar' ? 'تقويم القرنية' : 'Orthokeratology',
        language === 'ar' ? 'حلول جفاف العين' : 'Dry eye solutions',
        language === 'ar' ? 'عدسات ملونة' : 'Colored lenses',
        language === 'ar' ? 'عدسات متعددة البؤر' : 'Multifocal lenses'
      ],
      benefits: [
        language === 'ar' ? 'رؤية طبيعية واسعة' : 'Natural wide vision',
        language === 'ar' ? 'حرية في الأنشطة' : 'Freedom in activities',
        language === 'ar' ? 'مظهر طبيعي' : 'Natural appearance',
        language === 'ar' ? 'راحة طوال اليوم' : 'All-day comfort'
      ],
      process: [
        language === 'ar' ? 'تقييم صحة العين' : 'Eye health evaluation',
        language === 'ar' ? 'قياس انحناء القرنية' : 'Corneal curvature measurement',
        language === 'ar' ? 'اختيار نوع العدسة' : 'Lens type selection',
        language === 'ar' ? 'تجربة العدسات' : 'Lens trial fitting',
        language === 'ar' ? 'تدريب على الاستخدام' : 'Usage training'
      ],
      duration: language === 'ar' ? '60 دقيقة' : '60 minutes',
      price: language === 'ar' ? 'يبدأ من 100 دولار' : 'Starting from $100'
    },
    'medical': {
      title: t('medicalEyeCare'),
      description: t('medicalEyeCareDesc'),
      fullDescription: language === 'ar'
        ? 'الرعاية الطبية المتخصصة للعيون تشمل تشخيص وعلاج أمراض العيون المختلفة مثل اعتلال الشبكية السكري والتنكس البقعي والجلوكوما باستخدام أحدث العلاجات.'
        : 'Specialized medical eye care includes diagnosis and treatment of various eye diseases such as diabetic retinopathy, macular degeneration, and glaucoma using the latest treatments.',
      features: [
        language === 'ar' ? 'علاج بالحقن' : 'Injection therapy',
        language === 'ar' ? 'علاج بالليزر' : 'Laser treatment',
        language === 'ar' ? 'إدارة الأمراض' : 'Disease management',
        language === 'ar' ? 'مراقبة دورية' : 'Regular monitoring',
        language === 'ar' ? 'علاجات متقدمة' : 'Advanced treatments'
      ],
      benefits: [
        language === 'ar' ? 'الحفاظ على الرؤية' : 'Vision preservation',
        language === 'ar' ? 'منع تطور المرض' : 'Disease progression prevention',
        language === 'ar' ? 'تحسن في جودة الحياة' : 'Improved quality of life',
        language === 'ar' ? 'علاج مخصص' : 'Personalized treatment'
      ],
      process: [
        language === 'ar' ? 'تشخيص شامل' : 'Comprehensive diagnosis',
        language === 'ar' ? 'تصوير متقدم للشبكية' : 'Advanced retinal imaging',
        language === 'ar' ? 'وضع خطة العلاج' : 'Treatment plan development',
        language === 'ar' ? 'بدء العلاج' : 'Treatment initiation',
        language === 'ar' ? 'متابعة منتظمة' : 'Regular follow-up'
      ],
      duration: language === 'ar' ? 'يختلف حسب الحالة' : 'Varies by condition',
      price: language === 'ar' ? 'يبدأ من 200 دولار' : 'Starting from $200'
    }
  };

  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4 mb-8">
              <button
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>{t('backToServices')}</span>
              </button>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.fullDescription}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={scrollToContact}
                    className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
                  >
                    <Calendar className="h-5 w-5" />
                    <span>{t('bookAppointment')}</span>
                  </button>
                  <a
                    href="tel:+962795850022"
                    className="flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 font-semibold"
                  >
                    <Phone className="h-5 w-5" />
                    <span>0795576240</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Duration</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{service.duration}</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Price</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{service.price}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Features */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('ourServices')}</h2>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('whyChooseUs')}</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('whatToExpect')}</h2>
                <ol className="space-y-4">
                  {service.process.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === 'ar' ? 'مستعد لبدء رحلتك؟' : 'Ready to Start Your Journey?'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'ar' 
                ? 'احجز استشارتك اليوم واتخذ الخطوة الأولى نحو رؤية أفضل.'
                : 'Book your consultation today and take the first step towards better vision.'
              }
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              {t('scheduleAppointment')}
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
