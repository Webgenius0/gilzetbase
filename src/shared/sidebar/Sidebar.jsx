import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0b0b0b] text-white flex flex-col justify-between">
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-bold text-[#d4af37]">
            AVA <span className="text-sm font-normal">Art Vision Awards</span>
          </h1>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2">
          <NavLink
            to="/dashboard/account"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? "bg-[#d4af37] text-black" : "hover:bg-white/10"
              }`
            }
          >
            My Account
          </NavLink>

          <NavLink
            to="/dashboard/submissions"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? "bg-[#d4af37] text-black" : "hover:bg-white/10"
              }`
            }
          >
            My Submissions
          </NavLink>

          <NavLink
            to="/dashboard/participation"
            className={({ isActive }) =>
              `block px-4 py-2 rounded ${
                isActive ? "bg-[#d4af37] text-black" : "hover:bg-white/10"
              }`
            }
          >
            Participation
          </NavLink>
        </nav>
      </div>

      {/* Bottom */}
      <div className="p-4 border-t border-white/10">
        <button className="text-red-400 text-sm">Sign Out</button>
      </div>
    </aside>
  );
}
