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
                <div id="facebook-page-service" className="max-w-6xl mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.facebookPage.title}</h2>
                            <p className="text-gray-700 text-xl leading-relaxed">
                                {t.services.rentalService.facebookPageService.description}
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/camp.png"
                                alt="Facebook Ads Campaign Screenshot"
                                width={600}
                                height={400}
                                className="w-full rounded-xl shadow-lg border border-gray-200"
                            />
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

