import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', 'path': '/about' },
  { name: 'Services', 'path': '/services' },
  { name: 'Gallery', 'path': '/gallery' },
  { name: 'Contact', 'path': '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-purple-600 flex items-center">
          <img src='src/assets/logo-transparent.png' alt='Chrysle Tours' className='w-10'></img>
          Chrysle Tours
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              end
              className={({ isActive }) =>
                `font-medium text-gray-700 hover:text-blue-600 transition ${
                  isActive ? 'text-blue-700' : ''
                }`
              }
            >
              <motion.span whileHover={{ scale: 1.1 }}>
                {name}
              </motion.span>
            </NavLink>
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open} // Added for accessibility
        >
          {open ? (
            <svg
              className="w-8 h-8 text-blue-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 text-blue-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-inner"
          >
            <ul className="flex flex-col space-y-4 px-6 py-4">
              {links.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    end
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block text-gray-700 font-medium hover:text-blue-600 transition ${
                        isActive ? 'text-blue-700' : ''
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}