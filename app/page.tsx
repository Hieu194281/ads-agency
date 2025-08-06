
'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { LanguageContext } from '@/app/context/LanguageContext';
import LanguageSwitcher from '@/app/components/LanguageSwitcher';

const translations = {
  en: {
    home: "Home",
    services: "Services",
    whyUs: "Why Us",
    about: "About Us",
    contact: "Contact",
  },
  vi: {
    home: "Trang chủ",
    services: "Dịch vụ",
    whyUs: "Tại sao chọn chúng tôi",
    about: "Về chúng tôi",
    contact: "Liên hệ",
  }
};

export default function Home() {
  const context = useContext(LanguageContext);
  const t = translations[context?.language as keyof typeof translations || 'en'];

  return (
    <>
    {/* Header/Navigation */}
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-indigo-600">
                    <a href="#top">ADS Agency</a>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#top" className="nav-link text-gray-700 hover:text-indigo-600">{t.home}</a>
                    <a href="#services" className="nav-link text-gray-700 hover:text-indigo-600">{t.services}</a>
                    <a href="#why-us" className="nav-link text-gray-700 hover:text-indigo-600">{t.whyUs}</a>
                    <a href="#about" className="nav-link text-gray-700 hover:text-indigo-600">{t.about}</a>
                    <a href="#contact"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">{t.contact}</a>
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Grow Your Business With Our Facebook Advertising
                Expertise</h1>
              <p className="text-xl mb-8 opacity-90">We help businesses scale their revenue through strategic Facebook
                & Instagram ad campaigns that deliver real results.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact"
                  className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-50 transition text-center shadow-sm">Get
                  Started</a>
                <a href="#services"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-indigo-600 transition text-center">Learn
                  More</a>
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
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-gray-500 mb-10">TRUSTED BY LEADING BRANDS</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <Image src="https://via.placeholder.com/150x60?text=Brand+1" alt="Client Logo"
              className="h-8 opacity-60 hover:opacity-100 transition" width={150} height={60} />
            <Image src="https://via.placeholder.com/150x60?text=Brand+2" alt="Client Logo"
              className="h-8 opacity-60 hover:opacity-100 transition" width={150} height={60} />
            <Image src="https://via.placeholder.com/150x60?text=Brand+3" alt="Client Logo"
              className="h-8 opacity-60 hover:opacity-100 transition" width={150} height={60} />
            <Image src="https://via.placeholder.com/150x60?text=Brand+4" alt="Client Logo"
              className="h-8 opacity-60 hover:opacity-100 transition" width={150} height={60} />
            <Image src="https://via.placeholder.com/150x60?text=Brand+5" alt="Client Logo"
              className="h-8 opacity-60 hover:opacity-100 transition" width={150} height={60} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Facebook Advertising Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We specialize in high-converting Facebook ad
              campaigns tailored to your business goals.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Audience Targeting</h3>
              <p className="text-gray-600 mb-4">Precision targeting to reach your ideal customers based on
                demographics, interests, and behaviors.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-indigo-400 mt-1 mr-2"></i>
                  <span>Custom audience creation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                  <span>Lookalike audience expansion</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                  <span>Retargeting strategies</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-ad text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Ad Creative Development</h3>
              <p className="text-gray-600 mb-4">Eye-catching ad creatives that stop the scroll and drive engagement.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-2"></i>
                  <span>Video ad production</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-2"></i>
                  <span>High-converting copywriting</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-purple-500 mt-1 mr-2"></i>
                  <span>A/B testing framework</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Campaign Management</h3>
              <p className="text-gray-600 mb-4">Full-service campaign setup, optimization, and scaling for maximum
                ROI.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Daily monitoring & optimization</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Conversion tracking setup</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                  <span>Performance reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ADS Agency</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We deliver measurable results through data-driven
              Facebook advertising strategies.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fas fa-trophy"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-gray-600">We've generated over $10M in revenue for our clients through Facebook
                advertising campaigns with an average 5x ROAS.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Strategic Approach</h3>
              <p className="text-gray-600">Our proprietary framework combines creative testing, audience segmentation,
                and bid optimization for maximum performance.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
              <p className="text-gray-600">You'll work directly with our team of Facebook ads experts who provide
                transparent communication and regular updates.</p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-10 bg-indigo-600 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Performance Metrics</h3>
                <p className="mb-6">We measure success by the results we deliver for our clients:</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold mb-1">5x</div>
                    <div className="text-sm opacity-80">Average ROAS</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">42%</div>
                    <div className="text-sm opacity-80">Lower CPA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">3.8%</div>
                    <div className="text-sm opacity-80">Avg. CTR</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">$10M+</div>
                    <div className="text-sm opacity-80">Revenue Generated</div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-10">
                <h3 className="text-2xl font-bold mb-4">Case Study</h3>
                <p className="mb-6 font-semibold">E-commerce Brand: 7x ROAS in 90 Days</p>
                <p className="text-gray-600 mb-4">We helped an e-commerce client increase their Facebook ad revenue
                  by 320% while reducing cost per acquisition by 35% through our strategic approach.</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                    <span>Implemented advanced audience segmentation</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                    <span>Developed high-converting video creatives</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                    <span>Optimized campaign structure for scalability</span>
                  </li>
                </ul>
                <a href="#contact" className="text-indigo-600 font-semibold hover:underline">Get similar results for
                  your business →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12 p-8 bg-white/10 backdrop-blur-sm rounded-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About ADS Agency</h2>
              <p className="mb-6 opacity-90">We're a team of Facebook advertising specialists dedicated to helping
                businesses grow through strategic paid social campaigns.</p>
              <p className="mb-8 opacity-90">Founded in 2018, we've managed over $5M in Facebook ad spend across
                various industries, from e-commerce to SaaS to local services. Our data-driven approach combines
                creative excellence with analytical rigor to deliver consistent results.</p>

              <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-white/20">
                <Image src="https://via.placeholder.com/80?text=CEO" alt="Team Member"
                  className="w-16 h-16 rounded-full border-2 border-white" width={80} height={80} />
                <div>
                  <p className="font-semibold text-lg">John Smith</p>
                  <p className="opacity-80 text-sm">Founder & CEO</p>
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
              <div className="md:w-1/2 bg-indigo-600 text-white p-10">
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="mb-8">Ready to scale your business with Facebook advertising? Fill out the form and
                  we'll get back to you within 24 hours.</p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p>(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p>hello@adsagency.com</p>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                    <div className="text-2xl mr-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                                    <p className="font-semibold">Location</p>
                                    <p>123 Business Ave, Suite 100<br />New York, NY 10001</p>
                                </div>
                  </div> */}
                </div>
              </div>

              <div className="md:w-1/2 p-10">
                <form id="contactForm" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input type="text" id="name" name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input type="email" id="email" name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested
                      In</label>
                    <select id="service" name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select a service</option>
                      <option value="facebook-ads">Facebook Advertising</option>
                      <option value="instagram-ads">Instagram Advertising</option>
                      <option value="full-management">Full Campaign Management</option>
                      <option value="audit">Account Audit</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <textarea id="message" name="message" rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>

                  <button type="submit"
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition font-semibold shadow-sm">Submit
                    Request</button>
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
              <h3 className="text-xl font-bold mb-4">ADS Agency</h3>
              <p className="text-gray-400">Specialists in Facebook advertising helping businesses grow through
                strategic paid social campaigns.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#top" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#why-us" className="text-gray-400 hover:text-white transition">Why Us</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Facebook Ads</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Instagram Ads</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Audience Targeting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Ad Creative</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Campaign Management</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white transition text-xl"><i
                  className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-white transition text-xl"><i
                  className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white transition text-xl"><i
                  className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-white transition text-xl"><i
                  className="fab fa-linkedin-in"></i></a>
              </div>
              <p className="text-gray-400">Subscribe to our newsletter</p>
              <form className="mt-2 flex">
                <input type="email" placeholder="Your email"
                  className="px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none w-full" />
                <button type="submit" className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition"><i
                  className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 ADS Agency. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
