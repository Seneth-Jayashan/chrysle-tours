import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Button, Typography } from '@mui/material'; 

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email'; 
import PhoneIcon from '@mui/icons-material/Phone'; 
import LocationOnIcon from '@mui/icons-material/LocationOn'; 

import CompanyLogo from '../assets/logo-transparent.png'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <div className="flex flex-col items-start md:col-span-1">
          <img src={CompanyLogo} alt="Chrysle Tours Logo" className="h-24 object-contain mb-4" /> 
          
          <Typography variant="body2" className="text-gray-400 mb-4">
            Crafting unforgettable journeys to the heart of Sri Lanka.
          </Typography>
          
          <div className="flex space-x-4">
            <IconButton 
              aria-label="Facebook" 
              href="https://www.facebook.com/people/Chrysle-Tours/61555784379931/" 
              target="_blank" 
              rel="noopener noreferrer" 
              sx={{ color: '#bdbdbd', '&:hover': { color: '#ffffff' } }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton 
              aria-label="Instagram" 
              href="https://www.instagram.com/chrysletours" 
              target="_blank" 
              rel="noopener noreferrer" 
              sx={{ color: '#bdbdbd', '&:hover': { color: '#ffffff' } }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton 
              aria-label="Twitter" 
              href="https://twitter.com/chrysletours" 
              target="_blank" 
              rel="noopener noreferrer" 
              sx={{ color: '#bdbdbd', '&:hover': { color: '#ffffff' } }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton 
              aria-label="LinkedIn" 
              href="https://www.linkedin.com/company/chrysletours" 
              target="_blank" 
              rel="noopener noreferrer" 
              sx={{ color: '#bdbdbd', '&:hover': { color: '#ffffff' } }}
            >
              <LinkedInIcon />
            </IconButton>
          </div>
        </div>

        <div className="md:col-span-1">
          <Typography variant="h6" component="h4" className="text-white font-semibold mb-4">
            Quick Links
          </Typography>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Typography component="span" variant="body2">Home</Typography>
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Typography component="span" variant="body2">Services</Typography>
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Typography component="span" variant="body2">About Us</Typography>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Typography component="span" variant="body2">Contact Us</Typography>
              </Link>
            </li>

          </ul>
        </div>

        <div className="md:col-span-1">
          <Typography variant="h6" component="h4" className="text-white font-semibold mb-4">
            Get In Touch
          </Typography>
          <ul className="space-y-3">
            <li className="flex items-center">
              <PhoneIcon sx={{ fontSize: 20, mr: 1, color: '#bdbdbd' }} />
              <a href="tel:+94777601787" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Typography component="span" variant="body2">
                  +94 777 601 787
                </Typography>
              </a>
            </li>
            <li className="flex items-center">
              <EmailIcon sx={{ fontSize: 20, mr: 1, color: '#bdbdbd' }} />
              <a href="mailto:info@chrysletours.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Typography component="span" variant="body2">
                  info@chrysletours.com
                </Typography>
              </a>
            </li>
            <li className="flex items-start">
              <LocationOnIcon sx={{ fontSize: 20, mr: 1, color: '#bdbdbd', mt: '2px' }} />
              <address className="text-gray-400 not-italic">
                <Typography variant="body2">
                  Colombo, Western Province, <br />
                  Sri Lanka.
                </Typography>
              </address>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <Typography variant="h6" component="h4" className="text-white font-semibold mb-4">
            Plan Your Dream Trip
          </Typography>
          <Typography variant="body2" className="text-gray-400 mb-6">
            Ready to explore Sri Lanka? Let us help you design your perfect adventure.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/contact"
            sx={{
              fontWeight: 'bold',
              px: 4,
              py: 1.2,
              borderRadius: '25px',
              backgroundColor: '#5A67D8',
              color: 'white',
              '&:hover': {
                backgroundColor: '#4C51BF',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Request a Quote
          </Button>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
        <Typography variant="body2">
          &copy; {currentYear} Chrysle Tours. All rights reserved.
        </Typography>
        <Typography variant="body2" className="mt-2">
          Developed by <a href="https://sjaywebsolutions.lk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">S JAY Web Solutions (Pvt) Ltd</a>
        </Typography>
      </div>
    </footer>
  );
}