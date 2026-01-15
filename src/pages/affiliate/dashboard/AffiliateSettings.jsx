import React from 'react';

export default function AffiliateSettings() {
    return (
        <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-8">
                {/* Profile Section */}
                <section>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input type="text" defaultValue="John Doe" className="w-full rounded-lg border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" defaultValue="john@example.com" disabled className="w-full rounded-lg border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Website / Social Profile</label>
                            <input type="text" defaultValue="https://instagram.com/johndoe_photo" className="w-full rounded-lg border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]" />
                        </div>
                    </div>
                </section>

                {/* Payment Section */}
                <section>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">Payout Method</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 border rounded-lg border-[#d4af37] bg-yellow-50/20">
                            <input type="radio" name="payout" defaultChecked className="text-[#d4af37] focus:ring-[#d4af37]" />
                            <div className="flex-1">
                                <span className="font-semibold text-gray-900 block">PayPal</span>
                                <span className="text-sm text-gray-500">Payments sent to john@example.com</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 border rounded-lg border-gray-200">
                            <input type="radio" name="payout" className="text-[#d4af37] focus:ring-[#d4af37]" />
                            <div className="flex-1">
                                <span className="font-semibold text-gray-900 block">Bank Transfer</span>
                                <span className="text-sm text-gray-500">Wire transfer to bank account</span>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="pt-4">
                    <button className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-lg hover:bg-black transition-colors font-medium">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
