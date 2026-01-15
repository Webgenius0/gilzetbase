import React from 'react';

export default function AffiliateOverview() {
    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Earnings", value: "$4,250.00", change: "+12.5%", color: "text-green-600", desc: "Lifetime earnings" },
                    { label: "Pending Commissions", value: "$350.00", change: "Processing", color: "text-orange-500", desc: "Expected payout: Feb 01" },
                    { label: "Total Referrals", value: "128", change: "+5 new", color: "text-blue-600", desc: "This month" },
                    { label: "Conversion Rate", value: "3.2%", change: "+0.4%", color: "text-purple-600", desc: "Visits to Signups" },
                ].map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</h3>
                        <div className="mt-2 flex items-baseline gap-3">
                            <span className={`text-3xl font-bold ${stat.color.replace('text-', 'text-gray-800')}`}>{stat.value}</span>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-opacity-10 ${stat.change.includes('+') ? 'bg-green-500 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="mt-2 text-xs text-gray-400">{stat.desc}</p>
                    </div>
                ))}
            </div>

            {/* Main Content Area: Charts & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chart Section (Placeholder) */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-800">Earnings Performance</h3>
                        <select className="text-sm border-none bg-gray-50 rounded-md px-3 py-1 cursor-pointer focus:ring-0">
                            <option>Last 30 Days</option>
                            <option>Last 3 Months</option>
                            <option>This Year</option>
                        </select>
                    </div>

                    {/* Visual Placeholder for Chart */}
                    <div className="h-64 bg-gradient-to-b from-gray-50 to-white rounded-lg border border-dashed border-gray-200 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-[#d4af37]/5 skew-y-3 transform origin-bottom-left"></div>
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-[#d4af37]/10 -skew-y-2 transform origin-bottom-right"></div>
                        <span className="text-gray-400 text-sm font-medium z-10 group-hover:scale-105 transition-transform">
                            Chart Visualization Component will go here
                        </span>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Recent Activity</h3>
                    <div className="space-y-6">
                        {[
                            { user: "Sarah M.", action: "Signed up via your link", time: "2 hours ago", icon: "👤" },
                            { user: "Commission", action: "Payout of $150.00 approved", time: "1 day ago", icon: "💰" },
                            { user: "Mike T.", action: "Subscribed to Premium Plan", time: "2 days ago", icon: "⭐" },
                            { user: "System", action: "Monthly report available", time: "3 days ago", icon: "📄" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 items-start">
                                <div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center text-lg border border-gray-100">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800">{item.action}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs font-semibold text-[#d4af37]">{item.user}</span>
                                        <span className="text-[10px] text-gray-400">• {item.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-2 text-sm text-[#d4af37] border border-[#d4af37] rounded-lg hover:bg-[#d4af37] hover:text-white transition-colors">
                        View All Activity
                    </button>
                </div>
            </div>
        </div>
    );
}
