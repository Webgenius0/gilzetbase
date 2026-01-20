import React, { useState } from 'react';
import {
    Copy,
    Check,
    Download,
    Instagram,
    Share2,
    Layout,
    Globe
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function AffiliatePromotions() {
    const [copied, setCopied] = useState(false);
    const affiliateLink = "https://ava.art/ref/johndoe77";

    const handleCopy = () => {
        navigator.clipboard.writeText(affiliateLink);
        setCopied(true);
        toast.success("Referral link copied!");
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-8 pb-12">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Marketing Kit</h1>
                <p className="text-gray-500 text-sm">Use these assets to promote the platform and track your referrals.</p>
            </div>

            {/* 🔗 Primary Link Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#d4af37]/10 rounded-lg text-[#d4af37]">
                        <Globe size={20} />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">Your Referral URL</h2>
                </div>

                <p className="text-gray-500 text-sm mb-6 max-w-2xl">
                    Share this unique link to track your referrals. Any user who registers via this link within 30 days will be attributed to your account.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                    <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-mono text-sm text-gray-700 flex items-center overflow-hidden">
                        <span className="truncate">{affiliateLink}</span>
                    </div>
                    <button
                        onClick={handleCopy}
                        className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2
                            ${copied ? 'bg-green-600 text-white' : 'bg-[#d4af37] text-black hover:bg-[#bfa030]'}`}
                    >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                        {copied ? 'Copied' : 'Copy Link'}
                    </button>
                </div>
            </div>

            {/* 🖼 Banner Ads */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <Layout className="text-gray-400" size={20} />
                    <h3 className="text-lg font-bold text-gray-900">Display Banners</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: "Global Leaderboard", size: "728 x 90", type: "Web Header", img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" },
                        { title: "Medium Rectangle", size: "300 x 250", type: "Sidebar Ad", img: "https://images.unsplash.com/photo-1492691523567-6170c8175363?q=80&w=2070&auto=format&fit=crop" }
                    ].map((banner, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
                            <div className="aspect-video relative bg-gray-100 flex items-center justify-center overflow-hidden">
                                <img src={banner.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
                                <div className="absolute top-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded">
                                    {banner.size}
                                </div>
                            </div>
                            <div className="p-4 flex justify-between items-center">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900">{banner.title}</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">{banner.type}</p>
                                </div>
                                <button
                                    onClick={() => toast.success("Downloading asset...")}
                                    className="p-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <Download size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 📱 Social Media */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <Instagram className="text-gray-400" size={20} />
                    <h3 className="text-lg font-bold text-gray-900">Social Assets</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1516035069341-349198672877?q=80&w=1964&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop"
                    ].map((url, i) => (
                        <div key={i} className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center">
                            <img src={url} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <button
                                    onClick={() => toast.success("Downloading social asset...")}
                                    className="p-2 bg-white rounded-full text-black hover:bg-[#d4af37] transition-colors"
                                >
                                    <Download size={18} />
                                </button>
                                <button
                                    onClick={() => toast.info("Opening share dialog...")}
                                    className="p-2 bg-white rounded-full text-black hover:bg-[#d4af37] transition-colors"
                                >
                                    <Share2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

