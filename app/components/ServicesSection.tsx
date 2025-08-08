'use client';

import Image from 'next/image';
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../translations';

export const ServicesSection = () => {
    const context = useContext(LanguageContext);
    const t = translations[context?.language as keyof typeof translations || 'en'];
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.facebookRental.title}</h2>
                    <p className="text-xl text-gray-600 mx-auto">
                        {t.services.rentalService.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Service 1 */}
                    <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300 flex items-start gap-4 hover:shadow-lg">
                        <Image src="/happy.png" alt={t.services.rentalService.features.allProduct.title} width={56} height={56} className="w-14 h-14 object-contain mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">{t.services.rentalService.features.allProduct.title}</h3>
                            <p className="text-gray-600 text-sm">{t.services.rentalService.features.allProduct.description}</p>
                        </div>
                    </div>
                    {/* Service 2 */}
                    <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300 flex items-start gap-4 hover:shadow-lg">
                        <Image src="/refund.png" alt={t.services.rentalService.features.refund.title} width={56} height={56} className="w-14 h-14 object-contain mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">{t.services.rentalService.features.refund.title}</h3>
                            <p className="text-gray-600 text-sm">{t.services.rentalService.features.refund.description}</p>
                        </div>
                    </div>
                    {/* Service 3 */}
                    <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300 flex items-start gap-4 hover:shadow-lg">
                        <Image src="/noidia.png" alt={t.services.rentalService.features.vat.title} width={56} height={56} className="w-14 h-14 object-contain mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">{t.services.rentalService.features.vat.title}</h3>
                            <p className="text-gray-600 text-sm">{t.services.rentalService.features.vat.description}</p>
                        </div>
                    </div>
                    {/* Service 4 */}
                    <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300 flex items-start gap-4 hover:shadow-lg">
                        <Image src="/bank.png" alt={t.services.rentalService.features.unlimited.title} width={56} height={56} className="w-14 h-14 object-contain mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">{t.services.rentalService.features.unlimited.title}</h3>
                            <p className="text-gray-600 text-sm">{t.services.rentalService.features.unlimited.description}</p>
                        </div>
                    </div>
                    {/* Service 5 */}
                    <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300 flex items-start gap-4 hover:shadow-lg">
                        <Image src="/shied.png" alt={t.services.rentalService.features.security.title} width={56} height={56} className="w-14 h-14 object-contain mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">{t.services.rentalService.features.security.title}</h3>
                            <p className="text-gray-600 text-sm">{t.services.rentalService.features.security.description}</p>
                        </div>
                    </div>
                    {/* Service 6 */}
                    <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300 flex items-start gap-4 hover:shadow-lg">
                        <Image src="/contract.png" alt={t.services.rentalService.features.contract.title} width={56} height={56} className="w-14 h-14 object-contain mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">{t.services.rentalService.features.contract.title}</h3>
                            <p className="text-gray-600 text-sm">{t.services.rentalService.features.contract.description}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <button className="border-2 border-blue-600 text-blue-600 font-bold px-5 py-2 rounded-full uppercase hover:bg-blue-50 transition">{t.services.rentalService.buttons.personalAds}</button>
                    <button className="border-2 border-blue-600 text-blue-600 font-bold px-5 py-2 rounded-full uppercase hover:bg-blue-50 transition">{t.services.rentalService.buttons.businessManager}</button>
                    <button className="border-2 border-blue-600 text-blue-600 font-bold px-5 py-2 rounded-full uppercase hover:bg-blue-50 transition">{t.services.rentalService.buttons.fanpage}</button>
                    <button className="border-2 border-blue-600 text-blue-600 font-bold px-5 py-2 rounded-full uppercase hover:bg-blue-50 transition">{t.services.rentalService.buttons.profile}</button>
                </div>

                {/* Facebook Page Service Section */}
                <div id="facebook-page-service" className="max-w-4xl mx-auto px-6 py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                            {t.services.rentalService.ourServices.title}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-semibold">{t.services.rentalService.ourServices.stableAccounts.title}</span> {t.services.rentalService.ourServices.stableAccounts.description}
                            </p>
                        </div>

                        <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-semibold">{t.services.rentalService.ourServices.flexibleSpending.title}</span> {t.services.rentalService.ourServices.flexibleSpending.description}
                            </p>
                        </div>

                        <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-semibold">{t.services.rentalService.ourServices.fullSetup.title}</span> {t.services.rentalService.ourServices.fullSetup.description}
                            </p>
                        </div>

                        <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-semibold">{t.services.rentalService.ourServices.support.title}</span> {t.services.rentalService.ourServices.support.description}
                            </p>
                        </div>

                        <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-semibold">{t.services.rentalService.ourServices.multiIndustry.title}</span> {t.services.rentalService.ourServices.multiIndustry.description}
                            </p>
                        </div>

                        <div className="flex items-start space-x-3 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-semibold">{t.services.rentalService.ourServices.underYourEmail.title}</span> {t.services.rentalService.ourServices.underYourEmail.description}
                            </p>
                        </div>

                        <div className="flex items-start space-x-3 p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-semibold">{t.services.rentalService.ourServices.dedicatedTeam.title}</span> {t.services.rentalService.ourServices.dedicatedTeam.description}
                            </p>
                        </div>

                        <div className="flex items-start space-x-3 p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500 md:col-span-2">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">
                                <span className="font-semibold">{t.services.rentalService.ourServices.integratedTech.title}</span> {t.services.rentalService.ourServices.integratedTech.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-700 font-bold text-lg leading-relaxed text-center">
                        {t.services.rentalService.facebookPageService.note}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4 h-full">
                            <Image src="/camp1.jpg" alt="Facebook Ads Campaign Screenshot" width={400} height={200} className="h-1/2 object-cover rounded-xl shadow-lg border border-gray-200 w-full" />
                            <Image src="/camp3.jpg" alt="Extra Image" width={400} height={200} className="h-1/2 object-cover rounded-xl shadow-lg border border-gray-200 w-full" />
                        </div>
                        <Image src="/camp2.jpg" alt="Facebook Ads Campaign Screenshot" width={400} height={400} className="h-full object-cover rounded-xl shadow-lg border border-gray-200 w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}

