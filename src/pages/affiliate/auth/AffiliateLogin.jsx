import React from 'react';
import { Link } from 'react-router';

export default function AffiliateLogin() {
    return (
        <div className="min-h-screen grid md:grid-cols-2">
            {/* Left: Image / Branding */}
            <div className="hidden md:block bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
                <div className="relative z-10 p-12 h-full flex flex-col justify-between text-white">
                    <div className="font-bold text-2xl text-[#d4af37]">AVA Affiliate</div>
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Welcome Back, Partner.</h2>
                        <p className="text-gray-300 text-lg">Track your success and grow your earnings.</p>
                    </div>
                </div>
            </div>

            {/* Right: Form */}
            <div className="flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">Sign in to your account</h1>
                        <p className="text-gray-500 mt-2">Enter your details below</p>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" placeholder="you@company.com" className="w-full rounded-lg border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37] py-2.5" />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <a href="#" className="text-sm text-[#d4af37] hover:underline">Forgot password?</a>
                            </div>
                            <input type="password" placeholder="••••••••" className="w-full rounded-lg border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37] py-2.5" />
                        </div>

                        <button className="w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
                            Sign In
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        Don't have an affiliate account? <Link to="/affiliate/register" className="text-[#d4af37] font-semibold hover:underline">Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
