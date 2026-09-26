import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MatrixBackground from '../components/MatrixBackground'

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Matrix background */}
      <MatrixBackground />

      {/* glow layer */}
      <div className="ambient-glow absolute inset-0 -z-20">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full" />
      </div>

      <Navbar />

      <main className="w-full max-w-5xl mx-auto p-6 relative z-10 flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* New pages open at the top, Back returns to where you were, and a
          fragment like /projects#hill-bagger scrolls to that card. Without it,
          moving between pages kept the previous page's scroll position. */}
      <ScrollRestoration />
    </div>
  )
}
