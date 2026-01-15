import { NavLink } from "react-router";

export default function AffiliateSidebar() {
    return (
        <aside className="w-64 bg-[#1a1a1a] text-white flex flex-col justify-between h-screen sticky top-0 border-r border-white/10">
            {/* Top */}
            <div>
                {/* Logo */}
                <div className="p-6 border-b border-white/10">
                    <h1 className="text-xl font-bold text-[#d4af37]">
                        AVA <span className="text-sm font-normal text-gray-300">Affiliate</span>
                    </h1>
                </div>

                {/* Menu */}
                <nav className="p-4 space-y-2">
                    {/* ===== DASHBOARD ===== */}
                    <NavLink
                        to="/affiliate/panel"
                        end
                        className={({ isActive }) =>
                            `flex gap-3 items-center px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                                ? "bg-gradient-to-r from-[#d4af37] to-[#bfa030] text-black font-semibold shadow-lg shadow-[#d4af37]/20"
                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                            }`
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                        Overview
                    </NavLink>

                    {/* ===== COMMISSIONS ===== */}
                    <NavLink
                        to="/affiliate/panel/commissions"
                        className={({ isActive }) =>
                            `flex gap-3 items-center px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                                ? "bg-gradient-to-r from-[#d4af37] to-[#bfa030] text-black font-semibold shadow-lg shadow-[#d4af37]/20"
                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                            }`
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        Commissions
                    </NavLink>

                    {/* ===== MATERIALS ===== */}
                    <NavLink
                        to="/affiliate/panel/materials"
                        className={({ isActive }) =>
                            `flex gap-3 items-center px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                                ? "bg-gradient-to-r from-[#d4af37] to-[#bfa030] text-black font-semibold shadow-lg shadow-[#d4af37]/20"
                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                            }`
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        Marketing Assets
                    </NavLink>

                    {/* ===== SETTINGS ===== */}
                    <NavLink
                        to="/affiliate/panel/settings"
                        className={({ isActive }) =>
                            `flex gap-3 items-center px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                                ? "bg-gradient-to-r from-[#d4af37] to-[#bfa030] text-black font-semibold shadow-lg shadow-[#d4af37]/20"
                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                            }`
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        Settings
                    </NavLink>
                </nav>
            </div>

            {/* Bottom */}
            <div className="p-4 border-t border-white/10">
                <button className="flex items-center gap-2 text-red-400 hover:text-red-300 hover:bg-white/5 transition-all w-full px-4 py-3 rounded-lg group">
                    <svg className="group-hover:-translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
