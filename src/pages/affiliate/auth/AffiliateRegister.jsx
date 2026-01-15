import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

export default function AffiliateRegister() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userType: 'Photographer', // Default
        promotionChannels: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
            toast.error("Please fill in all required fields");
            return;
        }

        setIsLoading(true);

        try {
            // TODO: Replace with actual API call
            // const res = await axiosPublic.post('/affiliate/register', formData);

            // Simulating API latency
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log("Submitting Affiliate Application:", formData);

            toast.success("Application submitted successfully! Please log in.");
            navigate('/affiliate/login');

        } catch (error) {
            console.error(error);
            toast.error("Registration failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                {/* Left Info Panel */}
                <div className="bg-[#1a1a1a] text-white p-10 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37] opacity-10 rounded-full blur-3xl -mr-12 -mt-12"></div>

                    <div className="relative z-10">
                        <Link to="/affiliate" className="text-[#d4af37] font-bold text-xl mb-8 block">AVA Affiliate</Link>
                        <h2 className="text-3xl font-bold mb-4">Join the program</h2>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="text-[#d4af37] mt-1">✓</span>
                                <span>Competitive commission rates</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#d4af37] mt-1">✓</span>
                                <span>Exclusive marketing assets</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#d4af37] mt-1">✓</span>
                                <span>Monthly payouts via PayPal/Bank</span>
                            </li>
                        </ul>
                    </div>

                    <div className="relative z-10 mt-12">
                        <p className="text-gray-400 text-xs">
                            By applying, you agree to our Affiliate Terms & Conditions and Privacy Policy. All applications are subject to approval.
                        </p>
                    </div>
                </div>

                {/* Right Form Panel */}
                <div className="p-10 md:w-3/5">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">I am a</label>
                            <select
                                name="userType"
                                value={formData.userType}
                                onChange={handleChange}
                                className="w-full rounded-md border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
                            >
                                <option value="Photographer">Photographer</option>
                                <option value="Visitor">Visitor / Art Lover</option>
                                <option value="Influencer">Influencer</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Promotion Channels (Website/Social)</label>
                            <input
                                type="text"
                                name="promotionChannels"
                                value={formData.promotionChannels}
                                onChange={handleChange}
                                placeholder="e.g. instagram.com/myphotos"
                                className="w-full rounded-md border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength={6}
                                className="w-full rounded-md border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#d4af37] hover:bg-[#c29f2d] text-black font-bold py-3 rounded-lg transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    "Submit Application"
                                )}
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-center">
                        <span className="text-sm text-gray-500">Already a partner? </span>
                        <Link to="/affiliate/login" className="text-sm text-[#d4af37] font-semibold hover:underline">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
