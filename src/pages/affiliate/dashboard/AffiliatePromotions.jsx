import React, { useState } from 'react';

export default function AffiliatePromotions() {
    const [copied, setCopied] = useState(false);
    const affiliateLink = "https://gilzet.com/?ref=johndoe123";

    const handleCopy = () => {
        navigator.clipboard.writeText(affiliateLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Marketing Assets</h2>
                    <p className="text-gray-500 mt-1">Tools to help you promote and earn.</p>
                </div>
            </div>

            {/* Affiliate Link Card */}
            <div className="bg-gradient-to-r from-[#1a1a1a] to-[#333] rounded-xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37] opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                <h3 className="text-xl font-semibold mb-2 relative z-10">Your Unique Referral Link</h3>
                <p className="text-gray-300 mb-6 max-w-xl relative z-10">Share this link anywhere. When someone clicks and registers, you earn commission on their payments.</p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-2xl relative z-10">
                    <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 font-mono text-sm text-[#d4af37] break-all">
                        {affiliateLink}
                    </div>
                    <button
                        onClick={handleCopy}
                        className="bg-[#d4af37] hover:bg-[#bfa030] text-black font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 min-w-[140px]"
                    >
                        {copied ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Copied!
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                Copy Link
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Banners Section */}
            <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Banner Ads</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Banner 1 */}
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                            728 x 90 Leaderboard Preview
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="font-semibold text-gray-800">Leaderboard Banner</h4>
                                <p className="text-xs text-gray-400">728x90 • PNG</p>
                            </div>
                            <button className="text-sm text-[#d4af37] font-medium hover:underline">Download</button>
                        </div>
                    </div>

                    {/* Banner 2 */}
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                            300 x 250 Medium Rectangle Preview
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="font-semibold text-gray-800">Medium Rectangle</h4>
                                <p className="text-xs text-gray-400">300x250 • JPG</p>
                            </div>
                            <button className="text-sm text-[#d4af37] font-medium hover:underline">Download</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Assets Section */}
            <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Social Media Stories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="group relative aspect-[9/16] bg-gray-200 rounded-xl overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-white">
                                    Download
                                </button>
                            </div>
                            <div className="h-full w-full flex items-center justify-center text-gray-400 font-medium">
                                Story {i}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
