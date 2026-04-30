import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MatrixBackground from '../components/MatrixBackground'

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Matrix background */}
      <MatrixBackground />

      {/* glow layer */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <Navbar />

      <main className="max-w-5xl mx-auto p-6 relative z-10">
        <Outlet />
      </main>
    </div>
  )
}
