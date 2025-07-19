import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, TextField, TextareaAutosize } from '@mui/material';
import { Link } from 'react-router-dom';

import contactBannerImage from '../assets/traveller.jpg';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20 bg-gray-50"
    >
      <section className="relative h-96 w-full flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contactBannerImage})` }}
          aria-label="Connect with Chrysle Tours"
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
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

      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-blue-700 mb-12"
          >
            Get In Touch With Our Travel Experts
          </motion.h2>

          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-3xl font-semibold text-blue-800 mb-6">Reach Out Directly</h3>
              <div className="space-y-6 text-lg">
                <p className="flex items-center">
                  <span className="text-blue-600 mr-3 text-2xl">📞</span>
                  <strong>Phone:</strong> <a href="tel:+94771234567" className="ml-2 text-gray-700 hover:text-blue-600 transition">+94 7777 601 787</a> (Sri Lanka)
                </p>
                <p className="flex items-center">
                  <span className="text-blue-600 mr-3 text-2xl">📧</span>
                  <strong>Email:</strong> <a href="mailto:info@chrysletours.com" className="ml-2 text-gray-700 hover:text-blue-600 transition">info@chrysletours.com</a>
                </p>
                <p className="flex items-center">
                  <span className="text-blue-600 mr-3 text-2xl">📍</span>
                  <strong>Address:</strong> <span className="ml-2">Colombo, Sri Lanka</span>
                </p>
                <p className="flex items-center">
                  <span className="text-blue-600 mr-3 text-2xl">⏰</span>
                  <strong>Working Hours:</strong> <span className="ml-2">Monday - Sunday: 9:00 AM - 5:00 PM (LKT)</span>
                </p>
              </div>
              <h3 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/people/Chrysle-Tours/61555784379931/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 transition-colors text-4xl">
                  <img src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="Facebook" className="w-8 h-8" />
                </a>
                <a href="https://instagram.com/chrysletours" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 transition-colors text-4xl">
                  <img src="https://img.icons8.com/ios-filled/50/instagram-new.png" alt="Instagram" className="w-8 h-8" />
                </a>
                <a href="https://twitter.com/chrysletours" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 transition-colors text-4xl">
                  <img src="https://img.icons8.com/ios-filled/50/twitterx.png" alt="Twitter/X" className="w-8 h-8" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-800 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-10"
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
              color="secondary"
              component={Link}
              to="/services"
              size="large"
              sx={{
                fontWeight: 'bold',
                px: 8,
                py: 2,
                fontSize: '1.25rem',
                backgroundColor: 'white',
                color: '#1E40AF',
                '&:hover': { backgroundColor: '#F3F4F6' },
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
