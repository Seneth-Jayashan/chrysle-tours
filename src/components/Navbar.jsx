import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../assets/logo-transparent.png'; 

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link 
          to="/" 
          className={`text-2xl font-bold flex items-center transition-colors duration-300 ${
            isScrolled ? 'text-brand-purple' : 'text-white'
          }`}
        >
          <img src={Logo} alt='Chrysle Tours' className='w-10 mr-2' />
          Chrysle Tours
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {links.map(({ name, path }, index) => {
            if (index === links.length - 1) {
              return (
                <Link key={name} to={path}>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 rounded-full font-medium text-white bg-orange-400 hover:bg-orange-200 transition-colors duration-300 shadow-md"
                  >
                    {name}
                  </motion.button>
                </Link>
              );
            }
            return (
              <NavLink
                key={name}
                to={path}
                end
                className={({ isActive }) =>
                  'font-medium transition-colors duration-300 relative ' +
                  (isActive
                    ? 'text-orange-400' 
                    : isScrolled
                      ? 'text-gray-700 hover:text-orange-400' 
                      : 'text-white hover:text-orange-200') +
                  (isActive ? ' after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-orange-400' : '')
                }
              >
                <motion.span whileHover={{ y: -2 }}>
                  {name}
                </motion.span>
              </NavLink>
            );
          })}
        </div>

        <button
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            isScrolled ? 'text-brand-purple' : 'text-white'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white shadow-lg"
          >
            <ul className="flex flex-col px-6 py-4">
              {links.map(({ name, path }) => (
                <li key={name} className="border-b border-gray-100">
                  <NavLink
                    to={path}
                    end
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      'block w-full py-4 text-gray-700 font-medium transition-colors duration-300 ' +
                      (isActive ? 'text-brand-orange' : 'hover:text-brand-orange')
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