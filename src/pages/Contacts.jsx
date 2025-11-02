import { useState, useRef } from 'react'; 
import { motion } from 'framer-motion';
import { Button, TextField, IconButton, Alert } from '@mui/material'; 
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser'; 

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import contactBannerImage from '../assets/traveller.jpg';

const logoColors = {
  purple: '#5A2A84',
  darkerPurple: '#3E1C5A',
  orange: '#F7941E',
  lighterOrange: '#FDBB2D',
};

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_sx6ppbf',     // <--  Service ID
      'contact_us_form',    // <-- Template ID
      form.current,
      'ghfiBcYBYZC__KwNg'      // <-- Public Key
    )
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        setIsSending(false);
        setIsSent(true);
        form.current.reset();
      },
      (error) => {
        console.log('FAILED...', error.text);
        setIsSending(false);
      }
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-50"
    >
      <section className="relative h-96 w-full flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactBannerImage})` }}
          aria-label="Connect with Chrysle Tours"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Contact Chrysle Tours
          </h1>
          <p className="text-xl md:text-2xl font-light drop-shadow-md">
            Let's plan your unforgettable Sri Lankan journey together.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-16"
            style={{ color: logoColors.purple }}
          >
            Get In Touch With Our Travel Experts
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-3xl font-bold mb-6" style={{ color: logoColors.purple }}>
                Reach Out Directly
              </h3>
              <div className="space-y-6 text-lg">
                <p className="flex items-center">
                  <PhoneIcon className="mr-3" style={{ color: logoColors.purple }} />
                  <strong>Phone:</strong> <a href="tel:+94777601787" className="ml-2 text-gray-700 hover:text-brand-orange transition">+94 777 601 787</a>
                </p>
                <p className="flex items-center">
                  <EmailIcon className="mr-3" style={{ color: logoColors.purple }} />
                  <strong>Email:</strong> <a href="mailto:info@chrysletours.com" className="ml-2 text-gray-700 hover:text-brand-orange transition">info@chrysletours.com</a>
                </p>
                <p className="flex items-start">
                  <LocationOnIcon className="mr-3 mt-1" style={{ color: logoColors.purple }} />
                  <strong>Address:</strong> <span className="ml-2">Colombo, Sri Lanka</span>
                </p>
                <p className="flex items-center">
                  <ScheduleIcon className="mr-3" style={{ color: logoColors.purple }} />
                  <strong>Working Hours:</strong> <span className="ml-2">Mon - Sun: 9:00 AM - 5:00 PM (LKT)</span>
                </p>
              </div>
              <h3 className="text-2xl font-bold mt-10 mb-4" style={{ color: logoColors.purple }}>
                Follow Us
              </h3>
              <div className="flex space-x-2">
                <IconButton 
                  aria-label="Facebook" 
                  href="https://www.facebook.com/people/Chrysle-Tours/61555784379931/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  sx={{ color: logoColors.purple, '&:hover': { color: logoColors.orange } }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton 
                  aria-label="Instagram" 
                  href="https://www.instagram.com/chrysletours" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  sx={{ color: logoColors.purple, '&:hover': { color: logoColors.orange } }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton 
                  aria-label="Twitter" 
                  href="https://twitter.com/chrysletours" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  sx={{ color: logoColors.purple, '&:hover': { color: logoColors.orange } }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton 
                  aria-label="LinkedIn" 
                  href="https://www.linkedin.com/company/chrysletours" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  sx={{ color: logoColors.purple, '&:hover': { color: logoColors.orange } }}
                >
                  <LinkedInIcon />
                </IconButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-gray-50 rounded-lg shadow-lg"
            >
              <h3 className="text-3xl font-bold mb-6" style={{ color: logoColors.purple }}>
                Send Us a Message
              </h3>
              
              {/* 4. Wrap your fields in the form tag */}
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name" 
                  required
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  required
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message" 
                  required
                  multiline
                  rows={6}
                  variant="outlined"
                />
                
                {isSent && (
                  <Alert severity="success">Message Sent! We will get back to you soon.</Alert>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={isSending} 
                  sx={{
                    fontWeight: 'bold',
                    py: 1.5,
                    fontSize: '1.1rem',
                    backgroundColor: logoColors.orange,
                    '&:hover': {
                      backgroundColor: logoColors.lighterOrange
                    }
                  }}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section 
        className="py-24 text-center"
        style={{ background: `linear-gradient(to right, ${logoColors.orange}, ${logoColors.lighterOrange})` }}
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white mb-10"
          >
            Don't hesitate to reach out! Our friendly team is eager to assist you in planning your dream Sri Lankan adventure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="contained"
              component={Link}
              to="/services"
              size="large"
              sx={{
                fontWeight: 'bold',
                px: 8,
                py: 2,
                fontSize: '1.25rem',
                backgroundColor: 'white',
                color: logoColors.purple,
                '&:hover': { 
                  backgroundColor: '#F3F4F6',
                  color: logoColors.darkerPurple
                },
              }}
            >
              View Our Services
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}