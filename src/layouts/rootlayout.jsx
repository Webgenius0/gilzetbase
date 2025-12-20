import Footer from "@/shared/footer/footer";
import Navbar from "@/shared/navbar/navbar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer - always at bottom */}
      <Footer />
    </div>
  );
}
