
'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { LanguageContext } from '@/app/context/LanguageContext';
import LanguageSwitcher from '@/app/components/LanguageSwitcher';
import { translations } from '@/app/translations';
import { ServicesSection } from './components/ServicesSection';
import { useContactForm } from './hooks/useContactForm';

export default function Home() {
  const context = useContext(LanguageContext);
  const t = translations[context?.language as keyof typeof translations || 'en'];

  // Contact form logic
  const {
    formData,
    isSubmitting,
    isSuccess,
    error,
    handleInputChange,
    handleSubmit,
    resetForm,
  } = useContactForm();

  return (
    <>
      {/* Header/Navigation */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text drop-shadow-md">
              <a href="#top">
                <Image src="/logo.png" alt="ADS Agency Logo" width={100} height={50} />
              </a>
            </div>


            <nav className="hidden md:flex items-center space-x-8">
              <a href="#top" className="nav-link text-gray-700 hover:text-indigo-600">{t.nav.home}</a>
              <a href="#services" className="nav-link text-gray-700 hover:text-indigo-600">{t.nav.services}</a>
              <a href="#why-us" className="nav-link text-gray-700 hover:text-indigo-600">{t.nav.whyUs}</a>
              <a href="#about" className="nav-link text-gray-700 hover:text-indigo-600">{t.nav.about}</a>
              <a href="#contact"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">{t.nav.contact}</a>
              <LanguageSwitcher />
            </nav>

            <button className="md:hidden focus:outline-none">
              <i className="fas fa-bars text-2xl text-gray-700"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="hero-gradient pt-32 pb-20 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.hero.title}</h1>
              <p className="text-xl mb-8 opacity-90">{t.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact"
                  className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-50 transition text-center shadow-sm">{t.hero.getStarted}</a>
                <a href="#services"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-indigo-600 transition text-center">{t.hero.learnMore}</a>
              </div>
            </div>
            <div className="md:w-1/2 fade-in">
              <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Digital Marketing" className="rounded-lg shadow-2xl" width={1470} height={980} />
            </div>
          </div>
        </div>
      </section>

      {/* Clients/Logos Section */}
      {/* <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-gray-500 mb-10">{t.hero.trustedBy}</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <Image src="/logo.png" alt="Client Logo"
              className="h-8 opacity-60 hover:opacity-100 transition" width={150} height={60} />
            <Image src="/logo.png" alt="Client Logo"
              className="h-8 opacity-60 hover:opacity-100 transition" width={150} height={60} />
            <Image src="/logo.png" alt="Client Logo"
              className="h-8 opacity-60 hover:opacity-100 transition" width={150} height={60} />
            <Image src="/logo.png" alt="Client Logo"
              className="h-8 opacity-60 hover:opacity-100 transition" width={150} height={60} />
            <Image src="/logo.png" alt="Client Logo"
              className="h-8 opacity-60 hover:opacity-100 transition" width={150} height={60} />
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{t.services.audienceTargeting.title}</h3>
              <p className="text-gray-600 mb-4">{t.services.audienceTargeting.description}</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-indigo-400 mt-1 mr-2"></i>
                  <span>{t.services.audienceTargeting.features[0]}</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                  <span>{t.services.audienceTargeting.features[1]}</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                  <span>{t.services.audienceTargeting.features[2]}</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-ad text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{t.services.adCreative.title}</h3>
              <p className="text-gray-600 mb-4">{t.services.adCreative.description}</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-2"></i>
                  <span>{t.services.adCreative.features[0]}</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-2"></i>
                  <span>{t.services.adCreative.features[1]}</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-2"></i>
                  <span>{t.services.adCreative.features[2]}</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{t.services.campaignManagement.title}</h3>
              <p className="text-gray-600 mb-4">{t.services.campaignManagement.description}</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>{t.services.campaignManagement.features[0]}</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>{t.services.campaignManagement.features[1]}</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>{t.services.campaignManagement.features[2]}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.whyUs.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.whyUs.subtitle}</p>
          </div>

          <div className="space-y-8">
            {/* First row - 3 items */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-trophy"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{t.whyUs.provenResults.title}</h3>
                <p className="text-gray-600">{t.whyUs.provenResults.description}</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{t.whyUs.strategicApproach.title}</h3>
                <p className="text-gray-600">{t.whyUs.strategicApproach.description}</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-headset"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{t.whyUs.dedicatedSupport.title}</h3>
                <p className="text-gray-600">{t.whyUs.dedicatedSupport.description}</p>
              </div>
            </div>

            {/* Second row - 2 items centered */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{t.whyUs.accountQuality.title}</h3>
                <p className="text-gray-600">{t.whyUs.accountQuality.description}</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{t.whyUs.support.title}</h3>
                <p className="text-gray-600">{t.whyUs.support.description}</p>
              </div>
            </div>
          </div>
          {/* 
          <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-10 bg-indigo-600 text-white">
                <h3 className="text-2xl font-bold mb-4">{t.whyUs.performanceMetrics.title}</h3>
                <p className="mb-6">{t.whyUs.performanceMetrics.subtitle}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold mb-1">5x</div>
                    <div className="text-sm opacity-80">{t.whyUs.performanceMetrics.metrics.roas}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">42%</div>
                    <div className="text-sm opacity-80">{t.whyUs.performanceMetrics.metrics.cpa}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">3.8%</div>
                    <div className="text-sm opacity-80">{t.whyUs.performanceMetrics.metrics.ctr}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">$10M+</div>
                    <div className="text-sm opacity-80">{t.whyUs.performanceMetrics.metrics.revenue}</div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-10">
                <h3 className="text-2xl font-bold mb-4">{t.whyUs.caseStudy.title}</h3>
                <p className="mb-6 font-semibold">{t.whyUs.caseStudy.subtitle}</p>
                <p className="text-gray-600 mb-4">{t.whyUs.caseStudy.description}</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                    <span>{t.whyUs.caseStudy.achievements[0]}</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                    <span>{t.whyUs.caseStudy.achievements[1]}</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                    <span>{t.whyUs.caseStudy.achievements[2]}</span>
                  </li>
                </ul>
                <a href="#contact" className="text-indigo-600 font-semibold hover:underline">{t.whyUs.caseStudy.cta}</a>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12 p-8 bg-white/10 backdrop-blur-sm rounded-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.about.title}</h2>
              <p className="mb-6 opacity-90">{t.about.description1}</p>
              <p className="mb-8 opacity-90">{t.about.description2}</p>

              <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-white/20">
                <Image src="/avatar.png" alt="Team Member"
                  className="w-16 h-16 rounded-full border-2 border-white" width={80} height={80} />
                <div>
                  <p className="font-semibold text-lg">{t.about.founder.name}</p>
                  <p className="opacity-80 text-sm">{t.about.founder.title}</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Our Team" className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105" width={1470} height={980} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-indigo-600 text-white p-10 gap-6">
                <div>
                  <h2 className="text-3xl font-bold mb-6">{t.contact.title}</h2>
                  <p className="mb-8">{t.contact.subtitle}</p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">
                        <i className="fab fa-whatsapp"></i>
                      </div>
                      <div>
                        <p className="font-semibold">{t.contact.contactInfo.whatsapp}</p>
                        <p>+84 96 1439036</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-2xl mr-4">
                        <i className="fab fa-telegram-plane"></i>
                      </div>
                      <div>
                        <p className="font-semibold">{t.contact.contactInfo.telegram}</p>
                        <p>adsagency888@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-8'>
                  <h2 className="text-3xl font-bold mb-6">{t.contact.title2}</h2>

                  <div className="grid grid-cols-2 gap-6">
                    {/* Telegram QR */}
                    <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="w-20 h-20 mb-3 bg-white rounded-xl p-2 shadow-lg">
                        <Image
                          src="/telegram.png"
                          alt="Telegram QR Code"
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{t.contact.telegram}</h3>
                      <p className="text-sm opacity-80 text-center">{t.contact.scanToChat.telegram}</p>
                      <a
                        href="https://t.me/ads_agency88"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-xs bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
                      >
                        @ads_agency88
                      </a>
                    </div>

                    {/* WhatsApp QR */}
                    <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="w-20 h-20 mb-3 bg-white rounded-xl p-2 shadow-lg">
                        <Image
                          src="/whatapp.png"
                          alt="WhatsApp QR Code"
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{t.contact.contactInfo.whatsapp}</h3>
                      <p className="text-sm opacity-80 text-center">{t.contact.scanToChat.whatsapp}</p>
                      <a
                        href="https://api.whatsapp.com/send/?phone=84961439036&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-xs bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
                      >
                        +84 96 1439036
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 p-10">
                {/* Success Message */}
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle mr-2"></i>
                      <span>{t.contact.form.success}</span>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    <div className="flex items-center">
                      <i className="fas fa-exclamation-circle mr-2"></i>
                      <span>{error}</span>
                    </div>
                  </div>
                )}

                <form id="contactForm" className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">{t.contact.form.name}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">{t.contact.form.email}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">{t.contact.form.phone}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">{t.contact.form.service}</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    >
                      <option value="">{t.contact.form.serviceOptions.select}</option>
                      <option value="facebook-ads">{t.contact.form.serviceOptions.facebookAds}</option>
                      <option value="instagram-ads">{t.contact.form.serviceOptions.instagramAds}</option>
                      <option value="full-management">{t.contact.form.serviceOptions.fullManagement}</option>
                      <option value="audit">{t.contact.form.serviceOptions.audit}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">{t.contact.form.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-md transition font-semibold shadow-sm ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        {t.contact.form.submitting}
                      </div>
                    ) : (
                      t.contact.form.submit
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <Image src="/logo2.png" alt="ADS Agency Logo" width={100} height={50} />
              </div>
              <p className="text-gray-400">{t.footer.description}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2">
                <li><a href="#top" className="text-gray-400 hover:text-white transition">{t.nav.home}</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">{t.nav.services}</a></li>
                <li><a href="#why-us" className="text-gray-400 hover:text-white transition">{t.nav.whyUs}</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">{t.nav.about}</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">{t.nav.contact}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t.footer.services}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">{t.footer.servicesList.facebookAds}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">{t.footer.servicesList.instagramAds}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">{t.footer.servicesList.audienceTargeting}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">{t.footer.servicesList.adCreative}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">{t.footer.servicesList.campaignManagement}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t.footer.connectWithUs}</h4>
              <div className="grid grid-cols-1 gap-4">
                {/* Telegram QR */}
                <div className="flex items-center p-3 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-750 transition-all duration-300">
                  <div className="w-12 h-12 mr-3 bg-white rounded-lg p-1 shadow-md flex-shrink-0">
                    <Image
                      src="/telegram.png"
                      alt="Telegram QR Code"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium text-white text-sm">{t.contact.telegram}</h5>
                    <a
                      href="https://t.me/ads_agency88"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-white transition-colors truncate block"
                    >
                      @ads_agency88
                    </a>
                  </div>
                </div>

                {/* WhatsApp QR */}
                <div className="flex items-center p-3 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-750 transition-all duration-300">
                  <div className="w-12 h-12 mr-3 bg-white rounded-lg p-1 shadow-md flex-shrink-0">
                    <Image
                      src="/whatapp.png"
                      alt="WhatsApp QR Code"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium text-white text-sm">WhatsApp</h5>
                    <a
                      href="https://api.whatsapp.com/send/?phone=84961439036&text&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-white transition-colors truncate block"
                    >
                      +84 96 1439036
                    </a>
                  </div>
                </div>
              </div>
              {/* <p className="text-gray-400">{t.footer.newsletter}</p>
              <form className="mt-2 flex">
                <input type="email" placeholder={t.footer.emailPlaceholder}
                  className="px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none w-full" />
                <button type="submit" className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition"><i
                  className="fas fa-paper-plane"></i></button>
              </form> */}
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">{t.footer.links.privacyPolicy}</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">{t.footer.links.termsOfService}</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">{t.footer.links.cookies}</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
