'use client';

import Image from 'next/image';
import React from 'react';

// interface ServicesSectionProps { }

function _ServicesSection() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Facebook Rental Service</h2>
                    <p className="text-xl text-gray-600 mx-auto">
                        Facebook Ad Account Rental Service In the vast digital landscape, one platform connects people across the globe — Facebook.
                        For businesses, it's more than just a social network; it’s a powerful marketing channel.
                        Unlock your advertising potential with Lucky Agency Media’s Facebook ad account rental service.
                        Whether you’re facing restrictions or simply want a smoother experience — we’ve got your back.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Service 1 */}
                    <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300 flex items-start gap-4 hover:shadow-lg">
                        <Image src="/happy.png" alt="All Product" className="w-14 h-14 object-contain mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">All Product</h3>
                            <p className="text-gray-600 text-sm">Allow all White hat, light Grey hat products.</p>
                        </div>
                    </div>
                    {/* Service 2 */}
                    <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300 flex items-start gap-4 hover:shadow-lg">
                        <Image src="/refund.png" alt="Refund" className="w-14 h-14 object-contain mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Refund</h3>
                            <p className="text-gray-600 text-sm">We will refund amount left when you want stop work with our ads account.</p>
                        </div>
                    </div>
                    {/* Service 3 */}
                    <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300 flex items-start gap-4 hover:shadow-lg">
                        <Image src="/noidia.png" alt="VAT" className="w-14 h-14 object-contain mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">VAT</h3>
                            <p className="text-gray-600 text-sm">ZERO %VAT.</p>
                        </div>
                    </div>
                    {/* Service 4 */}
                    <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300 flex items-start gap-4 hover:shadow-lg">
                        <Image src="/bank.png" alt="Unlimited" className="w-14 h-14 object-contain mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Unlimited</h3>
                            <p className="text-gray-600 text-sm">Unlimited spending right after initialization.</p>
                        </div>
                    </div>
                    {/* Service 5 */}
                    <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300 flex items-start gap-4 hover:shadow-lg">
                        <Image src="/shied.png" alt="Security" className="w-14 h-14 object-contain mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Security</h3>
                            <p className="text-gray-600 text-sm">Campaign security, quick top up.</p>
                        </div>
                    </div>
                    {/* Service 6 */}
                    <div className="service-card bg-white p-8 rounded-lg shadow-md transition duration-300 flex items-start gap-4 hover:shadow-lg">
                        <Image src="/contract.png" alt="Contract" className="w-14 h-14 object-contain mr-4" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Contract</h3>
                            <p className="text-gray-600 text-sm">Free fanpage appeal, have business contract.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <button className="border-2 border-blue-600 text-blue-600 font-bold px-5 py-2 rounded-full uppercase hover:bg-blue-50 transition">Personal Ads Account</button>
                    <button className="border-2 border-blue-600 text-blue-600 font-bold px-5 py-2 rounded-full uppercase hover:bg-blue-50 transition">Business Manager</button>
                    <button className="border-2 border-blue-600 text-blue-600 font-bold px-5 py-2 rounded-full uppercase hover:bg-blue-50 transition">Fanpage</button>
                    <button className="border-2 border-blue-600 text-blue-600 font-bold px-5 py-2 rounded-full uppercase hover:bg-blue-50 transition">Profile</button>
                </div>

                {/* Facebook Page Service Section */}
                <div id="facebook-page-service" className="max-w-6xl mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Facebook Page Service</h2>
                            <p className="text-gray-700 text-base leading-relaxed">
                                Lucky Agency Media offers effective advertising services through a network of highly trusted fanpages.
                                You can launch your campaigns without facing common issues such as restrictions, limited delivery, or disapprovals.
                                Our experienced support team is fast, reliable, and ready to assist with every aspect of your advertising campaigns.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/camp.png"
                                alt="Facebook Ads Campaign Screenshot"
                                className="w-full rounded-xl shadow-lg border border-gray-200"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <p className="text-gray-700 text-base leading-relaxed">
                        *Always reserve a stable number of &gt;1000 accounts with spending history ( Accept BH, WH, GH : Gambling, Crypto, App,
                        NFT, Finance..... ), Support campaign optimization for customers - 24/7 Support.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4 h-full">
                            <Image src="/camp1.jpg" alt="Facebook Ads Campaign Screenshot" className="h-1/2 object-cover rounded-xl shadow-lg border border-gray-200 w-full" />
                            <Image src="/camp3.jpg" alt="Extra Image" className="h-1/2 object-cover rounded-xl shadow-lg border border-gray-200 w-full" />
                        </div>
                        <Image src="/camp2.jpg" alt="Facebook Ads Campaign Screenshot" className="h-full object-cover rounded-xl shadow-lg border border-gray-200 w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}

_ServicesSection.displayName = 'ServicesSection';
const ServicesSection = React.memo(_ServicesSection);

export default ServicesSection;
