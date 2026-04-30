import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const linkClass = (path: string) =>
    `transition-colors ${
      location.pathname === path
        ? 'text-white'
        : 'text-gray-400 hover:text-white'
    }`

  return (
<nav className="sticky top-0 z-50 flex items-center justify-between p-6 border-b border-gray-900 bg-[#050505]/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.45)]">      {/* Logo / Brand */}
      <Link
        to="/"
        className="flex items-center gap-2 hover:opacity-80 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V10.5z"
          />
        </svg>

        <span className="font-semibold text-lg tracking-tight">
          Jake Bailey
        </span>
      </Link>

      {/* Nav links */}
      <div className="flex gap-6 text-sm">
        <Link className={linkClass('/')} to="/">
          Home
        </Link>

        <Link className={linkClass('/projects')} to="/projects">
          Projects
        </Link>

        <Link className={linkClass('/contact')} to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  )
}
