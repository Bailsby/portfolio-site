import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 border-b border-gray-800">
      <div className="font-bold text-lg">Jake Bailey</div>

      <div className="flex gap-6 text-sm">
        <Link className="hover:text-gray-300" to="/">
          Home
        </Link>

        <Link className="hover:text-gray-300" to="/projects">
          Projects
        </Link>

        <Link className="hover:text-gray-300" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}