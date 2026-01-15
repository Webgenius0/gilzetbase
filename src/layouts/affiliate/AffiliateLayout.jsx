import { Outlet } from "react-router";
import AffiliateSidebar from "./AffiliateSidebar";

export default function AffiliateLayout() {
    return (
        <div className="flex min-h-screen bg-[#f8f9fc]">
            {/* Sidebar */}
            <AffiliateSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Topbar */}
                <div className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 shadow-sm sticky top-0 z-50">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                            Affiliate Dashboard
                        </h2>
                        <p className="text-sm text-gray-500">Welcome back, Partner</p>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Stats Pill */}
                        <div className="hidden md:flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                            <div className="flex flex-col items-end">
                                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Total Earnings</span>
                                <span className="text-sm font-bold text-green-600">$1,250.00</span>
                            </div>
                            <div className="h-8 w-[1px] bg-gray-200"></div>
                            <div className="flex flex-col items-end">
                                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Referrals</span>
                                <span className="text-sm font-bold text-blue-600">54</span>
                            </div>
                        </div>

                        {/* Profile */}
                        <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
                            <div className="text-right hidden sm:block">
                                <div className="text-sm font-bold text-gray-900">John Doe</div>
                                <div className="text-xs text-[#d4af37] font-medium">Gold Tier</div>
                            </div>
                            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#d4af37] to-[#bfa030] p-[2px]">
                                <div className="h-full w-full rounded-full border-2 border-white overflow-hidden bg-gray-100">
                                    <img
                                        src="https://ui-avatars.com/api/?name=John+Doe&background=random"
                                        alt="Affiliate Profile"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page Content */}
                <div className="p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
