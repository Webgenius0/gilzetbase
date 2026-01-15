import React from 'react';
import { Link } from 'react-router';

export default function AffiliateProgramHome() {
    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-black text-white py-24 lg:py-32">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=2535&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#d4af37] text-sm font-semibold tracking-wider mb-6">
                        OFFICIAL PARTNER PROGRAM
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Turn Your Passion <br /> Into <span className="text-[#d4af37]">Profit</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Join our exclusive affiliate network. Refer photographers and art lovers, and earn generous commissions on every successful registration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/affiliate/register" className="bg-[#d4af37] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c29f2d] transition-transform hover:scale-105">
                            Become a Partner
                        </Link>
                        <Link to="/affiliate/login" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                            Partner Login
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "High Commission", desc: "Earn up to 30% commission on every new member you refer to the platform.", icon: "💰" },
                            { title: "Real-time Tracking", desc: "Monitor your clicks, signups, and earnings in real-time through your dedicated dashboard.", icon: "📊" },
                            { title: "Marketing Tools", desc: "Access high-quality banners, social assets, and custom links to help you promote.", icon: "🚀" },
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#d4af37]/30 transition-colors">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
                        <p className="text-gray-500 text-lg">Simple steps to start earning today.</p>
                    </div>

                    <div className="relative">
                        {/* Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

                        <div className="grid md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: "01", title: "Sign Up", desc: "Complete the simple registration form." },
                                { step: "02", title: "Get Link", desc: "Generate your unique tracking URL." },
                                { step: "03", title: "Promote", desc: "Share on social media, blogs, or email." },
                                { step: "04", title: "Earn", desc: "Get paid for every qualified referral." },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 text-center">
                                    <div className="w-16 h-16 mx-auto bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-xl shadow-gray-200">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-20 bg-[#1a1a1a] text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to start earning?</h2>
                    <Link to="/affiliate/register" className="inline-block bg-[#d4af37] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-[#c29f2d] transition-colors shadow-lg shadow-[#d4af37]/20">
                        Join the Program Now
                    </Link>
                </div>
            </section>
        </div>
    );
}
