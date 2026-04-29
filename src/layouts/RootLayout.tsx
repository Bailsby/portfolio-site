import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* ambient background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-250px] right-[-150px] w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full" />
      </div>

      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}