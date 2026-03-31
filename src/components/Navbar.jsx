import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <Link to="/" className="text-xl font-bold text-gray-800">
        MyApp
      </Link>
      <ul className="flex gap-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'
            }
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
