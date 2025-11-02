import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Button, Typography } from '@mui/material'; 

// Import MUI Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email'; 
import PhoneIcon from '@mui/icons-material/Phone'; 
import LocationOnIcon from '@mui/icons-material/LocationOn'; 

// Import your logo
import CompanyLogo from '../assets/logo-transparent.png'; 

// Define brand colors to match your site
const logoColors = {
  purple: '#5A2A84',
  darkerPurple: '#3E1C5A',
  orange: '#F7941E',
  lighterOrange: '#FDBB2D',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="text-gray-300 py-16 px-4 sm:px-6 lg:px-8 font-sans"
      // 1. Use the brand's dark purple gradient
      style={{ background: `linear-gradient(to bottom, ${logoColors.purple}, ${logoColors.darkerPurple})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1: Logo and Socials */}
        <div className="flex flex-col items-start md:col-span-1">
          {/* 2. Adjusted logo size */}
          <img src={CompanyLogo} alt="Chrysle Tours Logo" className="h-20 object-contain mb-4" /> 
          
          <Typography variant="body2" className="text-gray-300 mb-5">
            Crafting unforgettable journeys to the heart of Sri Lanka.
          </Typography>
          
          <div className="flex space-x-2">
            <IconButton 
              aria-label="Facebook" 
              href="https://www.facebook.com/people/Chrysle-Tours/61555784379931/" 
              target="_blank" 
              rel="noopener noreferrer" 
              // 3. Branded hover effect
              sx={{ color: '#bdbdbd', '&:hover': { color: logoColors.lighterOrange } }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton 
              aria-label="Instagram" 
              href="https://www.instagram.com/chrysletours" 
              target="_blank" 
              rel="noopener noreferrer" 
              sx={{ color: '#bdbdbd', '&:hover': { color: logoColors.lighterOrange } }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton 
              aria-label="Twitter" 
              href="https://twitter.com/chrysletours" 
              target="_blank" 
              rel="noopener noreferrer" 
              sx={{ color: '#bdbdbd', '&:hover': { color: logoColors.lighterOrange } }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton 
              aria-label="LinkedIn" 
              href="https://www.linkedin.com/company/chrysletours" 
              target="_blank" 
              rel="noopener noreferrer" 
              sx={{ color: '#bdbdbd', '&:hover': { color: logoColors.lighterOrange } }}
            >
              <LinkedInIcon />
            </IconButton>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-1">
          <Typography variant="h6" component="h4" className="text-white font-semibold mb-5">
            Quick Links
          </Typography>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-gray-300 hover:text-brand-orange-light transition-colors duration-200">
                <Typography component="span" variant="body2">Home</Typography>
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-300 hover:text-brand-orange-light transition-colors duration-200">
                <Typography component="span" variant="body2">Services</Typography>
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-brand-orange-light transition-colors duration-200">
                <Typography component="span" variant="body2">About Us</Typography>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-brand-orange-light transition-colors duration-200">
                <Typography component="span" variant="body2">Contact Us</Typography>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Get In Touch */}
        <div className="md:col-span-1">
          <Typography variant="h6" component="h4" className="text-white font-semibold mb-5">
            Get In Touch
          </Typography>
          <ul className="space-y-4">
            <li className="flex items-center">
              <PhoneIcon sx={{ fontSize: 20, mr: 1.5, color: logoColors.lighterOrange }} />
              <a href="tel:+94777601787" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Typography component="span" variant="body2">
                  +94 777 601 787
                </Typography>
              </a>
            </li>
            <li className="flex items-center">
              <EmailIcon sx={{ fontSize: 20, mr: 1.5, color: logoColors.lighterOrange }} />
              <a href="mailto:info@chrysletours.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Typography component="span" variant="body2">
                  info@chrysletours.com
                </Typography>
              </a>
            </li>
            <li className="flex items-start">
              <LocationOnIcon sx={{ fontSize: 20, mr: 1.5, color: logoColors.lighterOrange, mt: '2px' }} />
              <address className="text-gray-300 not-italic">
                <Typography variant="body2">
                  Colombo, Western Province, <br />
                  Sri Lanka.
                </Typography>
              </address>
            </li>
          </ul>
        </div>

        {/* Column 4: CTA */}
        <div className="md:col-span-1 lg:col-span-1">
          <Typography variant="h6" component="h4" className="text-white font-semibold mb-5">
            Plan Your Dream Trip
          </Typography>
          <Typography variant="body2" className="text-gray-300 mb-6">
            Ready to explore Sri Lanka? Let us help you design your perfect adventure.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/contact"
            // 4. Styled to match the site's main orange CTA button
            sx={{
              fontWeight: 'bold',
              px: 5,
              py: 1.5,
              borderRadius: '25px',
              backgroundColor: logoColors.orange,
              color: 'white',
              fontSize: '0.95rem',
              '&:hover': {
                backgroundColor: logoColors.lighterOrange,
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Request a Quote
          </Button>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700/50 mt-16 pt-8 text-center text-gray-400 text-sm">
        <Typography variant="body2">
          &copy; {currentYear} Chrysle Tours. All rights reserved.
        </Typography>
        <Typography variant="body2" className="mt-2">
          Developed by <a href="https://sjaywebsolutions.lk" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange-light transition-colors duration-200 font-medium">S JAY Web Solutions (Pvt) Ltd</a>
        </Typography>
      </div>
    </footer>
  );
}